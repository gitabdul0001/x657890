import React from 'react';
import { motion } from 'framer-motion';
const WhyTeamsInnovateSection: React.FC = () => {
  const floatingIcons = [{
    icon: '⚡',
    position: {
      top: '10%',
      left: '15%'
    },
    delay: 0,
    mpid: "ef9a2ff9-b9ed-4b0a-a5f2-7a810146161a"
  }, {
    icon: '🚀',
    position: {
      top: '20%',
      right: '20%'
    },
    delay: 0.5,
    mpid: "b631c6ac-1208-45ca-92e7-e7b6d9a54599"
  }, {
    icon: '💡',
    position: {
      top: '60%',
      left: '10%'
    },
    delay: 1,
    mpid: "08c21f40-e971-4cf5-98ed-a31c66f7a80a"
  }, {
    icon: '🎯',
    position: {
      top: '70%',
      right: '15%'
    },
    delay: 1.5,
    mpid: "93c8fcfd-28f0-4ada-b3dc-166852722f75"
  }, {
    icon: '⭐',
    position: {
      top: '30%',
      left: '5%'
    },
    delay: 2,
    mpid: "0a11c3bc-dc32-4beb-9b2b-024e428b0d71"
  }, {
    icon: '🔥',
    position: {
      top: '50%',
      right: '8%'
    },
    delay: 2.5,
    mpid: "80d1bcf3-a8f8-44a4-9fbe-de4456b538b7"
  }, {
    icon: '💎',
    position: {
      top: '15%',
      left: '50%'
    },
    delay: 3,
    mpid: "78ddf149-dd23-43c6-ac16-840d34667b5e"
  }, {
    icon: '🌟',
    position: {
      top: '80%',
      left: '45%'
    },
    delay: 3.5,
    mpid: "fc2f7202-eef4-4baa-a832-3708d2cd4110"
  }] as any[];
  return <section className="relative py-32 px-6 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden" data-magicpath-id="0" data-magicpath-path="WhyTeamsInnovateSection.tsx">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => <motion.div key={index} className="absolute text-4xl opacity-20 pointer-events-none" style={item.position} initial={{
      opacity: 0,
      scale: 0
    }} whileInView={{
      opacity: 0.2,
      scale: 1
    }} animate={{
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1]
    }} transition={{
      duration: 6 + index,
      repeat: Infinity,
      ease: "easeInOut",
      delay: item.delay
    }} viewport={{
      once: true
    }} data-magicpath-uuid={(item as any)["mpid"] ?? "unsafe"} data-magicpath-field="icon:unknown" data-magicpath-id="1" data-magicpath-path="WhyTeamsInnovateSection.tsx">
          {item.icon}
        </motion.div>)}

      {/* Background Gradient Blobs */}
      <motion.div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-30 blur-3xl" animate={{
      x: [0, 50, 0],
      y: [0, -30, 0],
      scale: [1, 1.2, 1]
    }} transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut"
    }} data-magicpath-id="2" data-magicpath-path="WhyTeamsInnovateSection.tsx" />
      <motion.div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full opacity-25 blur-2xl" animate={{
      x: [0, -40, 0],
      y: [0, 25, 0],
      scale: [1, 0.8, 1]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2
    }} data-magicpath-id="3" data-magicpath-path="WhyTeamsInnovateSection.tsx" />

      <div className="relative z-10 max-w-4xl mx-auto text-center" data-magicpath-id="4" data-magicpath-path="WhyTeamsInnovateSection.tsx">
        <motion.div initial={{
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
      }} data-magicpath-id="5" data-magicpath-path="WhyTeamsInnovateSection.tsx">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight" data-magicpath-id="6" data-magicpath-path="WhyTeamsInnovateSection.tsx">
            Why Teams
            <br data-magicpath-id="7" data-magicpath-path="WhyTeamsInnovateSection.tsx" />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent" data-magicpath-id="8" data-magicpath-path="WhyTeamsInnovateSection.tsx">
              Innovate
            </span>
            <br data-magicpath-id="9" data-magicpath-path="WhyTeamsInnovateSection.tsx" />
            with Reaxo
          </h2>
          
          <motion.p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut"
        }} viewport={{
          once: true
        }} data-magicpath-id="10" data-magicpath-path="WhyTeamsInnovateSection.tsx">
            Join the revolution of teams who've discovered the power of seamless collaboration, intelligent automation, and data-driven insights. Transform your workflow today.
          </motion.p>
          
          <motion.a href="https://reaxo.com/signup/" className="inline-block px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white text-xl font-bold rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4,
          ease: "easeOut"
        }} viewport={{
          once: true
        }} whileHover={{
          scale: 1.05,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }} whileTap={{
          scale: 0.95
        }} data-magicpath-id="11" data-magicpath-path="WhyTeamsInnovateSection.tsx">
            Get started free
          </motion.a>
        </motion.div>

        {/* Stats Section */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-gray-200" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut"
      }} viewport={{
        once: true
      }} data-magicpath-id="12" data-magicpath-path="WhyTeamsInnovateSection.tsx">
          <div className="text-center" data-magicpath-id="13" data-magicpath-path="WhyTeamsInnovateSection.tsx">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2" data-magicpath-id="14" data-magicpath-path="WhyTeamsInnovateSection.tsx">10k+</div>
            <div className="text-lg text-gray-600" data-magicpath-id="15" data-magicpath-path="WhyTeamsInnovateSection.tsx">Teams Trust Reaxo</div>
          </div>
          <div className="text-center" data-magicpath-id="16" data-magicpath-path="WhyTeamsInnovateSection.tsx">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2" data-magicpath-id="17" data-magicpath-path="WhyTeamsInnovateSection.tsx">3x</div>
            <div className="text-lg text-gray-600" data-magicpath-id="18" data-magicpath-path="WhyTeamsInnovateSection.tsx">Faster Development</div>
          </div>
          <div className="text-center" data-magicpath-id="19" data-magicpath-path="WhyTeamsInnovateSection.tsx">
            <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-2" data-magicpath-id="20" data-magicpath-path="WhyTeamsInnovateSection.tsx">99.9%</div>
            <div className="text-lg text-gray-600" data-magicpath-id="21" data-magicpath-path="WhyTeamsInnovateSection.tsx">Uptime Guarantee</div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default WhyTeamsInnovateSection;