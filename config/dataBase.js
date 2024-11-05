import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.URI_MONGO;

const connectDatabase = async () => {
    try {
        await mongoose.connect(url);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

export default connectDatabase;
