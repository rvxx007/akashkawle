
import { gitDark, gmail, linkedin } from "../../assets"
import { useState } from "react"
import axios from 'axios';
import { toast } from "react-toastify";

const Contact = () => {

const [isLoading, setIsLoading ] = useState(false);   
const [inputValue, setInputValue] = useState(
    {
    name:"",
    email:"",
    phone:"",
    descp:""
});

const handleChange = (e)=>{
    const {name, value}= e.target
    setInputValue(()=>{
       return { ...inputValue,[name]: value,}
    })
}

function onclear(){
    setInputValue(()=>{
        return {
            name:"",
            email:"",
            phone:"",
            descp:"" }
    })
}

const handleFormSubmit = (e)=>{
e.preventDefault();
setIsLoading(true);
const data = JSON.stringify({
    name:inputValue.name.trim(),
    email:inputValue.email.trim(),
    phone:inputValue.phone.trim(),
    descp:inputValue.descp.trim(),
    created_at:new Date().toLocaleString().toString()
});

const config={
    method:"POST",
    maxBodyLength:Infinity,
    redirect: "follow",
    headers:{
        'Content-Type': 'application/json'
    },
    body : data
};
 

//     axios.request(config).then((repo)=>{
//         const response = repo.data()
//         const result = response.json();
//         toast(result.msg)
//         onclear();

// }).catch((error)=>{
//         console.log(error);
//     })
    
setTimeout(()=>{
fetch('http://localhost:5000/api/v1/contact/post/create',config)
.then((response) => response.json())
.then((result) => {
    if(result.success === true){
    return toast.success(result.msg)
    }else{
    return toast.error(result.msg)
    }
}).catch((error)=>{
    return toast.error(error);
}).finally(()=>{
    onclear();
    setIsLoading(false)
})
},2000)
}   





    const IpObj = [
        {
            id:"name",
            title:"Name",
            type:"text",
            placeholder:"Enter your name",
            min:"2",
            minLen:"2",
            max:"25",
            maxLen:"25",
            val: inputValue.name
        },
        {
            id:"email",
            title:"Email",
            type:"email",
            placeholder:"Enter your email",
            min:"2",
            minLen:"2",
            max:"25",
            maxLen:"25",
            val: inputValue.email
        },
        {
            id:"phone",
            title:"Phone",
            type:"tel",
            placeholder:"Enter your phone Number",
            min:"10",
            minLen:"10",
            max:"10",
            maxLen:"10",
            val: inputValue.phone
        }
    ]

    const cf = {
        twDivClass:"bg-white p-3 mx-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 shadow-lg rounded-lg",
        twLblClass:"text-xl font-bold my-auto",
        twInpClass:"w-full lg:w-[416px]  text-xl py-2 px-4 border-2 border-gray-200 shadow-lg rounded-lg",
        twDisInpClass:" bg-gray-50 w-full lg:w-[416px]  text-xl py-2 px-4 border-2 border-gray-200 shadow-lg rounded-lg"
    }
  return (
   <>
   <section id="contact" className="mx-auto my-20 ">
        <main className="mx-auto px-5">
          <header className="my-5">
            <h1 className="text-center  mx-auto text-[2rem] font-bold text-[#444444]">
              Contact
            </h1>
          </header>
          <section className='h-full my-5 flex flex-col lg:flex-row  '>
            <div id="profile" className="w-full lg:w-[50%] my-10 lg:my-auto ">
            <div className=" flex flex-row lg:flex-col justify-evenly items-center mx-auto gap-5">
                <a className="mx-auto hover:shadow-2xl  p-5 rounded-full" href="http://www.linkedin.com/in/akash-kawle-5a4393212" target="_blank">
                <img src={linkedin} alt="Linkedin" />
                </a>
                <a className="mx-auto hover:shadow-2xl p-5 rounded-full"  href="https://github.com/rvxx007" target="_blank">
                <img src={gitDark} alt="GitHub" />
                </a>
                <a className="mx-auto hover:shadow-2xl p-5 rounded-full" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=akashkawle0@gmail.com" target="_blank">
                <img src={gmail} alt="Gmail" />
                </a>
                </div>
            </div>
            
            <div id="contactForm" className="w-full lg:w-[50%]">
                <div className="flex justify-center items-center">
                <form onSubmit={handleFormSubmit}  className=" shadow-2xl rounded-xl bg-white mx-auto" >
                <h1 className="shadow-lg rounded-tr-xl py-4 text-center mb-5 mx-auto text-[1.8rem] font-bold text-[#444444]">
                    Contact Form
                </h1> 
                <div className="flex  flex-col my-5 gap-5">
               
                
                
                {IpObj.map(items=><div key={items.id} className={cf.twDivClass}>
                        <label className={cf.twLblClass} 
                        htmlFor={items.id}>
                            {items.title}</label>
  
                        <input  onChange={handleChange} 
                        className={(isLoading===true?cf.twDisInpClass:cf.twInpClass)} 
                        min={items.min} 
                        minLength={items.minLen} 
                        max={items.max} 
                        maxLength={items.maxLen} 
                        id={items.id} 
                        type={items.type} 
                        name={items.id} 
                        value={items.val}
                        placeholder={items.placeholder} 
                        disabled={isLoading?true:false}
                        />
                    </div>)}
                   

                <div className=" bg-white p-3 mx-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 shadow-lg rounded-xl">
                    <label className="text-xl font-bold my-auto " htmlFor="msg">Message</label>
                    <textarea style={{resize:"none"}}
                    //  className="w-full  text-xl py-2 px-4  border-2 border-gray-200 shadow-lg rounded-lg" 
                    className={(isLoading===true?cf.twDisInpClass:cf.twInpClass)}
                    onChange={handleChange}
                    value={inputValue.descp}
                    name="descp" id="descp" cols="30" rows="5" 
                    placeholder="Write Your Message here..."
                    disabled={isLoading?true:false}
                    ></textarea>
                </div>
                <div className="bg-white p-3 mx-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 shadow-lg rounded-xl">
                    <button type="reset" disabled={isLoading?true:false} onClick={onclear} 
                    className={isLoading===true 
                        ? "w-full bg-gray-50 font-bold text-black text-xl py-2 px-4  border-2 border-gray-800 shadow-lg rounded-lg"
                        : "w-full bg-white font-bold text-black text-xl py-2 px-4  border-2 border-gray-800 shadow-lg rounded-lg"}>Clear</button>
                    <button type="submit" disabled={isLoading?true:false} 
                    className={isLoading===true 
                        ?"w-full bg-gray-600 font-bold text-white text-xl py-2 px-4  border-2 border-gray-800 shadow-lg rounded-lg"
                        :"w-full bg-black font-bold text-white text-xl py-2 px-4  border-2 border-gray-800 shadow-lg rounded-lg"
                    }>Submit</button>
                </div>
                </div>
                </form>
                </div>
            </div>

            </section>
            </main>
        </section>
   </>
  )
}
export default Contact