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
              Hi, I'm Asier Herrera, a full-stack developer from Bilbao. I am graduate at BBK Bootcamps by The Bridge, where I developed a solid foundation in software develop and a passion for building aesthetically attractive and intuitive web experiences. With a strong track record of achievement, I am committed to using my skills and expertise to create innovative and effective solutions for my clients.            </p>
            <p className={styles.paragraph}>
            My experience in optimizing radio networks has equipped me with a pragmatic approach that I now apply to software development. As you browse through my portfolio, you'll see how I effectively blend my telecommunications expertise to create impactful and user-friendly solutions.
            </p>
            <p className={styles.paragraph}>
              In my free time, I enjoy hobbies such as watching movies, videogames and traveling. In addition to my technical skills, I am a reliable and team-oriented individual who is always ready to collaborate with team members and clients to ensure that projects are delivered to the highest standards. I am excited to work with you and create something amazing together.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default MyBio;
