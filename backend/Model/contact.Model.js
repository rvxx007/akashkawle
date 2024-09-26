import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    descp:{
        type: String,
        required: true
    },
    created_at:{
        type: String,
        required: true
    }
})


export default mongoose.model("Contact", contactSchema);