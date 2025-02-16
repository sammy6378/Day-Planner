import mongoose from 'mongoose';
import 'dotenv/config';


const url = process.env.MONGO_URL as string;

export const connectDB = async () =>{
    try {
        await mongoose.connect(url);
        console.log("Database connected...");
    } catch (error) {
        console.log("Unable to connect to DB", error);
    }
}