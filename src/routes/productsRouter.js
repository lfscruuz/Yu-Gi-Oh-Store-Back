import { Router } from 'express';

import { getProducts, getProduct, addToCart, removeFromCart, showCart } from '../controllers/productsControllers.js';
import { checkIfProductExists, checkIfProductIsInCart, checkIfProductIsNotInCart} from '../middlewares/productsMiddlewares.js';
import { sessionMiddleware } from '../middlewares/userMiddlewares.js';

const productsRouter = Router();



productsRouter.get('/products', getProducts);
productsRouter.get('/products/:id', checkIfProductExists, getProduct);
productsRouter.get("/cart", showCart);
productsRouter.post('/cart/:id', checkIfProductExists, checkIfProductIsNotInCart, addToCart, sessionMiddleware);
productsRouter.delete('/cart/:id', checkIfProductExists, checkIfProductIsInCart, removeFromCart, sessionMiddleware);

export default productsRouter;