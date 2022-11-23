import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MOGNO_URI);

try {
    await mongoClient.connect();
    console.log("mongoDB connectado");
} catch (error) {
    console.log(error);
}

const db = mongoClient.db("yu-gi-oh");