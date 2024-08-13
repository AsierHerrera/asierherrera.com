import React from 'react';
import styles from './MilestoneCard.module.css';

const MilestoneCard = ({ date, title, subtitle, description }) => {
  return (
    <div className={styles.milestoneCard}>
      <div className={styles.date}>{date}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.subtitle}>{subtitle}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default MilestoneCard;