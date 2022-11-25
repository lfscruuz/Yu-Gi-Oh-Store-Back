import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRouter from './routes/authRouter.js';
import productsRouter from './routes/productsRouter.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/products', productsRouter);

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});