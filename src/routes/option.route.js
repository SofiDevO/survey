import {Router} from 'express';
import { createOption } from '../controllers/options.controller.js';
const optionsRouter = Router();
optionsRouter.post('/', createOption);

export default optionsRouter;