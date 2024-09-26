import mongoose from 'mongoose'

const homeModel = new mongoose.Schema({
    heading:{
        type:String,
        required:true
    },
    subHeading:{
        type: String,
        required: true
    },
    
})