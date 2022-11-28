import { Router } from 'express';

import { getProducts, getProduct, addToCart, removeFromCart, showCart } from '../controllers/productsControllers.js';
import { checkIfProductExists, checkIfProductIsInCart, checkIfProductIsNotInCart} from '../middlewares/productsMiddlewares.js';
import { sessionMiddleware } from '../middlewares/userMiddlewares.js';

const productsRouter = Router();

productsRouter.get('/products', getProducts);
productsRouter.get('/products/:id', checkIfProductExists, getProduct);
productsRouter.use(sessionMiddleware);
productsRouter.post('/:id', checkIfProductExists, checkIfProductIsNotInCart, addToCart);
productsRouter.delete('/:id', checkIfProductExists, checkIfProductIsInCart, removeFromCart);

export default productsRouter;