import { Router } from 'express';

import { signup, postLogin} from '../controllers/authControllers.js';
import { loginMiddleware} from '../middlewares/userMiddlewares.js';

const authRouter = Router();

authRouter.post('/auth/signup', signup);
authRouter.post("/auth/login", loginMiddleware , postLogin);

export default authRouter;
