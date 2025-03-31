import { Router } from "express";
import { getUser } from "../controllers/user.controller.js";
const userRouter = Router();

userRouter.get('/:id', getUser);

userRouter.get('/:id', getUser);

export default userRouter;