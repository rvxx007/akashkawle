import ServicesCard from "../../componenet/ServicesCard/ServicesCard"
const Services = (prop) => {
  return (
    <>
    <section id='services' className='mx-auto my-20'>
          <main className='mx-auto px-5'>
            <header>
            <h1 className='text-center my-5 mx-auto text-[2rem] font-bold text-[#444444]'>Services</h1>
            </header>
            <ServicesCard
              idblock="fe-dev"
              headtitle="Frontend Developement"
              description="Create Frontend web applications using the HTML, CSS, JS , React, TailwindCSS, BootStrap ."
               Obj={prop.FrontendObj}
                />

            <ServicesCard
              idblock="de-dev"
              headtitle="Backend Developement"
              description="Create Backend applications using the Node.js, Express.js(REST API), MongoDB."
               Obj={prop.BackendObj}
                />
            <ServicesCard
              idblock="ms-dev"
              headtitle="MernStack Developement"
              description="Create web applications using the MERN stack (MongoDB, Express.js, React, Node.js)."
               Obj={prop.MernObj}
                /> 
          </main>
        </section>
    </>
  )
}

export default Services