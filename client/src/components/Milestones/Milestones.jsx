import React, { useEffect, useRef, useState } from 'react';
import MilestoneCard from './MilestoneCard/MilestoneCard';
import styles from './Milestones.module.css';

const Milestones = ({ milestones }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.fondo}>
      <div
        id="milestones"
        ref={containerRef}
        className={`${styles.milestonesContainer} ${isVisible ? styles.visible : styles.hidden}`}
      >
        <h2 className={styles.title}>Special Milestones</h2>
        <div className={styles.timeline}>
          {milestones.map((milestone, index) => (
            <MilestoneCard
              key={index}
              date={milestone.date}
              title={milestone.title}
              subtitle={milestone.subtitle}
              description={milestone.description}
              type={milestone.type}
            />
          ))}
        </div>
      </div>
    </section>

  );
};

export default Milestones;
