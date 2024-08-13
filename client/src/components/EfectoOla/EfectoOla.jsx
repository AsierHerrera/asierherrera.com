import React from 'react';
import styles from './EfectoOla.module.css';

const EfectoOla = () => {
  return (
    <div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 -1 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.wave}
      >
        <path
          d="M0,400 C0,400 0,200 0,200 C62.43,168.30 124.87,136.61 219,129 C313.13,121.39 438.97,137.88 522,143 C605.03,148.12 645.27,141.87 718,158 C790.73,174.13 895.97,212.65 974,232 C1052.03,251.35 1102.87,251.53 1176,243 C1249.13,234.47 1344.57,217.24 1440,200 C1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#fff"
          className={styles.path0}
        />
      </svg>
    </div>
  );
};

export default EfectoOla;
