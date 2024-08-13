import React, { useEffect, useRef, useState } from 'react';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Ajusta el umbral según sea necesario
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.fondo}>
      <article
        ref={containerRef}
        className={`${styles.fullWidthContainer} ${isVisible ? styles.visible : styles.hidden}`}
      >
        <div className={styles.contentContainer}>
          <header>
            <h2 className={styles.title}>About Me</h2>
          </header>
          <div className={styles.content}>
            <section className={`${styles.leftColumn} ${styles.Linea}`}>
              <div className={styles.stat}>
                <img src="/img/icon/dev-experience.svg" alt="Experience icon" className={styles.icon} />
                <h3 className={styles.statTitle}>
                  <span className={styles.highlight}>2 Years</span> Job Experience
                </h3>
              </div>
              <div className={styles.stat}>
                <img src="/img/icon/projects-icon.svg" alt="Projects icon" className={styles.icon} />
                <h3 className={styles.statTitle}>
                  <span className={styles.highlight}>8+ Projects</span> Completed
                </h3>
              </div>
            </section>
            <section className={styles.rightColumn}>
              <h3 className={styles.sectionTitle}>
                What are my strongest sides <span className={styles.highlight}>and skills?</span>
              </h3>
              <p className={styles.paragraph}>
                One of my strongest qualities as a full stack developer is my ability to think critically and solve problems. I excel at breaking down complex projects into manageable chunks and coming up with innovative solutions to problems that arise. I am also very organized and detail-oriented, which allows me to complete assignments on time and to the highest standards.
              </p>
              <p className={styles.paragraph}>
                As a full stack developer, I am proficient in a variety of programming languages and frameworks, including HTML, CSS, JavaScript, and Python. I have experience working with popular technologies such as MongoDB, Express, React, and Node.js, and am skilled in UI/UX development as well as I have the ability to quickly adapt to new technologies and frameworks. I have a wide range of knowledge about technologies beyond those mentioned.
              </p>
              <p className={styles.paragraph}>
                I am also a strong communicator and able to effectively collaborate with clients and team members to understand their needs and translate them into functional specifications. Overall, I am confident in my ability to deliver high-quality web solutions that meet the needs of my clients and exceed their expectations.
              </p>
            </section>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
