import { Router } from 'express';

// Import the singup function from authControllers.js
import { singup } from '../controllers/authControllers.js';

const authRouter = Router();

authRouter.post('/singup', singup);

export default authRouter;