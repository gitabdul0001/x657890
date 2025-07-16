"use client";

import React from 'react';
import { motion } from 'framer-motion';
const CustomerCarouselSection: React.FC = () => {
  // Combined brand list from both rows
  const brands = [{
    name: 'Microsoft',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/microsoft.svg'
  }, {
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/google.svg'
  }, {
    name: 'Apple',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/apple.svg'
  }, {
    name: 'Amazon',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazon.svg'
  }, {
    name: 'Netflix',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/netflix.svg'
  }, {
    name: 'Spotify',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/spotify.svg'
  }, {
    name: 'Slack',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/slack.svg'
  }, {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/github.svg'
  }, {
    name: 'Meta',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/meta.svg'
  }, {
    name: 'LinkedIn',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/linkedin.svg'
  }, {
    name: 'PayPal',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/paypal.svg'
  }, {
    name: 'Discord',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/discord.svg'
  }, {
    name: 'Notion',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/notion.svg'
  }, {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/figma.svg'
  }, {
    name: 'Canva',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/canva.svg'
  }, {
    name: 'Trello',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/trello.svg'
  }] as any[];
  return <section className="py-16 px-6 bg-white" style={{
    display: "none"
  }}>
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header - Simplified */}
        <motion.div className="text-center mb-12" initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} viewport={{
        once: true
      }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 tracking-wide">
            Trusted by industry leaders
          </h2>
        </motion.div>

        {/* Brand Grid - 4 columns on desktop, 3 on tablet, 2 on mobile */}
        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} viewport={{
        once: true
      }}>
          {brands.map((brand, index) => <motion.div key={`brand-${brand.name}-${index}`} className="flex justify-center" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.05
        }} viewport={{
          once: true
        }} whileHover={{
          y: -8,
          scale: 1.03
        }}>
              <div className="group relative w-24 h-24 rounded-2xl border border-slate-200/60 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm" style={{
            backgroundColor: '#fcfcf9'
          }}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-slate-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img alt={`${brand.name} logo`} className="w-full h-full object-contain filter brightness-0 opacity-70 group-hover:opacity-90 transition-all duration-300" loading="lazy" src={brand.logo} />
                  </div>
                  <span className="text-xs font-medium text-slate-600 group-hover:text-slate-800 transition-colors duration-300 text-center">
                    {brand.name}
                  </span>
                </div>
              </div>
            </motion.div>)}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div className="text-center" initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut"
      }} viewport={{
        once: true
      }}>
          <p className="text-lg text-slate-600 mb-8 font-light">
            Ready to join the leaders?
          </p>
          <motion.button className="group relative px-10 py-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-base font-medium rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl" whileHover={{
          scale: 1.02,
          y: -2
        }} whileTap={{
          scale: 0.98
        }}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">
              Start your journey today
            </span>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" initial={{
            x: '-100%'
          }} whileHover={{
            x: '100%'
          }} transition={{
            duration: 0.6,
            ease: "easeInOut"
          }} />
          </motion.button>
        </motion.div>
      </div>
    </section>;
};
export default CustomerCarouselSection;