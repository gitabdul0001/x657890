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
  return <span className={`inline-block relative ${className}`} data-magicpath-id="0" data-magicpath-path="TypingEffect.tsx">
      <AnimatePresence mode="wait" data-magicpath-id="1" data-magicpath-path="TypingEffect.tsx">
        <motion.span key={`${currentWordIndex}-${currentText}`} initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1
      }} exit={{
        opacity: 0,
        scale: 0.8
      }} transition={{
        duration: 0.2,
        ease: "easeOut"
      }} className="inline-block px-3 py-1 rounded-md font-extrabold text-white text-sm shadow-sm" style={{
        backgroundColor: currentColor,
        boxShadow: `0 2px 8px ${currentColor}30`
      }} data-magicpath-id="2" data-magicpath-path="TypingEffect.tsx">
          {currentText}
          <motion.span animate={{
          opacity: [1, 0]
        }} transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse"
        }} className="ml-1 text-white" data-magicpath-id="3" data-magicpath-path="TypingEffect.tsx">
            |
          </motion.span>
        </motion.span>
      </AnimatePresence>
    </span>;
}