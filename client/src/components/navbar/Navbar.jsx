import React from 'react';
import styles from './Navbar.module.css';
import Button from './Button/Button';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>AH</div>
        <ul className={styles.links}>
          <Button text="ABOUT ME" onClick={() => window.location.href="#about"} />
          <Button text="SKILLS" onClick={() => window.location.href="#skills"} />
          <Button text="PROJECTS" onClick={() => window.location.href="#projects"} />
          <Button text="MILESTONES" onClick={() => window.location.href="#milestones"} />
          <Button text="CONTACT" onClick={() => window.location.href="#contact"} />
        </ul>
        <button className={styles.cvDownload}>
          <i className={`fas fa-cloud-arrow-down ${styles.icon}`}></i>
          Download CV
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
