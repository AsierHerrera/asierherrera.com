// Button.js
import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, onClick }) => {
  return (
    <li className={styles.button} onClick={onClick}>
      {text}
    </li>
  );
};

export default Button;
