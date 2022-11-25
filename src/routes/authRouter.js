import { Router } from 'express';

// Import the singup function from authControllers.js
import { singup } from '../controllers/authControllers.js';
// Import userMiddlewares
import userMiddlewares from '../middlewares/userMiddlewares.js';

const authRouter = Router();

authRouter.post('/singup', singup, userMiddlewares);

export default authRouter;