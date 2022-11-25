import { Router } from 'express';

import { signup, postLogin} from '../controllers/authControllers.js';
import {sessionMiddleware, loginMiddleware} from '../middlewares/userMiddlewares.js';

const authRouter = Router();

authRouter.post('/singup', singup, sessionMiddleware);
authRouter.post("/login", loginMiddleware, postLogin);

export default authRouter;
