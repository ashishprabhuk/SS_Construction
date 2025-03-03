import React, { useState, useEffect } from "react";

const words = ["quality", "service", "safety"];
const typingSpeed = 150; // Speed of typing in ms per letter
const deletingSpeed = 100; // Speed of deleting in ms per letter
const delayBetweenWords = 1000; // Delay before deleting the word

const TypingAnimation = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingTimer;

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        typingTimer = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, typingSpeed);
      } else {
        typingTimer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      }
    } else {
      if (text.length > 0) {
        typingTimer = setTimeout(() => {
          setText(currentWord.substring(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, wordIndex]);

  return (
    <>
    {/* <h1></h1> */}
    <h1 className="text-4xl display-2 text-white text-uppercase fw-bolder font-bold">
      {text}
      <span className="animate-blink mb-2 justify-content-start text-white">|</span>
    </h1>
    </>
  );
};

export default TypingAnimation;
