import Router from "express";
import { postLogin } from "../controllers/authController.js";


const router = Router();

router.post("/login", postLogin);

export default router;