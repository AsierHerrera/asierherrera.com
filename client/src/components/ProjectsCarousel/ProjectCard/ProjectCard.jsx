import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ title, description, image, techStack, sourceCodeUrl, demoUrl }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.techStack}>
          <span className={styles.techLabel}>Tech Stack:</span>
          {techStack.map((tech, index) => (
            <span key={index} className={styles.techItem}>{tech}</span>
          ))}
        </div>
        <div className={styles.buttons}>
          <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>Source Code</a>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>View Demo</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;