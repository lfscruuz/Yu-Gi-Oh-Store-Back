import { Router } from 'express';

// Import the singup function from authControllers.js
import { singup, postLogin} from '../controllers/authControllers.js';


const authRouter = Router();

authRouter.post('/singup', singup);
authRouter.post("/login", postLogin);


export default authRouter;