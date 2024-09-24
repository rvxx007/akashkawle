import SkillsCard from "../../componenet/SkillsCard/SkillsCard"

const SkillsAndTools = (prop) => {
  return (
    <>
    <section id='skills&tools'  className='mx-auto my-20 '>
          <main id='Skills' className='mx-auto px-5'>
            <header>
            <h1 className='text-center my-5 mx-auto text-[2rem] font-bold text-[#444444]'>Skills</h1>
            </header>
           <SkillsCard blockId="fred" headTitle="Frontend" Obj={prop.akObj.frontendSkills}/>
           <SkillsCard blockId="bked" headTitle="Backend" Obj={prop.akObj.backendSkills}/>
          </main>
          <main id='Tools' className='mx-auto px-5'>
            <header>
            <h1 className='text-center my-5 mx-auto text-[2rem] font-bold text-[#444444]'>Tools</h1>
            </header>
           <SkillsCard blockId="devTl" headTitle="Developement Tools" Obj={prop.akObj.tools}/>
           <SkillsCard blockId="disTl" headTitle="Design Tools" Obj={prop.akObj.designTools}/>
           <SkillsCard blockId="diaTl" headTitle="Diagramming Tools" Obj={prop.akObj.diagTool}/>
           <SkillsCard blockId="aiTl" headTitle="AI Tools" Obj={prop.akObj.aiTools}/>
           <SkillsCard blockId="hdTl" headTitle="Hosting & Deployment Tools" Obj={prop.akObj.hostdeployTools}/>
           
          </main>
        </section>
    </>
  )
}

export default SkillsAndTools