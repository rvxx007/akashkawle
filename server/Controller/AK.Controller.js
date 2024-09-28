import AK from "../Model/AK.js";
const AkRead = async(req, res)=>{
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
    
}

}

export { AkRead };