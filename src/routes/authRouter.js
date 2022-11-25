import { Router } from 'express';

// Import the singup function from authControllers.js
import { singup } from '../controllers/authControllers.js';import { signup, postLogin} from '../controllers/authControllers.js';
import {sessionMiddleware, loginMiddleware} from '../middlewares/userMiddlewares.js';
import userMiddlewares from '../middlewares/userMiddlewares.js';


const authRouter = Router();

authRouter.post('/singup', singup, {sessionMiddleware);
authRouter.post("/login", loginMiddleware, postLogin);

export default authRouter;