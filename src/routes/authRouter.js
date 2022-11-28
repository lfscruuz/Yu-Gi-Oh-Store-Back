import { Router } from 'express';

import { signup, postLogin} from '../controllers/authControllers.js';
import { loginMiddleware} from '../middlewares/userMiddlewares.js';

const authRouter = Router();
 
authRouter.post('/signup', signup);
authRouter.post("/login", loginMiddleware , postLogin);

export default authRouter;
