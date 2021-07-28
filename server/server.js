// Necessary imports
import express from 'express';
import dotnev from 'dotenv';
dotnev.config()
import cookieParser from 'cookie-parser';
import connectDB from './config/database.js'


//Connecting to the database!

connectDB()

// Configuting "app"
const app = express();

//Necessary Configs
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//The Server SetUp
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
    console.log(`Server Connected on port ${PORT}`);
})