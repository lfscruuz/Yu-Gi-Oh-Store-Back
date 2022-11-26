import { Router } from 'express';
import { getProductController } from "../controllers/productsControllers.js"

const productRouter = Router()

productRouter.get("/allProducts", getProductController)

export default productRouter;
