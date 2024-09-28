import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// const mongodbUrl = 'mongodb+srv://akashkawle0:root@ak-db.0nxb2.mongodb.net/AKDB' 
const mdbURL = process.env.MONGOURL;

// setup mongoDB connection
mongoose.connect(mdbURL);

// get the Default connection
// mongoose maintain a default connection object representing the MongoDB connection.

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('Connected to MongoDB');
})

db.on('error', (error)=>{
    console.log('Error connecting to MongoDB',error);
})

db.on('disconnected', ()=>{
    console.log('MongoDB disconnected');
})

// export the database connection 
export default db