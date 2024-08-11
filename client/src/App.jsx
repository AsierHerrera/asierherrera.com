import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/navbar/Navbar"
import Inicio from './components/Inicio/Inicio'

function App() {

  return (
    <>
      <section>
        <Navbar />
        <Inicio />
      </section>

    </>
  )
}

export default App
