import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import mongoose from'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import route from './Routes/contact.Routes.js';

// configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


//-------------------------------------------------------------\\
//                      Index Routes
//-------------------------------------------------------------\\

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/View/index.html');
});
app.get('/api/v1', (req, res)=>{
    res.send('API v1');
});
//-------------------------------------------------------------\\

//-------------------------------------------------------------\\
//                        Routes
//-------------------------------------------------------------\\

app.use('/api/v1/contact', route);

//-------------------------------------------------------------\\

//-------------------------------------------------------------\\
//                      ServerSetup
//-------------------------------------------------------------\\

const PORT = process.env.PORT || 5555;

const mdbURL = process.env.MONGOURL;

export const con = mongoose.connect(mdbURL).then(()=>{
console.log( "MongoDB is Connected");

}).catch(error => console.log(error));

app.listen(PORT ,()=>{
console.log(`Server Running on the Port = ${PORT}`);
})
//-------------------------------------------------------------\\
