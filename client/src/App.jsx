import { useState } from 'react'
import Navbar from "./components/navbar/Navbar"
import Inicio from './components/Inicio/Inicio'
import EfectoOla from "./components/EfectoOla/EfectoOla"
import AboutMe from './components/AboutMe/AboutMe'
import MyBio from './components/MyBio/MyBio'
import Skills from './components/Skills/Skills'
import ProjectCarousel from './components/ProjectsCarousel/ProjectsCarousel'
import Milestones from './components/Milestones/Milestones'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
function App() {

  const milestoneData = [
    {
      date: '12th July, 2024',
      title: 'Bootcamp final project and graduation',
      subtitle: 'TheBridge',
      type: 'study',  // Indica que este milestone es de estudio
      description: 'Presentation of the collaborative project with other verticals of the organization (UX/UI, Data Science, and Cybersecurity) to Seniority.ai, which proposed the integration into their website. We are currently managing this project with them. After 4 intense months of Bootcamp, we completed the course and started the job placement in this new specialty.',
    },
    {
      date: '27th June, 2024',
      title: 'Crew Challenge',
      subtitle: 'TheBridge',
      type: 'study',  // Indica que este milestone es de estudio
      description: 'My first challenge for a real company as a programmer. I was responsible for developing an application for Seniority.ai. I created a UX/UI-oriented project management platform using MongoDB for the database, Express.js for the backend, React.js for the UI, and Node.js for the server environment. The platform allows for project creation, tracking, and collaboration, integrating subforums and commenting features to enhance user interaction.',
    },
    {
      date: '17th May, 2024',
      title: 'First Backend Project',
      subtitle: 'TheBridge',
      type: 'study',  // Indica que este milestone es de estudio
      description: 'BackendOfTheRings was my first backend project, where I learned to manage requests with CRUD, use middleware, and work with PUG for the views. Check out the projects section for more details!',
    },
    {
      date: '28th April, 2024',
      title: 'PREGUNTAPI',
      subtitle: 'TheBridge',
      type: 'study',  // Indica que este milestone es de estudio
      description: 'My own API project where I applied my initial knowledge of Vanilla JS to create a tool capable of generating trivia questions about programming languages based on the difficulty selected by the user. Later, I developed the backend to track the ranking, so come and test your knowledge!',
    },
    {
      date: '3rd April, 2024',
      title: 'Bootcamp Core',
      subtitle: 'TheBridge',
      type: 'study',  // Indica que este milestone es de estudio
      description: 'The most demanding part of the Bootcamp begins, an intense training program designed to bring out your full potential.',
    },
    {
      date: '13th March, 2024',
      title: 'Bootcamp Start',
      subtitle: 'TheBridge',
      type: 'study',  // Indica que este milestone es de estudio
      description: 'Start of the Bootcamp ramp-up, where I acquired the foundational knowledge needed to maximize the program and learn essential concepts and tools.',
    },
    {
      date: '28th September, 2020 - 15th February, 2024',
      title: 'Project Technician',
      subtitle: '3dB Consult',
      type: 'work',  // Indica que este milestone es de trabajo
      description: 'Mobile Telephony Project Technician with experience in radio design across all technologies, including 2G and 3G rehoming, and radio link design. I have worked with operators such as Orange, Vodafone, Telefonica, and NOS (Portugal), as well as leading vendors like Ericsson, Huawei, and Nokia.',
    },
    {
      date: '25th May, 2019',
      title: 'Robotics and Industrial Automation',
      subtitle: 'Bidebieta',
      type: 'study',  // Indica que este milestone es de estudio
      description: 'Completed a higher module, where I discovered my passion for technology and programming of automata and robots. I underwent 2 years of training learning to program Siemens and Omron PLCs and ABB and Mitsubishi robots.',
    },
  ];
  

  const projects = [
    {
      title: "GitTrack",
      description: "GitTrack - an innovative web application designed to empower GitHub users with powerful network analysis tools. With GitTrack, you can explore and analyze your GitHub repositories and connections like never before.",
      image: "../public/img/thumbnails/cutlink-thumbnail.png",
      techStack: ["Next.js", "TypeScript", "Tailwind", "CSS"],
      sourceCodeUrl: "https://github.com/yourusername/gittrack",
      demoUrl: "https://gittrack-demo.com"
    },
    {
      title: "DevBlog",
      description: "DevBlog is a modern blogging platform tailored for developers. Share your knowledge, insights, and code snippets with the world using a clean and responsive interface.",
      image: "../public/img/thumbnails/gittrack-thumbnail.png",
      techStack: ["React", "Markdown", "Node.js", "Express"],
      sourceCodeUrl: "https://github.com/yourusername/devblog",
      demoUrl: "https://devblog-demo.com"
    },
    {
      title: "TaskMaster",
      description: "TaskMaster is a task management tool designed to help teams stay organized and productive. Manage your projects, assign tasks, and track progress with ease.",
      image: "../public/img/thumbnails/mindmate-thumbnail.png",
      techStack: ["Vue.js", "Firebase", "Vuetify", "JavaScript"],
      sourceCodeUrl: "https://github.com/yourusername/taskmaster",
      demoUrl: "https://taskmaster-demo.com"
    },
    {
      title: "PortfolioGen",
      description: "PortfolioGen is a customizable portfolio builder that allows developers and designers to showcase their work in a sleek, modern layout. No coding required.",
      image: "../public/img/thumbnails/my-battery-thumbnail.png",
      techStack: ["Gatsby", "GraphQL", "Styled-Components", "JavaScript"],
      sourceCodeUrl: "https://github.com/yourusername/portfoliogen",
      demoUrl: "https://portfoliogen-demo.com"
    },
    {
      title: "Weatherly",
      description: "Weatherly is a weather forecasting app that provides accurate weather data for any location. Stay updated with real-time information and alerts.",
      image: "../public/img/thumbnails/sys-info-thumbnail.png",
      techStack: ["React", "OpenWeatherMap API", "SASS", "JavaScript"],
      sourceCodeUrl: "https://github.com/yourusername/weatherly",
      demoUrl: "https://weatherly-demo.com"
    },
    {
      title: "CryptoTracker",
      description: "CryptoTracker is a cryptocurrency tracking app that provides real-time price updates, market trends, and portfolio management tools for crypto enthusiasts.",
      image: "../public/img/thumbnails/sys-info-thumbnail.png",
      techStack: ["Angular", "CoinGecko API", "TypeScript", "Bootstrap"],
      sourceCodeUrl: "https://github.com/yourusername/cryptotracker",
      demoUrl: "https://cryptotracker-demo.com"
    },
    {
      title: "E-Shop",
      description: "E-Shop is an e-commerce platform that offers a seamless shopping experience with features like product search, user reviews, and secure payment integration.",
      image: "/../public/img/thumbnails/my-battery-thumbnail.png",
      techStack: ["Shopify", "Liquid", "JavaScript", "HTML/CSS"],
      sourceCodeUrl: "https://github.com/yourusername/eshop",
      demoUrl: "https://eshop-demo.com"
    },
    {
      title: "FitTrack",
      description: "FitTrack is a fitness tracking app that helps users monitor their workouts, set fitness goals, and track their progress over time.",
      image: "../public/img/thumbnails/cutlink-thumbnail.png",
      techStack: ["React Native", "Redux", "Node.js", "MongoDB"],
      sourceCodeUrl: "https://github.com/yourusername/fittrack",
      demoUrl: "https://fittrack-demo.com"
    }
  ];
  
  return (
    <>
      <section>
        <Navbar />
        <Inicio />
        <EfectoOla topColor="#222222" bottomColor="#ffffff" />
        <AboutMe />
        <MyBio />
        <EfectoOla topColor="#ffffff" bottomColor="#222222" />
        <Skills />
        <EfectoOla topColor="#222222" bottomColor="#ffffff" />
        <ProjectCarousel projects={projects} />
        <EfectoOla topColor="#ffffff" bottomColor="#222222" />
        <Milestones milestones={milestoneData} />
        <EfectoOla topColor="#222222" bottomColor="#ffffff" />
        <Form />
        <Footer />
      </section>
    </>
  )
}

export default App;
