import mangoose from 'mongoose';

const SM_Schema = new mangoose.Schema({
    title:String,
    img: String,
    description: String,
})

 const SM = mangoose.model('SM', SM_Schema);
