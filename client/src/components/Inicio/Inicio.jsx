import React from 'react';
import styles from './Inicio.module.css';
import Typewriter from './Typewriter/Typewriter'; // Asegúrate de que la ruta sea correcta

function App() {
    const texts = [
        "Hello, welcome to my website!",
        "Check out my portfolio.",
        "Feel free to contact me!",
    ];

    return (
        <div className={styles.container}>
            {/* Contenedor de Texto */}
            <div className={styles.textContainer}>
                <h1>
                    Hi, I am <br />
                    <span className={styles.name}>Asier,</span> <br />
                </h1>
                <div className={styles.typewriterWrapper}>
                    <Typewriter texts={texts} speed={100} deleteSpeed={50} pause={1000} className={styles.role} />
                </div>
                <p className={styles.description}>
                    Welcome to my portfolio! <span className={styles.introP}>Asier Herrera</span> is an <span className={styles.introP}>Experienced Full Stack Developer</span> with a passion for creating
                    <span className={styles.introP}> visually stunning</span> and <span className={styles.introP}>intuitive</span> web experiences. With a <span className={styles.introP}>unique</span> blend of technical skills and creative flair,
                    there's <span className={styles.introP}>confidence</span> in the ability to deliver <span className={styles.introP}>custom solutions</span> to various project requirements.
                </p>
                <div className={styles.buttons}>
                    <button className={styles.resumeButton}>Resume</button>
                    <button className={styles.contactButton}>Contact Me</button>
                </div>
            </div>

            {/* Contenedor de Imagen */}
            <div className={styles.imageContainer}>
                {/* Aquí puedes agregar tu imagen */}
            </div>
        </div>
    );
}

export default App;
