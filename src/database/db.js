import dotenv from "dotenv";
import { MongoClient } from 'mongodb';

dotenv.config();


// Database

const mongoClient = new MongoClient(process.env.MONGO_URI);


// Database connection
try {
    await mongoClient.connect();
    console.log("MongoDB Conectado")
} catch (error) {
    console.log(error);
}

const db = mongoClient.db("yu-gi-oh");

export default db;