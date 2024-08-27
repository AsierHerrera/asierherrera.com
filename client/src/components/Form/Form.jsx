import React, { useEffect, useRef, useState } from "react";
import styles from "./Form.module.css";
import { Player } from "@lottiefiles/react-lottie-player";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const form = useRef();
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
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

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            setSuccessMessage("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!formData.name) {
      errors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
      isValid = false;
    }

    if (!formData.message) {
      errors.message = "Message is required.";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <section className={styles.fondo2}>
      <div
        id="contact"
        ref={containerRef}
        className={`${styles.fondo} ${isVisible ? styles.visible : styles.hidden}`}
      >
        <div className={styles.formContainer}>
          <p className={styles.contactTitle}>Contact</p>
          <h1 className={styles.mainTitle}>
            Call or write <span className={styles.greenText}>anytime</span>
          </h1>
          <div className={styles.contentWrapper}>

            <form ref={form} onSubmit={sendEmail} className={styles.form} noValidate>
            {successMessage && <p className={styles.success}>{successMessage}</p>}

              <input
                type="text"
                placeholder="Full Name"
                name="user_name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`${styles.input} ${errors.name && styles.inputError}`}
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
              <input
                type="email"
                placeholder="E-Mail Address"
                name="user_email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`${styles.input} ${errors.email && styles.inputError}`}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
              <textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${styles.textarea} ${errors.message && styles.inputError}`}
              />
              {errors.message && <p className={styles.error}>{errors.message}</p>}
              <button type="submit" className={styles.button}>
                <FontAwesomeIcon icon={faPaperPlane} className={styles.sendIcon} />
                Send Message
              </button>
            </form>
            <div className={styles.illustration}>
              <Player
                autoplay
                loop
                speed={0.7}
                src="/img/contact-image-data.json"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Form;
