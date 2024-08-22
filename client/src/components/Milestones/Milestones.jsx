import React from 'react';
import MilestoneCard from './MilestoneCard/MilestoneCard';
import styles from './Milestones.module.css';

const Milestones = ({ milestones }) => {
  return (
    <div className={styles.milestonesContainer}>
      <h2 className={styles.title}>Special Milestones</h2>
      <div className={styles.timeline}>
        {milestones.map((milestone, index) => (
          <MilestoneCard
            key={index}
            date={milestone.date}
            title={milestone.title}
            subtitle={milestone.subtitle}
            description={milestone.description}
            type={milestone.type} /* Pasar el tipo aquí */
          />
        ))}
      </div>
    </div>
  );
};

export default Milestones;
