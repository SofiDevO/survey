import { LocalDB } from "../local-db.js";
import { surveryConfig } from "./configs/survery.config.js";

export const SURVERY_DB = new LocalDB(surveryConfig);
