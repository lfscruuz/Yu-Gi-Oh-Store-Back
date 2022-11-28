import dotenv from "dotenv";
import { MongoClient } from 'mongodb';

dotenv.config();


// Database

const mongoClient = new MongoClient( "mongodb+srv://driven:123@yu-gi-oh-cluster.umwiwud.mongodb.net/?retryWrites=true&w=majority" );
const db = mongoClient.db("yu-gi-oh");

// Database connection
mongoClient.connect().then(() => {
    db;
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
});

export default db;