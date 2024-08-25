import React, { useEffect, useRef, useState } from 'react';
import styles from './MyBio.module.css';


const MyBio = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.pageYOffset;
        setIsScrollingUp(currentScrollY < lastScrollY);
        lastScrollY = currentScrollY;

        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
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
    <div className={styles.fondo}>
      <section
        ref={containerRef}
        className={`${styles.bioContainer} ${isVisible ? styles.visible : styles.hidden} ${isVisible ? '' : (isScrollingUp ? styles.up : styles.down)}`}
      >
        <header>
          <h2 className={styles.sectionTitle}>My Bio</h2>
        </header>
        <article className={styles.bioContent}>
          <aside className={styles.imageContainer}>
            <div className={styles.greenLine}></div>
            <img src="../../../public/img/portfolio.jpg" alt="Profile" className={styles.profileImage} />
          </aside>
          <div className={styles.textContent}>
            <h1 className={styles.mainTitle}>
              Biography,
              <br />
              <span className={styles.highlight}>a few words</span>
            </h1>
            <p className={styles.paragraph}>
              Hi, I'm Lakshan Rukantha, a full-stack developer from Sri Lanka. I am currently an undergraduate at NSBM Green University, where I am developing a solid foundation in software engineering and a passion for building aesthetically attractive and intuitive web experiences. With a strong track record of achievement, I am committed to using my skills and expertise to create innovative and effective solutions for my clients.
            </p>
            <p className={styles.paragraph}>
              I am an active member of the FOSS community and Media club of NSBM and am known for my broad range of knowledge and interests. I am constantly seeking out new opportunities to improve my skills and knowledge.
            </p>
            <p className={styles.paragraph}>
              In my free time, I enjoy hobbies such as photography, watching movies, and traveling. I am also an avid learner and am always looking for ways to improve my skills and knowledge. In addition to my technical skills, I am a reliable and team-oriented individual who is always ready to collaborate with team members and clients to ensure that projects are delivered to the highest standards. I am excited to work with you and create something amazing together.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default MyBio;
