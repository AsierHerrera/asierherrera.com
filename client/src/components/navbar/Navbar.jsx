import React, { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';
import CV from '../../../public/CV/Curriculum Vitae Asier Herrera.pdf';
import Button from './Button/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referencia al menú

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  // Manejar clics fuera del menú para cerrar el menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a onClick={() => handleLinkClick("#inicio", 50)} className={styles.logo}>AH</a>
        <ul
          ref={menuRef}
          className={`${styles.links} ${isMenuOpen ? styles.showMenu : ''}`}
        >
          <Button text="ABOUT ME" onClick={() => handleLinkClick("#about", 50)}>ABOUT ME</Button>
          <Button text="SKILLS" onClick={() => handleLinkClick("#skills", 50)}>SKILLS</Button>
          <Button text="PROJECTS" onClick={() => handleLinkClick("#projects", 100)}>PROJECTS</Button>
          <Button text="MILESTONES" onClick={() => handleLinkClick("#milestones", 100)}>MILESTONES</Button>
          <Button text="CONTACT" onClick={() => handleLinkClick("#contact", 100)}>CONTACT</Button>
        </ul>
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
          <span className={styles.downloadText}>Download CV</span>
        </button>
        <button className={styles.menuIcon} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
