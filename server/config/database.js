import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("MongoDB Connection SUCCESSFUL");
    } catch (error) {
        console.error('MongoDB Connection FAILED');
        process.exit(1);
    };
};

export default connectDB