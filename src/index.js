import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
const app = express();


app.use(cors());
app.use(express.json());
app.use(authRoutes);



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening in port ${port}`))