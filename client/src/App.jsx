import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/navbar/Navbar"
import Inicio from './components/Inicio/Inicio'
import EfectoOla from "./components/EfectoOla/EfectoOla"
import AboutMe from './components/AboutMe/AboutMe'
import MyBio from './components/MyBio/MyBio'
import Skills from './components/Skills/Skills'
import ProjectCarousel from './components/ProjectsCarousel/ProjectsCarousel'
import Milestones from './components/Milestones/Milestones'
import Form from './components/Form/Form'
import Footer from './components/Footer.jsx/Footer'
function App() {

  const milestoneData = [
    {
      date: '15th February, 2024',
      title: 'Full Stack Developer',
      subtitle: 'HashX',
      type: 'work',  // Indica que este milestone es de trabajo

      description: 'HashX is dedicated to offering robust cybersecurity capabilities...HashX is dedicated to offering robust cybersecurity capabilities...HashX is dedicated to offering robust cybersecurity capabilities...HashX is dedicated to offering robust cybersecurity capabilities...'
    },
    {
      date: '15th February, 2024',
      title: 'Full Stack Developer',
      subtitle: 'HashX',
      type: 'study',  // Indica que este milestone es de trabajo

      description: 'HashX is dedicated to offering robust cybersecurity capabilities...HashX is dedicated to offering robust cybersecurity capabilities...HashX is dedicated to offering robust cybersecurity capabilities...HashX is dedicated to offering robust cybersecurity capabilities...HashX is dedicated to offering robust cybersecurity capabilities...HashX is dedicated to offering robust cybersecurity capabilities...'
    },
    {
      date: '15th February, 2024',
      title: 'Full Stack Developer',
      subtitle: 'HashX',
      description: 'HashX is dedicated to offering robust cybersecurity capabilities...'
    },
    {
      date: '15th February, 2024',
      title: 'Full Stack Developer',
      subtitle: 'HashX',
      description: 'HashX is dedicated to offering robust cybersecurity capabilities...'
    },
    {
      date: '15th February, 2024',
      title: 'Full Stack Developer',
      subtitle: 'HashX',
      description: 'HashX is dedicated to offering robust cybersecurity capabilities...'
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
