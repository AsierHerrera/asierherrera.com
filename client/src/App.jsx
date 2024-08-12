import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/navbar/Navbar"
import Inicio from './components/Inicio/Inicio'
import EfectoOla from "./components/EfectoOla/EfectoOla"
import AboutMe from './components/AboutMe/AboutMe'

function App() {

  return (
    <>
      <section>
        <Navbar />
        <Inicio />
        <EfectoOla />
        <AboutMe />
      </section>

    </>
  )
}

export default App
