import React from 'react';
import { motion } from 'framer-motion';
const HeroSection: React.FC = () => {
  return <section className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat" style={{
    backgroundImage: 'url(https://raw.githubusercontent.com/gitabdul0001/example/refs/heads/main/Untitled%20(Website).svg)'
  }} data-magicpath-id="0" data-magicpath-path="HeroSection.tsx">
      {/* Top navigation */}
      <nav className="absolute top-6 right-6 z-10" data-magicpath-id="1" data-magicpath-path="HeroSection.tsx">
        <div className="flex gap-4" data-magicpath-id="2" data-magicpath-path="HeroSection.tsx">
          <button className="px-6 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors" data-magicpath-id="3" data-magicpath-path="HeroSection.tsx">
            Login
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg" data-magicpath-id="4" data-magicpath-path="HeroSection.tsx">
            Sign up
          </button>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6" data-magicpath-id="5" data-magicpath-path="HeroSection.tsx">
        <div className="text-center max-w-4xl mx-auto" data-magicpath-id="6" data-magicpath-path="HeroSection.tsx">
          <motion.h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} data-magicpath-id="7" data-magicpath-path="HeroSection.tsx">
            Don't post without data ever again
          </motion.h1>
          
          <motion.p className="text-lg md:text-xl font-normal text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed mt-4" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut"
        }} data-magicpath-id="8" data-magicpath-path="HeroSection.tsx">
            No more wasted posts or blind strategies. Reaxo gives creators the insights they need to grow smarter and reach bigger.
          </motion.p>
          
          <motion.a href="https://reaxo.xyz" className="inline-block px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4,
          ease: "easeOut"
        }} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} data-magicpath-id="9" data-magicpath-path="HeroSection.tsx">
            Sign up free
          </motion.a>
        </div>
      </div>
    </section>;
};
export default HeroSection;