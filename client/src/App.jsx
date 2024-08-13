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
    {
      date: '15th February, 2024',
      title: 'Full Stack Developer',
      subtitle: 'HashX',
      description: 'HashX is dedicated to offering robust cybersecurity capabilities...'
    },
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
        <ProjectCarousel />
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
