// App.js
import React from 'react';
import Typewriter from './Typewriter/Typewriter';

function Inicio() {
    const texts = [
        "Hello, welcome to my website!",
        "Check out my portfolio.",
        "Feel free to contact me!",
      ];
    
      return (
        <div className="App">
          <h1>Hi, I am</h1>  
          <h1>
            <Typewriter texts={texts} speed={100} deleteSpeed={50} pause={1000} />
          </h1>
        </div>
      );
    }

export default Inicio;
