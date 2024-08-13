import React from 'react';
import styles from './Support.module.css';

const Support = () => {
  return (
    <div className={styles.support}>
      <h3>Support</h3>
      <ul>
        <li><a href="#terms">Terms & Conditions</a></li>
        <li><a href="#privacy">Privacy</a></li>
        <li><a href="#cookies">Cookie preferences</a></li>
      </ul>
    </div>
  );
};

export default Support;