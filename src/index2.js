import express from "express";
import NeDB from "nedb";
import util from "util";
import {UUID} from "./utils/uuidGenerator.js";
const PORT = import.meta?.env?.PORT || 3000;
// express server
const app = express();
app.use(express.json());
// DB
// NeDB es una base de datos NoSQL basada en archivos, similar a MongoDB, pero más ligera y fácil de usar para aplicaciones pequeñas o prototipos.
export class Table extends NeDB {
    constructor(options) {
        super(options);
        this.removeAsync = util.promisify(this.remove.bind(this));
        this.insertAsync = util.promisify(this.insert.bind(this));
        this.updateAsync = util.promisify(this.update.bind(this));
        this.findAsync = util.promisify(this.find.bind(this));
        this.findOneAsync = util.promisify(this.findOne.bind(this));
    }
}

// Crear "Tabla" de opciones
export const SURVERY_DB = new Table({
    filename: "./src/database/survery.db",
    autoload: true,
});

// Crear "Tabla" (colección) de votos
export const VOTES_DB = new Table({
    filename: "./src/database/votes.db",
    autoload: true,
});

// Middlewares
/**
 * @description Middleware para validar el id de la opción
 */
const MWValidateId = (req, res, next) => {
    if (!/^\w{16}$/.test(req.params.id)) return res.status(400).send();
    next();
};

app.use("/surveys/:id", MWValidateId);

// Anadir encuestas
app.post("/surveys", async ({ body }, res) => {

    const { key, ...rest } = body;
    rest.options.forEach(element => {
        element.id = UUID(16);
    });
    if (!key) return res.status(401).send();
    try {
        const result = await SURVERY_DB.insertAsync(rest);
        res.json(result);
    } catch (error) {
        res.status(500).send("Error creating option");
    }
});

// Manejo de ruta votes
app.post("/votes", async ({body, headers}, res) => {
    const IP = headers["X-Forwarded-For".toLowerCase()]
    body.ip = IP;
    try {
        await VOTES_DB.insertAsync(body);
        res.json({message: "voto añadido"});
    } catch (error) {
        res.status(500).send("Error creating option");
    }
});

// Optener encuesta por ID
app.get("/surveys/:id", async ({ params }, res) => {
    const { id } = params;
    try {
        const { _id, ...result } = await SURVERY_DB.findOneAsync({ _id: id });
        res.json(result);
    } catch (error) {
        res.status(404).send();
    }
});

app.get("/options", async ({ body }, res) => {
    const { id } = params;
    try {
        const { _id, ...result } = await SURVERY_DB.findOneAsync({ _id: id });
        res.json(result);
    } catch (error) {
        res.status(404).send();
    }
});


// Optener todas las encuestas
app.get("/surveys", async (_, res) => {
    try {
        const result = await SURVERY_DB.findAsync({});
        res.json(result);
    } catch {
        res.status(404).send();
    }
});

// Eliminar encuestas
app.delete("/surveys/:id", async ({ params }, res) => {
    const { id } = params;
    try {
        const { _id, ...result } = await SURVERY_DB.removeAsync({ _id: id });
        res.json(result);
    } catch (error) {
        res.status(404).send();
    }
});

// Inicio de servidor
app.listen(PORT, () => {
    console.log(
        `\x1b[33mListen app on port ${PORT}, http://localhost:${PORT}/\x1b[39m`
    );
});
