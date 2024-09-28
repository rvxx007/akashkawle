import Contact from "../Model/contact.Model.js";

function resFun(res,succ,code,msg,obj) {
   return !obj?res.status(code).json({
        success:succ,
        msg: msg
    }):res.status(code).json({
        success:succ,
        msg: msg,
        data: obj
    })
}
function errorFun(res,succ,error,code,msg) {
    return res.status(code).json({
         success:succ,
         msg:msg || error.message
     })
 }

const create = async(req, res)=>{
    try {
        const {name, email,phone , descp,created_at} = req.body;
        console.log(req.body);
        
        if((!name ?? "") && (!email ?? "")&& (!phone ?? "") && (!descp ?? "")){
            return resFun(res,false,400,"Please fill all the fields")
            // return res.status(400).json({
            //     success:false,
            //     message:"Please fill all the fields"});
        }

            const contact = new Contact({name,email,phone,descp,created_at});
        
        if(!contact){
            return resFun(res,false,404,"Contact Data Not Found")
            // return res.status(404).json({
            //     success:false,
            //     msg:"Conact Data Not Found"
            // })
        }
        const saveData = await contact.save();

        if(!saveData){
            return resFun(res,false,500,"Server Error, Unable To Save Data");
            // return res.status(500).json({
            //     success:false,
            //     msg:"Unable To Save Data , Server Error"})
        }else{
            return resFun(res,true,200,"Data Submit Successfully")
            // return res.status(200).json({
            //     success:true,
            //     msg:"Data Submit Successfully"
            // })
        }
    
        
    } catch (error) {
       return errorFun(res,false,error,500,"Server Error")
    }
}

const getAll = async (req, res)=>{
    try {
        const {name , email, phone , descp} = req.body;

        const contactDataa =[]

        if(name){
            const contactData = await Contact.find({name:name});
            contactDataa.push(contactData)
        }else if(email){
            const contactData = await Contact.find({email:email});
            contactDataa.push(contactData)
        }else if(phone){
            const contactData = await Contact.find({phone:phone});
            contactDataa.push(contactData)
        }else{
            const contactData = await Contact.find();
            if(!contactData){
                return resFun(res,false,404,"Data not Found");
            }
            contactDataa.push(contactData)
        }

        return resFun(res,true,200,"Success",contactDataa);
        
    } catch (error) {
        return errorFun(res,false,error,500,"Server Error");
    }
}

const update = async (req, res)=>{

    try {
        const {id,name , email , phone, descp} = req.body;
        if((!name ?? "") && (!email ?? "" ) && (!phone ?? "") && (!descp ?? ""))
        {
            return resFun(res, false, 404, "Please Fill All Feilds");
        }

        if(id){
            const contactIdExist= await Contact.findById(id);
            if(!contactIdExist){
                return resFun(res,false,404,"Contact Not Found");
            }

            const UpdatedData = await Contact.findByIdAndUpdate(id,req.body,{new:true});

            return resFun(res, true, 200 , "Updated Success",UpdatedData);
        }

    } catch (error) {
        return errorFun(res, false, error, 500, "Server Error");
    }
}

export { create, getAll, update}