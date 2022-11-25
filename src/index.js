import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRouter from './routes/authRouter.js';

dotenv.config();

// Server
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000

// Routers
app.use(authRouter);

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
