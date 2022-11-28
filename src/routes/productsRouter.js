import {  Router } from 'express';

import { checkIfProductExists} from '../middlewares/productsMiddlewares.js';
import {getProducts, getProduct} from "../controllers/productsControllers.js"


const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.get('/:id', checkIfProductExists, getProduct);


export default productsRouter;