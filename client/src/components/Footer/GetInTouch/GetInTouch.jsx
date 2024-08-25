import React from 'react';
import styles from './GetInTouch.module.css';

const GetInTouch = () => {
  return (
    <div className={styles.getInTouch}>
      <h3>Get in touch</h3>
      <div className={styles.socialIcons}>
        <a href="https://github.com/AsierHerrera" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor" // Esto permite que el icono cambie de color
            className={styles.svgIcon}
          >
            <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.011-1.04-0.016-2.04-3.338 0.725-4.042-1.61-4.042-1.61-0.546-1.387-1.333-1.756-1.333-1.756-1.089-0.744 0.083-0.729 0.083-0.729 1.205 0.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495 0.997 0.108-0.775 0.418-1.305 0.762-1.605-2.665-0.305-5.467-1.335-5.467-5.93 0-1.31 0.469-2.381 1.236-3.22-0.123-0.304-0.535-1.528 0.117-3.181 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.983-0.399 3.003-0.404 1.02 0.005 2.047 0.138 3.006 0.404 2.29-1.552 3.297-1.23 3.297-1.23 0.653 1.653 0.241 2.877 0.118 3.181 0.77 0.839 1.236 1.91 1.236 3.22 0 4.61-2.807 5.62-5.479 5.915 0.429 0.369 0.823 1.096 0.823 2.207 0 1.595-0.015 2.877-0.015 3.267 0 0.321 0.217 0.694 0.825 0.576 4.765-1.589 8.2-6.085 8.2-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/asier-herrera-iturralde-270179159/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor" // Esto permite que el icono cambie de color
            className={styles.svgIcon}
          >
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.35 20.5h-2.8v-10h2.8v10zm-1.4-11.2c-0.95 0-1.7-0.77-1.7-1.7s0.75-1.7 1.7-1.7 1.7 0.77 1.7 1.7-0.76 1.7-1.7 1.7zm13.75 11.2h-2.8v-5.4c0-1.28-0.02-2.93-1.79-2.93-1.79 0-2.06 1.39-2.06 2.83v5.5h-2.8v-10h2.69v1.35h0.04c0.38-0.72 1.31-1.48 2.69-1.48 2.88 0 3.41 1.9 3.41 4.37v5.76z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
