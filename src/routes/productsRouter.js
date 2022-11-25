import { Router } from 'express';

// Import the productsControllers
import { getProducts, getProductById } from '../controllers/productsControllers.js';

const productsRouter = Router();

productsRouter.get('/products', getProducts);
productsRouter.get('/products/:id', getProductById);

export default productsRouter;