import React from 'react';
import styles from './GetInTouch.module.css';

const GetInTouch = () => {
  return (
    <div className={styles.getInTouch}>
      <h3>Get in touch</h3>
      <div className={styles.socialIcons}>
        <a href="#github" className={styles.icon}>GitHub</a>
        <a href="#dribbble" className={styles.icon}>Dribbble</a>
        <a href="#linkedin" className={styles.icon}>LinkedIn</a>
        <a href="#twitter" className={styles.icon}>Twitter</a>
        <a href="#facebook" className={styles.icon}>Facebook</a>
      </div>
    </div>
  );
};

export default GetInTouch;