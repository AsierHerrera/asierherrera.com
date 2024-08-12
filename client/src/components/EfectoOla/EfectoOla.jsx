import React from 'react';
import styles from './EfectoOla.module.css';

const EfectoOla = () => {
  return (
    <div className={styles.waveContainer}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 200"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
        preserveAspectRatio="none"
      >
        <path
          fill="#fff"
          className={styles.wavePath}
        ></path>
      </svg>
    </div>
  );
};

export default EfectoOla;