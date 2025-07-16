import React from 'react';
import { motion } from 'framer-motion';
const Footer: React.FC = () => {
  return <footer className="bg-gradient-to-b from-slate-50 to-white border-t border-slate-200/50" style={{
    background: "oklch(98.34% 0 236.34deg / 0)"
  }} data-magicpath-id="0" data-magicpath-path="Footer.tsx">
      <div className="max-w-7xl mx-auto px-6 py-20" data-magicpath-id="1" data-magicpath-path="Footer.tsx">
        {/* Main Content */}
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} viewport={{
        once: true
      }} data-magicpath-id="2" data-magicpath-path="Footer.tsx">
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight" data-magicpath-id="3" data-magicpath-path="Footer.tsx">
            Get connected and start jiving.
          </h2>
        </motion.div>

        {/* Footer Links */}
        <motion.div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }} viewport={{
        once: true
      }} data-magicpath-id="4" data-magicpath-path="Footer.tsx">
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors duration-300 text-lg font-light tracking-wide">
            About
          </a>
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors duration-300 text-lg font-light tracking-wide">
            Privacy
          </a>
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors duration-300 text-lg font-light tracking-wide">
            Terms
          </a>
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors duration-300 text-lg font-light tracking-wide">
            Contact
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div className="text-center" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut"
      }} viewport={{
        once: true
      }} data-magicpath-id="5" data-magicpath-path="Footer.tsx">
          <p className="text-slate-500 text-sm font-light tracking-wide" data-magicpath-id="6" data-magicpath-path="Footer.tsx">
            © 2025 Reaxo by Abdul Mazid
          </p>
        </motion.div>
      </div>

      {/* Subtle decorative gradient */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300/30 to-transparent" data-magicpath-id="7" data-magicpath-path="Footer.tsx" />
    </footer>;
};
export default Footer;