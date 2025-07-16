"use client";

import React from 'react';
import { motion } from 'framer-motion';
const CustomerCarouselSection: React.FC = () => {
  // Combined brand list from both rows
  const brands = [{
    name: 'Microsoft',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/microsoft.svg',
    mpid: "83b7e518-1448-4659-8394-2571ca427346"
  }, {
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/google.svg',
    mpid: "a2e667f6-a053-4f41-8d5b-b547d6104e85"
  }, {
    name: 'Apple',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/apple.svg',
    mpid: "867e87b6-ed1d-46a6-879a-3d1f5501b8ab"
  }, {
    name: 'Amazon',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazon.svg',
    mpid: "f4866b6d-c204-47ce-bd1f-30860a533f66"
  }, {
    name: 'Netflix',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/netflix.svg',
    mpid: "79c2f3f5-419b-4ab3-9fb8-b84925cca31c"
  }, {
    name: 'Spotify',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/spotify.svg',
    mpid: "04787ec7-1f10-4edb-970d-fc9134eea2cd"
  }, {
    name: 'Slack',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/slack.svg',
    mpid: "3836d39e-8f49-4717-a895-15317d9047e1"
  }, {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/github.svg',
    mpid: "737bc118-730c-4fe1-bc35-12b6183f14c3"
  }, {
    name: 'Meta',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/meta.svg',
    mpid: "fccb854f-60b0-47c5-a716-06dcfd7a92c4"
  }, {
    name: 'LinkedIn',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/linkedin.svg',
    mpid: "e4aafbc2-5fa1-4cab-80e0-11108173f002"
  }, {
    name: 'PayPal',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/paypal.svg',
    mpid: "6a39f2b4-37f5-4a41-891d-c90b51357487"
  }, {
    name: 'Discord',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/discord.svg',
    mpid: "7a90475a-896f-4e1b-8dbc-724dac5e71f6"
  }, {
    name: 'Notion',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/notion.svg',
    mpid: "4cc6998b-3a7b-4315-bfe1-2b33ebbeaa66"
  }, {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/figma.svg',
    mpid: "1f2717e6-a4a5-47a4-82eb-3c2e92ace20e"
  }, {
    name: 'Canva',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/canva.svg',
    mpid: "23cb4054-331a-4016-9393-7e9374ee2b68"
  }, {
    name: 'Trello',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/trello.svg',
    mpid: "e41887c0-6385-4120-8e63-339c8087fa80"
  }] as any[];
  return <section className="py-16 px-6 bg-white" style={{
    display: "none"
  }} data-magicpath-id="0" data-magicpath-path="CustomerCarouselSection.tsx">
      <div className="w-full max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="CustomerCarouselSection.tsx">
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
      }} data-magicpath-id="2" data-magicpath-path="CustomerCarouselSection.tsx">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-800 tracking-wide" data-magicpath-id="3" data-magicpath-path="CustomerCarouselSection.tsx">
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
      }} data-magicpath-id="4" data-magicpath-path="CustomerCarouselSection.tsx">
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
        }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="5" data-magicpath-path="CustomerCarouselSection.tsx">
              <div className="group relative w-24 h-24 rounded-2xl border border-slate-200/60 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm" style={{
            backgroundColor: '#fcfcf9'
          }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="6" data-magicpath-path="CustomerCarouselSection.tsx">
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-slate-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="7" data-magicpath-path="CustomerCarouselSection.tsx" />
                <div className="relative z-10 flex flex-col items-center gap-2" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="CustomerCarouselSection.tsx">
                  <div className="w-10 h-10 flex items-center justify-center" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="CustomerCarouselSection.tsx">
                    <img alt={`${brand.name} logo`} className="w-full h-full object-contain filter brightness-0 opacity-70 group-hover:opacity-90 transition-all duration-300" loading="lazy" src={brand.logo} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknown" data-magicpath-id="10" data-magicpath-path="CustomerCarouselSection.tsx" />
                  </div>
                  <span className="text-xs font-medium text-slate-600 group-hover:text-slate-800 transition-colors duration-300 text-center" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="11" data-magicpath-path="CustomerCarouselSection.tsx">
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
      }} data-magicpath-id="12" data-magicpath-path="CustomerCarouselSection.tsx">
          <p className="text-lg text-slate-600 mb-8 font-light" data-magicpath-id="13" data-magicpath-path="CustomerCarouselSection.tsx">
            Ready to join the leaders?
          </p>
          <motion.button className="group relative px-10 py-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-base font-medium rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl" whileHover={{
          scale: 1.02,
          y: -2
        }} whileTap={{
          scale: 0.98
        }} data-magicpath-id="14" data-magicpath-path="CustomerCarouselSection.tsx">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-id="15" data-magicpath-path="CustomerCarouselSection.tsx" />
            <span className="relative z-10" data-magicpath-id="16" data-magicpath-path="CustomerCarouselSection.tsx">
              Start your journey today
            </span>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" initial={{
            x: '-100%'
          }} whileHover={{
            x: '100%'
          }} transition={{
            duration: 0.6,
            ease: "easeInOut"
          }} data-magicpath-id="17" data-magicpath-path="CustomerCarouselSection.tsx" />
          </motion.button>
        </motion.div>
      </div>
    </section>;
};
export default CustomerCarouselSection;