import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening in port ${port}`))