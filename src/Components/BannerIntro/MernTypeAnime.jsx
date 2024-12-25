import React, { useState, useEffect } from "react";

const MernTypeAnime = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const words = ["MERN Stack Developer"];

  useEffect(() => {
    let currentWordIndex = 0;
    let currentLetterIndex = 0;

    const typewriterInterval = setInterval(() => {
      if (isTyping) {
        const currentWord = words[currentWordIndex];
        const currentLetter = currentWord[currentLetterIndex];

        if (currentLetter) {
          setText((prevText) => prevText + currentLetter);
          currentLetterIndex++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setText("");
            currentWordIndex = (currentWordIndex + 1) % words.length;
            currentLetterIndex = 0;
          }, 3000); // Pause between words
        }
      }
    }, 100); // Typing speed

    return () => {
      clearInterval(typewriterInterval);
    };
  }, [isTyping]);

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

export default MernTypeAnime;
