// Typewriter.jsx
import React, { useState, useEffect } from 'react';
import styles from './Typewriter.module.css';

const Typewriter = ({ texts, speed = 100, deleteSpeed = 50, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentTextIndex];
    let index = isDeleting ? text.length : 0;

    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedText(text.substring(0, index));
        index -= 1;
        if (index < 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        setDisplayedText(text.substring(0, index + 1));
        index += 1;
        if (index >= text.length) {
          setIsDeleting(true);
        }
      }
    };

    const intervalId = setInterval(handleTyping, isDeleting ? deleteSpeed : speed);

    return () => clearInterval(intervalId);
  }, [isDeleting, currentTextIndex, texts, speed, deleteSpeed]);

  useEffect(() => {
    const pauseTimeout = setTimeout(() => {
      setIsDeleting(true);
    }, pause);

    return () => clearTimeout(pauseTimeout);
  }, [displayedText, isDeleting, pause]);

  return (
    <span className={styles.typewriter}>
      {displayedText}
      <div className={styles.cursor}>|</div>
    </span>
  );
};

export default Typewriter;
