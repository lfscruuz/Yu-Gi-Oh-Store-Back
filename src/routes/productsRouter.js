import { Router } from 'express';

import { getProducts, getProduct, addToCart, removeFromCart, showCart } from '../controllers/productsControllers.js';
import { checkIfProductExists, checkIfProductIsInCart, checkIfProductIsNotInCart} from '../middlewares/productsMiddlewares.js';
import { sessionMiddleware } from '../middlewares/userMiddlewares.js';

const productsRouter = Router();

productsRouter.use(sessionMiddleware);

productsRouter.get('/products', getProducts);
productsRouter.get('/products/:id', checkIfProductExists, getProduct);
productsRouter.get("/cart", showCart);

productsRouter.post('/cart/:id', checkIfProductExists, checkIfProductIsNotInCart, addToCart);
productsRouter.delete('/cart/:id', checkIfProductExists, checkIfProductIsInCart, removeFromCart);

export default productsRouter;