import './Output.css'
import {ak ,reactImg ,nodeImg ,expressImg ,mongoImg,
  twCSSImg ,htmlImg ,cssImg ,jsImg ,bootstrapImg ,VsCodeImg ,
  AndStudImg ,gitImg ,githubImg ,blenderImg ,intelijImg ,renderImg ,
  vercelImg ,netlifyImg ,chatgptImg ,msDesignerImg ,msCopilot ,msBingAIImg ,
  geminiImg ,canvaImg ,drawio ,excalidraw, bg, logo} from './assets/index.js'

import { driver } from 'driver.js'
import "driver.js/dist/driver.css";
import NavBar from './componenet/NavBar/NavBar.jsx'
import Home from './Pages/Home/Home.jsx'
import Services from './Pages/Services/Services.jsx';
import SkillsAndTools from './Pages/SkillsAndTools/SkillsAndTools.jsx';
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Footer from './componenet/Footer/Footer.jsx';

function App() {

  // const border = {
  //   border: '1px solid black',
  // }


  const FrontendObj = 
    [
      {
        img: htmlImg,
        title: "HTML"
      },
      {
        img: cssImg,
        title: "CSS"
      },
      {
        img: jsImg,
        title: "JavaScript"
      },  
    {
      img: reactImg,
      title: "React"
    },
    {
      img: twCSSImg,
      title: "TailwindCSS"
    }
    ]

    const BackendObj = 
    [{
      img: nodeImg,
      title: "Node.js"
    },
    {
      img: expressImg,
      title: "Express.js"
    },
    {
      img: mongoImg,
      title: "MongoDB"
    }]

    const MernObj = 
    [{
      img: mongoImg,
      title: "MongoDB"
    },
    {
      img: expressImg,
      title: "Express.js"
    },
    {
      img: reactImg,
      title: "React"
    },
    {
      img: nodeImg,
      title: "Node.js"
    }]
  
  const akObj = {
    name: "Akash kawale",
    email: "akashkawle0@gmail.com",
    ph: 939577131,
    img: ak,
    bg:bg,
    aboutTitle:"About Me",
    about:"I was born in Nagpur, Maharashtra, and currently live in Hydrabad, Telangana. My journey into frontend/backend/mernstack development began in 2023, and since then, I’ve fallen in love with everything related to the MERN stack (MongoDB, Express.js, React, Node.js).",
    initials: "AK",
    headtitle:"Hello , I'm a FullStack & MernStack Developer",
    headsub: "Im a dedicated full-stack developer with a strong foundation in both front-end and back-end technologies. My expertise lies in building robust and scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js). I&apos;m passionate about crafting intuitive user interfaces and efficient server-side logic.",
    frontendTitle:"",
    frontendSkills:[
        {
          img: htmlImg,
          title: "HTML"
        },
        {
          img: cssImg,
          title: "CSS"
        },
        {
          img: jsImg,
          title: "JavaScript"
        },
        {
          img: reactImg,
          title: "React"
        },
        {
          img: bootstrapImg,
          title: "BootStrap"
        },
        {
          img: twCSSImg,
          title: "TailwindCSS"
        }
      ],
      backendSkills:[
        {
          img: nodeImg,
          title: "Node.js"
        },
        {
          img: expressImg,
          title: "Express.js"
        },
        {
          img: mongoImg,
          title: "MongoDB"
        }
      ],
      tools:[
        {
          img: AndStudImg,
          title: "Android Studio"
        },
        {
          img: VsCodeImg,
          title: "VsCode"
        },
        {
          img: intelijImg,
          title: "Intelij Ultimate"
        },
        
      ],
      designTools:[
        {
          img: canvaImg,
          title: "Canva"
        },
        {
          img: blenderImg,
          title: "Blender"
        },
      ],
      aiTools:[
        {
          img: chatgptImg,
          title: "ChatGPT",
          url:"https://chatgpt.com/"
        },
        {
          img: geminiImg,
          title: "Gemini",
          url:"https://gemini.google.com/app"
        },
        {
          img: msBingAIImg,
          title: "MS Bing AI",
          url: "https://www.bing.com/images/create"
        },
        {
          img: msDesignerImg,
          title: "MS Designer",
          url: "https://designer.microsoft.com/"
        },
        {
          img: msCopilot,
          title: "MS Copilot",
          url: "https://copilot.microsoft.com/"
        },
        
      ],
      diagTool:[
        {
          img: drawio,
          title: "Draw.io",
          url:"https://app.diagrams.net/"
        },
        {
          img: excalidraw,
          title: "ExcaliDraw",
          url:"https://excalidraw.com/"
        },
      ],
      hostdeployTools:[
        {
          img: gitImg,
          title: "Git",
          url:"#"
        },
        {
          img: githubImg,
          title: "GitHub",
          url: "https://github.com/rvxx007"
        },
        {
          img: netlifyImg,
          title: "Netlify",
          url:"https://www.netlify.com/"
        },
        {
          img: renderImg,
          title: "Render",
          url: "https://render.com/"
        },
        {
          img: vercelImg,
          title: "Vercel",
          url:"https://vercel.com/"
        },
      ],
 
  }

const dwidth = window.innerWidth;

const driverObj = driver(dwidth<800 ? {
  showProgress: true,
  showButtons: ['next', 'previous'],
  steps: [
    { element: '#entry', 
      popover: { 
        title:"Welcome To My Portfolio",
        description:"This Not Just a Normal Portfolio , This is the Complete MernStack Application Which Has Frontend + Backend With Admin Panel to change Content of the website without Editing or Writing Code Again and Again , if want to and diffrent animation or blocks that time⌚ i need to edit and write some code but🍑 its steel dynamic MernStack Application ✨✨.", side: 'over', align:'center' 
      }
    },
    { element: '#navBar', 
      popover: { 
        title:"Navigation Bar",
        description:"Using Navbar you can go through all section", side: 'bottom', align:'center' 
      }
    },
    { element: '#ham-menu', popover: { title: 'Hamburger Menu', description: 'OnClick This Hamburger Menu, You Can See Tabs Option', side: "bottom", align: 'start' }},
    { element: '#summery', popover: { title: 'Summery', description: '😎✨', side: "bottom", align: 'center' }},
    { element: '#profile', popover: { title: 'Profile Card', description: 'In Profile Card you can see my Profile Picture and my Email Address , Download CV.', side: "left", align: 'start' }},
    { element: '#email', popover: { title: 'Email Address', description: 'This is my Email Address You Can Connect with me', side: "left", align: 'start' }},
    { element: '#pro-pic', popover: { title: 'This is Me', description: 'Hiii , My name is Akash , Good to Have You Please Check My Portfolio.', side: "left", align: 'start' }},
    { element: '#cv-download', popover: { title: 'Click on this Button , I show You magic', description: 'Come on Click it , Hurry up', side: "left", align: 'start' }},
    { element: '#fe-dev', popover: { title: 'Frontend Developement Service', description: 'I Create Frontend Application Using this Languages/Skills.', side: "over", align: 'start' }},
    { element: '#de-dev', popover: { title: 'Backend Developement Service', description: 'I Create Backend Application Using this Languages/Skills.', side: "over", align: 'start' }},
    { element: '#ms-dev', popover: { title: 'MernStack Developement Service', description: 'I Create MernStack Application Using this Languages/Skills.', side: "over", align: 'start' }},
    { element: '#fred', popover: { title: 'Frontend Skills', description: 'This Skills I have.', side: "top", align: 'start' }},
    { element: '#bked', popover: { title: 'Backend Skills', description: 'This Skills I have.', side: "top", align: 'start' }},
    { element: '#devTl', popover: { title: 'Developement Tools', description: 'This Tools I Used to Develope Applications.', side: "top", align: 'start' }},
    { element: '#disTl', popover: { title: 'Designing Tools', description: 'This Tools I Used to create Design Template/3D Models/2D Animation for the Applications Developement.', side: "top", align: 'start' }},
    { element: '#diaTl', popover: { title: 'Diagramming Tools', description: 'This Tools I Used to Draw Flowchart/ER Diagrams/API flow/etc. for the Applications Developement.', side: "top", align: 'start' }},
    { element: '#aiTl', popover: { title: 'AI Tools', description: 'This Tools I Used to Documentation/content/Information Gathering/Image,Logo,Background,etc. Generation For the Applications Developement.', side: "top", align: 'start' }},
    { element: '#hdTl', popover: { title: 'Hosting & Deployment Tools', description: 'This Tools I Used to do the Applications Deployment on Webhosting/VPS .', side: "top", align: 'start' }},
  
  ]
}:{
  showProgress: true,
  showButtons: ['next', 'previous'],
  steps: [
    { element: '#entry', 
      popover: { 
        title:"Welcome To My Portfolio",
        description:"This Not Just a Normal Portfolio , This is the Complete MernStack Application Which Has Frontend + Backend With Admin Panel to change Content of the website without Editing or Writing Code Again and Again , if want to and diffrent animation or blocks that time⌚ i need to edit and write some code but🍑 its steel dynamic MernStack Application ✨✨.", side: 'over', align:'center' 
      }
    },
    { element: '#navBar', popover: 
      { title:"Navigation Bar",
        description:"Using Navbar you can go through all section", side: "left", align: 'start' 
      }
    },
    { element: '#nav-home', popover: { title: 'Home Section Tab', description: 'OnClick this tab you can go to the Home', side: "bottom", align: 'start' }},
    { element: '#nav-services', popover: { title: 'Services Section Tab', description: '', side: "bottom", align: 'start' }},
    { element: '#nav-skills', popover: { title: 'Skills Section Tab', description: '', side: "bottom", align: 'start' }},
    { element: '#nav-about', popover: { title: 'About Section Tab', description: '', side: "bottom", align: 'start' }},
    { element: '#nav-contact', popover: { title: 'Contact Section Tab', description: '', side: "bottom", align: 'start' }},
    { element: '#home', popover: { title: 'Home Section', description: 'This Is a Home Section Here You Can See Summy and Profile , Download CV.', side: "over", align: 'start' }},
    { element: '#profile', popover: { title: 'Profile Card', description: 'In Profile Card you can see my Profile Picture and my Email Address , Download CV.', side: "left", align: 'start' }},
    { element: '#email', popover: { title: 'Email Address', description: 'This is my Email Address You Can Connect with me', side: "left", align: 'start' }},
    { element: '#pro-pic', popover: { title: 'This is Me', description: 'Hiii , My name is Akash , Good to Have You Please Check My Portfolio.', side: "left", align: 'start' }},
    { element: '#cv-download', popover: { title: 'Click on this Button , I show You magic', description: 'Come on Click it , Hurry up', side: "left", align: 'start' }},
    { element: '#fe-dev', popover: { title: 'Frontend Developement Service', description: 'I Create Frontend Application Using this Languages/Skills.', side: "over", align: 'start' }},
    { element: '#de-dev', popover: { title: 'Backend Developement Service', description: 'I Create Backend Application Using this Languages/Skills.', side: "over", align: 'start' }},
    { element: '#ms-dev', popover: { title: 'MernStack Developement Service', description: 'I Create MernStack Application Using this Languages/Skills.', side: "over", align: 'start' }},
    // { element: '#services', popover: { title: 'Services Section', description: 'A Services Which is Provide By Me', side: "over", align: 'start' }},
    // { element: '#Skills', popover: { title: 'Skills Section', description: 'This Skills I have.', side: "over", align: 'start' }},
    { element: '#fred', popover: { title: 'Frontend Skills', description: 'This Skills I have.', side: "top", align: 'start' }},
    { element: '#bked', popover: { title: 'Backend Skills', description: 'This Skills I have.', side: "top", align: 'start' }},
    { element: '#devTl', popover: { title: 'Developement Tools', description: 'This Tools I Used to Develope Applications.', side: "top", align: 'start' }},
    { element: '#disTl', popover: { title: 'Designing Tools', description: 'This Tools I Used to create Design Template/3D Models/2D Animation for the Applications Developement.', side: "top", align: 'start' }},
    { element: '#diaTl', popover: { title: 'Diagramming Tools', description: 'This Tools I Used to Draw Flowchart/ER Diagrams/API flow/etc. for the Applications Developement.', side: "top", align: 'start' }},
    { element: '#aiTl', popover: { title: 'AI Tools', description: 'This Tools I Used to Documentation/content/Information Gathering/Image,Logo,Background,etc. Generation For the Applications Developement.', side: "top", align: 'start' }},
    { element: '#hdTl', popover: { title: 'Hosting & Deployment Tools', description: 'This Tools I Used to do the Applications Deployment on Webhosting/VPS .', side: "top", align: 'start' }},
  
  ]
});

driverObj.drive();

  return (
    <>
      <main id='entry' className='bg-[#FFF] container mx-auto my-5  border-2 border-gray-300  scroll-smooth shadow-2xl border-none rounded-2xl  p-3 lg:p-0'>
          <NavBar logo={logo} akObj={akObj}/>
          <Home akObj={akObj} />
          <Services FrontendObj={FrontendObj} BackendObj={BackendObj} MernObj={MernObj} />
          <SkillsAndTools akObj={akObj}/>
          <About akObj={akObj} />
          <Contact  />
          <Footer />
      </main>
    </>
  )
}

export default App
