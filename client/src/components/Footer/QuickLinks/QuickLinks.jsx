import React from 'react';
import styles from './QuickLinks.module.css';

const QuickLinks = () => {
  return (
    <div className={styles.quickLinks}>
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#milestones">Milestones</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default QuickLinks;