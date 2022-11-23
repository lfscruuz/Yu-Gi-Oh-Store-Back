import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

// Database
const mongoClient = new MongoClient("mongodb+srv://lfscruz:SybfUKUtHR4Umlww@yu-gi-oh-cluster.umwiwud.mongodb.net/?retryWrites=true&w=majorityretryWrites=true&w=majority");
const db = mongoClient.db(process.env.DB_NAME);

// Database connection
mongoClient.connect().then(() => {
    db;
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
});

export default db;