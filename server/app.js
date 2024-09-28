import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import db from './Config/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import contactRouter from './Routes/contact.Routes.js';
// import akRouter from './Routes/Ak.Routes.js'
import AK from './Model/AK.js';
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

app.use('/api/v1/contact', contactRouter);
// app.use('/api/v1/ak', akRouter)
app.use('/api/v1/ak', async(req,res)=>{
    try {
        
        const AkObj = new AK()
        const resData = await AkObj.find();
        if(!resData){
            return res.status(404).json({
                succss: false,
            msg: "Data Not Found"})
        }
        res.status(200).json({
            succss:true,
            msg: "Data Found",
            data: resData
        })
    } catch (error) {
        res.status(500).json({
            succss: false,
            msg: "Internal Server Error",
        })
    }
})

//-------------------------------------------------------------\\

//-------------------------------------------------------------\\
//                      ServerSetup
//-------------------------------------------------------------\\

const PORT = process.env.PORT || 5555;


app.listen(PORT ,()=>{
console.log(`Server Running on the Port = ${PORT}`);
})
//-------------------------------------------------------------\\
