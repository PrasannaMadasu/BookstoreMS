import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

export const Connection = async () => {
    try {
        await mongoose.connect(process.env.URL);
        console.log('Connected to MongoDB');
    } catch(err) {
        console.error("Error connecting to MongoDB:" + err);
    }
}

Connection()
