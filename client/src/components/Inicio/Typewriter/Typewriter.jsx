import React, { useState, useEffect } from 'react';
import styles from './Typewriter.module.css';

const Typewriter = ({ texts, speed, deleteSpeed, pause }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const text = texts[currentTextIndex];
    let index = isDeleting ? text.length : 0;

    const handleTyping = () => {
      if (isPaused) return;

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
          setIsPaused(true);  // Pausa al final de la escritura
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pause);
        }
      }
    };

    const intervalId = setInterval(handleTyping, isDeleting ? deleteSpeed : speed);

    return () => clearInterval(intervalId);
  }, [isDeleting, currentTextIndex, texts, speed, deleteSpeed, isPaused]);

  return (
    <span className={styles.typewriter}>
      {displayedText}
      <span className={styles.cursor}>|</span> {/* El cursor ahora está dentro del span */}
    </span>
  );
};

export default Typewriter;
