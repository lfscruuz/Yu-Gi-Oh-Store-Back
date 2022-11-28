import { Router } from 'express';

import { getProducts, getProduct } from '../controllers/productsControllers.js';
import { checkIfProductExists, checkIfProductIsInCart, checkIfProductIsNotInCart} from '../middlewares/productsMiddlewares.js';

const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.get('/:id', checkIfProductExists, getProduct);
productsRouter.post('/:id/add', checkIfProductExists, checkIfProductIsNotInCart);
productsRouter.post('/:id/remove', checkIfProductExists, checkIfProductIsInCart);

export default productsRouter;