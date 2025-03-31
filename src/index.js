import express from "express";
import allroutes from "./routes/index.js";
const PORT = import.meta?.env?.PORT || 3000;

const app = express();
app.use(express.json())

app.use('/', allroutes);

app.listen(PORT, () => {
    console.log(`\x1b[33mListen app on port ${PORT}, http://localhost:${PORT}/\x1b[39m`)
})