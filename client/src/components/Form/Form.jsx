import React from "react";
import styles from "./Form.module.css";
import { Player } from "@lottiefiles/react-lottie-player";

const Form = () => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.contactTitle}>Contact</h2>
      <h1 className={styles.mainTitle}>Call or write <span style={{color: '#4CAF50'}}>anytime</span></h1>
      <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
        <form className={styles.form}>
          <input type="text" placeholder="Full Name" className={styles.input} />
          <input type="email" placeholder="E-Mail Address" className={styles.input} />
          <textarea placeholder="Message" className={styles.textarea}></textarea>
          <button type="submit" className={styles.button}>
            <span className={styles.sendIcon}>✈</span> Send Message
          </button>
        </form>
        <div className={styles.illustration}>
          <Player
            autoplay
            loop
            src="/img/contact-image-data.json"  // Asegúrate que la ruta sea correcta
            style={{ height: '300px', width: '300px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
