import InputBlock from "../../componenet/InputBlock/InputBlock"
import { gitDark, gmail, linkedin } from "../../assets"
const Contact = () => {

    const IpObj = [
        {
            id:"name",
            title:"Name",
            type:"text",
            placeholder:"Enter your name",
            min:"15",
            minLen:"15",
            max:"25",
            maxLen:"25"
        },
        {
            id:"email",
            title:"Email",
            type:"email",
            placeholder:"Enter your email",
            min:"15",
            minLen:"15",
            max:"25",
            maxLen:"25"
        },
        {
            id:"phone",
            title:"Phone",
            type:"tel",
            placeholder:"Enter your phone Number",
            min:"10",
            minLen:"10",
            max:"10",
            maxLen:"10"
        }
    ]
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
                <form className=" shadow-2xl rounded-xl bg-white mx-auto" action="">
                <h1 className="shadow-lg rounded-tr-xl py-4 text-center mb-5 mx-auto text-[1.8rem] font-bold text-[#444444]">
                    Contact Form
                </h1> 
                <div className="flex  flex-col my-5 gap-5">
                {IpObj.map(items=> <>
                <InputBlock 
                 key={items.id} 
                 IpObj={items}
                 twDivClass="bg-white p-3 mx-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 shadow-lg rounded-lg"
                 twLblClass="text-xl font-bold my-auto"
                 twInpClass="w-full lg:w-[416px]  text-xl py-2 px-4 border-2 border-gray-200 shadow-lg rounded-lg"
                 /></>)}
                <div className=" bg-white p-3 mx-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 shadow-lg rounded-xl">
                    <label className="text-xl font-bold my-auto " htmlFor="msg">Message</label>
                    <textarea style={{resize:"none"}} className="w-full  text-xl py-2 px-4  border-2 border-gray-200 shadow-lg rounded-lg" name="msg" id="msg" cols="30" rows="5" placeholder="Write Your Message here..."></textarea>
                </div>
                <div className="bg-white p-3 mx-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 shadow-lg rounded-xl">
                    <button className="w-full bg-black font-bold text-white text-xl py-2 px-4  border-2 border-gray-800 shadow-lg rounded-lg">Submit</button>
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