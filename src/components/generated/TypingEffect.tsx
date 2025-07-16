"use client";

import * as React from "react";
import { useState, useEffect } from "react";
export interface TypingEffectProps {
  words?: string[];
  colors?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}
export default function TypingEffect({
  words = ["Effortless", "viral", "Wins"],
  colors = ["#989cfc", "#fc7557", "#f9c558"],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
  className = ""
}: TypingEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (isTyping && !isDeleting) {
        // Typing phase
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => {
            setIsDeleting(true);
            setIsTyping(false);
          }, pauseDuration);
        }
      } else if (isDeleting && !isTyping) {
        // Deleting phase
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setIsTyping(true);
          setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, isTyping, words, colors, typingSpeed, deletingSpeed, pauseDuration]);
  const currentColor = colors[currentWordIndex % colors.length];
  return <span className={`inline-block relative ${className}`}>
      <span className="animated-word inline-block px-3 py-2 rounded-lg text-white transition-all duration-500 ease-in-out min-w-[200px] text-center text-4xl md:text-6xl" style={{
      backgroundColor: currentColor
    }}>
        {currentText}
        <span className="inline-block w-0.5 h-8 bg-white ml-1 animate-pulse"></span>
      </span>
    </span>;
}