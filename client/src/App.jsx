import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/navbar/Navbar"
import Inicio from './components/Inicio/Inicio'
import EfectoOla from "./components/EfectoOla/EfectoOla"
import AboutMe from './components/AboutMe/AboutMe'
import MyBio from './components/MyBio/MyBio'

function App() {
  return (
    <>
      <section>
        <Navbar />
        <Inicio />
        <EfectoOla topColor="#222222" bottomColor="#ffffff" />
        <AboutMe />
        <MyBio />
        <EfectoOla topColor="#ffffff" bottomColor="#222222" />
      </section>
    </>
  )
}

export default App;
