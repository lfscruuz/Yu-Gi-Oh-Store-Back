import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

// Database
const mongoClient = new MongoClient(process.env.MONGO_URI);
const db = mongoClient.db(process.env.DB_NAME);

// Database connection
mongoClient.connect().then(() => {
    db;
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
});

export default db;