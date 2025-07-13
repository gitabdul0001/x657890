import React from 'react';
import { motion } from 'framer-motion';
const HeroSection: React.FC = () => {
  return <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden" data-magicpath-id="0" data-magicpath-path="HeroSection.tsx">
      {/* Abstract blob shapes */}
      <motion.div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl" animate={{
      x: [0, 30, 0],
      y: [0, -20, 0],
      scale: [1, 1.1, 1]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }} data-magicpath-id="1" data-magicpath-path="HeroSection.tsx" />
      <motion.div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-25 blur-lg" animate={{
      x: [0, -25, 0],
      y: [0, 15, 0],
      scale: [1, 0.9, 1]
    }} transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }} data-magicpath-id="2" data-magicpath-path="HeroSection.tsx" />
      <motion.div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 blur-lg" animate={{
      x: [0, 20, 0],
      y: [0, -30, 0],
      scale: [1, 1.2, 1]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2
    }} data-magicpath-id="3" data-magicpath-path="HeroSection.tsx" />

      {/* Top navigation */}
      <nav className="absolute top-6 right-6 z-10" data-magicpath-id="4" data-magicpath-path="HeroSection.tsx">
        <div className="flex gap-4" data-magicpath-id="5" data-magicpath-path="HeroSection.tsx">
          <button className="px-6 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors" data-magicpath-id="6" data-magicpath-path="HeroSection.tsx">
            Login
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg" data-magicpath-id="7" data-magicpath-path="HeroSection.tsx">
            Sign up
          </button>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6" data-magicpath-id="8" data-magicpath-path="HeroSection.tsx">
        <div className="text-center max-w-4xl mx-auto" data-magicpath-id="9" data-magicpath-path="HeroSection.tsx">
          <motion.h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} data-magicpath-id="10" data-magicpath-path="HeroSection.tsx">
            Build Better
            <br data-magicpath-id="11" data-magicpath-path="HeroSection.tsx" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-magicpath-id="12" data-magicpath-path="HeroSection.tsx">
              Products Faster
            </span>
          </motion.h1>
          
          <motion.p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut"
        }} data-magicpath-id="13" data-magicpath-path="HeroSection.tsx">
            Reaxo empowers teams to innovate, collaborate, and deliver exceptional products with our comprehensive suite of development tools.
          </motion.p>
          
          <motion.button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1" initial={{
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
        }} data-magicpath-id="14" data-magicpath-path="HeroSection.tsx">
            Sign up free
          </motion.button>
        </div>
      </div>
    </section>;
};
export default HeroSection;