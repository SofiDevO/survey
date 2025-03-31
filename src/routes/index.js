import { Router } from "express";
import userRouter from "./user.route.js";
import optionsRouter from "./option.route.js";
const allroutes = Router();
allroutes.use('/users', userRouter);
allroutes.use('/options', optionsRouter);

export default allroutes;