import dotenv from "dotenv";
import { MongoClient } from 'mongodb';

dotenv.config();


// Database
/*
const mongoClient = new MongoClient(process.env.MONGO_URI);
*/

const mongoClient = new MongoClient("mongodb+srv://lfscruz:SybfUKUtHR4Umlww@yu-gi-oh-cluster.umwiwud.mongodb.net/?retryWrites=true&w=majority")

// Database connection
try {
    await mongoClient.connect();
    console.log("MongoDB Conectado")
} catch (error) {
    console.log(error);
}

const db = mongoClient.db(process.env.DB_NAME);

export default db;