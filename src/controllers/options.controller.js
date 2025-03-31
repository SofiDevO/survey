import { SURVERY_DB } from "../database/survery/survery-db.js";

export const createOption = async ({body}, res) => {
    const {key, ...rest} = body;
    if(!key) return res.status(401).send();
    try{

        const result = await SURVERY_DB.insertAsync(rest)
        res.status(200).send(result);
    }catch(error){
        res.status(500).send('Error creating option');
    }
}
