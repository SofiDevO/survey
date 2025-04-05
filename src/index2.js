import express from 'express';
import NeDB from 'nedb';
import util from 'util';

const PORT = import.meta?.env?.PORT || 3000;

// express server
const app = express();
app.use(express.json());
// DB
// NeDB es una base de datos NoSQL basada en archivos, similar a MongoDB, pero más ligera y fácil de usar para aplicaciones pequeñas o prototipos.
export class LocalDB extends NeDB {
    constructor(options){
        super(options)
        this.removeAsync  = util.promisify(this.remove.bind(this));
        this.insertAsync  = util.promisify(this.insert.bind(this));
        this.updateAsync  = util.promisify(this.update.bind(this));
        this.findAsync    = util.promisify(this.find.bind(this));
        this.findOneAsync = util.promisify(this.findOne.bind(this));
    }
};
// Crear "Tabla" de opciones
export const SURVERY_DB = new LocalDB({
    filename: './src/database/survery.db',
    autoload: true
});
// Manejo de ruta
app.post('/options', async ({body}, res) => {
    const {key, ...rest} = body;
    if(!key) return res.status(401).send();
    try{
        const result = await SURVERY_DB.insertAsync(rest);
        res.json(result);
    }catch(error){
        res.status(500).send('Error creating option');
    }
});
app.get('/option/:id', async({params}, res)=>{
    const {id} = params;
    if(!/^\w{16}$/.test(id)) return res.status(400);
    try{
    const {_id,...result} = await SURVERY_DB.findOneAsync({_id: id});
    res.json(result);
    }catch(error){
        res.status(404).send();
    }
});
app.get('/options', async(_,res)=>{
    try{
        const result = await SURVERY_DB.findAsync({});
        res.json(result);
    }catch{
        res.status(404).send();
    }
});

// Inicio de servidor
app.listen(PORT, () => {
    console.log(`\x1b[33mListen app on port ${PORT}, http://localhost:${PORT}/\x1b[39m`);
});