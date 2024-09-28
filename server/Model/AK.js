import mongoose from "mongoose";

const AK = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required:true,
    },
    ph:{
        type: Number,
        required:true,
    },
    img:{
        type: String,
        required:true,
    },
    bg:{
        type: String,
        required: true,
    },
    aboutTitle:{
        type: String,
        required: true,
    },
    about:{
        type: String,
        required: true
    },
    initials:{
        type: String,
        required: true,
    },
    headtitle:{
        type: String,
        required:true,
    },
    headsub:{
        type:String,
        required: true,
    },
    skills:{
        type: Array,
        required: true,
    },
    tools:{
        type: Array,
        required: true,
    },
    serviceObj:{
        type: Array,
        required: true,
    }

})

export default mongoose.model("AK", AK);