import React from 'react';
import styles from './MyBio.module.css';

const MyBio = () => {
  return (
    <div className={styles.bioContainer}>
      <h2 className={styles.sectionTitle}>My Bio</h2>
      <div className={styles.bioContent}>
        <div className={styles.imageContainer}>
          <div className={styles.greenLine}></div>
          <img src="/path-to-your-image.jpg" alt="Profile" className={styles.profileImage} />
        </div>
        <div className={styles.textContent}>
          <h1 className={styles.mainTitle}>
            Biography,
            <br />
            <span className={styles.highlight}>a few words</span>
          </h1>
          <p className={styles.paragraph}>
            Hi, I'm Lakshan Rukantha, a full-stack developer from Sri Lanka. I am currently an undergraduate at NSBM Green University, where I am developing a solid foundation in software engineering and a passion for building aesthetically attractive and intuitive web experiences. With a strong track record of achievement, I am committed to using my skills and expertise to create innovative and effective solutions for my clients.
          </p>
          <p className={styles.paragraph}>
            I am an active member of the FOSS community and Media club of NSBM and am known for my broad range of knowledge and interests. I am constantly seeking out new opportunities to improve my skills and knowledge.
          </p>
          <p className={styles.paragraph}>
            In my free time, I enjoy hobbies such as photography, watching movies, and traveling. I am also an avid learner and am always looking for ways to improve my skills and knowledge. In addition to my technical skills, I am a reliable and team-oriented individual who is always ready to collaborate with team members and clients to ensure that projects are delivered to the highest standards. I am excited to work with you and create something amazing together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyBio;