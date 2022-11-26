import express from 'express';
import cors from 'cors';
import authRouter from './routes/authRouter.js';
import productsRouter from './routes/productsRouter.js';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRouter);
app.use('/products', productsRouter);

const port = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port " + port);
});