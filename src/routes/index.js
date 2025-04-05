import { Router } from "express";

import optionsRouter from "./option.route.js";
const allroutes = Router();
allroutes.use('/options', optionsRouter);

export default allroutes;