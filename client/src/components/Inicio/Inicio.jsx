import React from 'react';
import styles from './Inicio.module.css';
import Typewriter from './Typewriter/Typewriter';
import Lottie from 'lottie-react';
import animationData from '../../../public/Animation.json';
import CV from '../../../public/CV/Curriculum Vitae Asier Herrera.pdf'

function Inicio() {
    const texts = [
        "Full Stack Developer",
        "MERN/SERN",
        "DevOps Enthusiast",
    ];

    const handleLinkClick = (href, offset = 0) => {
        const element = document.querySelector(href);
        const isDesktop = window.innerWidth >= 1024;
    
        if (element) {
          const scrollPosition = isDesktop ? element.offsetTop - offset : element.offsetTop;
          
          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth', // Desplazamiento suave
          });
          
          setIsMenuOpen(false);
        }
      };

    return (
        <div id="inicio" className={styles.container}>
            <div className={styles.textContainer}>
                <h1>
                    Hi, I am <br />
                    <span className={`${styles.name} ${styles.myName}`}>
                        Asier,
                    </span>
                </h1>

                <div className={styles.typewriterWrapper}>
                    <Typewriter texts={texts} speed={100} deleteSpeed={50} pause={1000} className={styles.role} />
                </div>
                <p className={styles.description}>
                    Welcome to my portfolio! <span className={styles.introP}>Asier Herrera</span> is an <span className={styles.introP}>Junior Full Stack Developer</span> with a passion for creating 
                    <span className={styles.introP}>&nbsp;visually stunning</span> and <span className={styles.introP}>intuitive</span> web experiences. With a <span className={styles.introP}>unique</span> blend of technical skills and creative flair,
                    there's <span className={styles.introP}>confidence</span> in the ability to deliver <span className={styles.introP}>custom solutions</span> to various project requirements.
                </p>

                <div className={styles.buttons}>
                    <button
                        className={styles.cvDownload}
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = CV;
                            link.download = 'Curriculum Vitae Asier Herrera.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                    >
                        <i className={`fas fa-cloud-arrow-down ${styles.icon}`}></i>
                        Download CV
                    </button>

                    <button className={styles.contactButton} onClick={() => handleLinkClick("#contact", 100)}>
                        <i className={`fas fa-envelope ${styles.icon}`}></i>
                        Contact Me
                    </button>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <Lottie
                    animationData={animationData}
                    loop
                    autoplay
                    className={styles.lottieAnimation}
                />
            </div>
        </div>
    );
}

export default Inicio;