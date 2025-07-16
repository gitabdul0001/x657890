"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
export interface TypingEffectProps {
  words?: string[];
  colors?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  mpid?: string;
}
export default function TypingEffect({
  words = ["Effortless", "viral", "effective"],
  colors = ["#989cfc", "#fc7557", "#fc7557"],
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseDuration = 2000,
  className = ""
}: TypingEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const currentColor = colors[currentWordIndex % colors.length];
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
  return <span className={`inline-block relative ${className}`} data-magicpath-id="0" data-magicpath-path="TypingEffect.tsx">
      <AnimatePresence mode="wait" data-magicpath-id="1" data-magicpath-path="TypingEffect.tsx">
        <motion.span key={`${currentWordIndex}-${currentText}`} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3,
        ease: "easeOut"
      }} className="inline-block px-4 py-2 rounded-lg font-extrabold text-white shadow-lg" style={{
        backgroundColor: currentColor,
        boxShadow: `0 4px 20px ${currentColor}40`
      }} data-magicpath-id="2" data-magicpath-path="TypingEffect.tsx">
          {currentText}
          <motion.span animate={{
          opacity: [1, 0]
        }} transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse"
        }} className="ml-1 text-white" data-magicpath-id="3" data-magicpath-path="TypingEffect.tsx">
            |
          </motion.span>
        </motion.span>
      </AnimatePresence>
    </span>;
}