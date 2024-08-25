import React, { useEffect, useRef, useState } from 'react';
import SkillIcon from './SkillIcon/SkillIcon';
import styles from './Skills.module.css';

const Skills = () => {
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
    <section id="skills" className={styles.skillsSection}>
      <div
        ref={containerRef}
        className={`${styles.skillsContainer} ${isVisible ? styles.visible : styles.hidden}`}
      >
        <div className={styles.sectionTitleContainer}>
          <h6 className={styles.sectionTitle}>Skills</h6>
        </div>

        <h3 className={styles.skillLabel}>Programming Skills</h3>
        <div className={styles.skillCardsContainer}>
          <SkillIcon name="MongoDB" icon="/img/icon/mongodb.png" level="Advanced Beginner" />
          <SkillIcon name="MySQL" icon="/img/icon/MySQL.png" level="Proficient" />
          <SkillIcon name="Express.js" icon="/img/icon/express-js.png" level="Proficient" />
          <SkillIcon name="React.js" icon="/img/icon/react-js.png" level="Proficient" />
          <SkillIcon name="Node.js" icon="/img/icon/node-js.png" level="Proficient" />
          <SkillIcon name="JavaScript" icon="/img/icon/js.png" level="Expert" />
          <SkillIcon name="Postman" icon="/img/icon/Postman.png" level="Proficient" />
          <SkillIcon name="HTML" icon="/img/icon/html-5.png" level="Expert" />
          <SkillIcon name="CSS" icon="/img/icon/css-3.png" level="Expert" />
        </div>

        <h3 className={styles.skillLabel}>Tools & Other Skills</h3>
        <div className={styles.skillCardsContainer}>
          <SkillIcon name="Git" icon="/img/icon/git.png" level="Expert" />
          <SkillIcon name="Docker" icon="/img/icon/docker.png" level="Advanced Beginner" />
          <SkillIcon name="Swagger" icon="/img/icon/Swagger.png" level="Proficient" />
          <SkillIcon name="DevOps" icon="/img/icon/devops.png" level="Proficient" />

        </div>

        <h3 className={styles.skillLabel}>Communication Skills</h3>
        <div className={styles.skillCardsContainer}>
          <SkillIcon name="Spanish" icon="/img/icon/spain.png" level="Native" />
          <SkillIcon name="English" icon="/img/icon/UK.png" level="Proficient" />
          <SkillIcon name="Euskera" icon="/img/icon/EUS.png" level="Advanced Beginner" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
