import express from "express"
import { getProductController } from "../controllers/productsControllers.js"

const productRouter = express.Router()

productRouter.get("/allProducts", getProductController)

export default productRouter;