import { Router } from 'express';

// Import the signup function from authControllers.js
import { signup, postLogin} from '../controllers/authControllers.js';
import {sessionMiddleware, loginMiddleware} from '../middlewares/userMiddlewares.js';


const authRouter = Router();

authRouter.post('/signup', signup);
authRouter.post("/login", loginMiddleware, postLogin);


export default authRouter;