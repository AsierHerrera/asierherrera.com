import React from 'react';
import styles from './SkillIcon.module.css';

const SkillIcon = ({ name, icon, level }) => {
  return (
    <div className={styles.divCard}>
      <div className={`${styles.divCardItem}`} style={{ backgroundImage: `url(${icon})` }}></div>
      <span className={styles.skillName}>{name}</span>
    </div>
  );
};

export default SkillIcon;
