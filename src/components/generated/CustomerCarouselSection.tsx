"use client";

import React from 'react';
import { motion } from 'framer-motion';
const CustomerCarouselSection: React.FC = () => {
  // Combined brand list from both rows
  const brands = [{
    name: 'Microsoft',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/microsoft.svg',
    mpid: "83338b86-e138-489f-a781-3bc1a1826cf2"
  }, {
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/google.svg',
    mpid: "77ea94ee-2cce-48dc-a147-57b17179c531"
  }, {
    name: 'Apple',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/apple.svg',
    mpid: "8d2ab19d-1ef3-4a7b-83f7-ce85fbaf4ee9"
  }, {
    name: 'Amazon',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazon.svg',
    mpid: "f8a93fbb-457c-442b-8d8c-594fe4f64ba7"
  }, {
    name: 'Netflix',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/netflix.svg',
    mpid: "ad0b133a-5b02-425f-9937-eb2dc687d12d"
  }, {
    name: 'Spotify',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/spotify.svg',
    mpid: "c062cafa-82d8-4f96-b5ee-3408da9cf52f"
  }, {
    name: 'Slack',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/slack.svg',
    mpid: "81425657-61bb-492d-bad4-0d5af861c9c4"
  }, {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/github.svg',
    mpid: "13baebda-21a6-4eec-870a-9e7f9a1361bc"
  }, {
    name: 'Meta',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/meta.svg',
    mpid: "5c858303-7e30-44d4-acd0-cfb2f9beb54a"
  }, {
    name: 'LinkedIn',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/linkedin.svg',
    mpid: "50a38ebf-df52-4d57-a847-910415343dfe"
  }, {
    name: 'PayPal',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/paypal.svg',
    mpid: "43337185-c6c9-4ad3-8eef-edb8b93ddb57"
  }, {
    name: 'Discord',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/discord.svg',
    mpid: "0e0cf3b3-35e9-4808-89d3-d677e11a4e57"
  }, {
    name: 'Notion',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/notion.svg',
    mpid: "9844adc4-ce17-436b-924c-64d401410faa"
  }, {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/figma.svg',
    mpid: "f4def242-0fb5-43a8-a958-24148fe82344"
  }, {
    name: 'Canva',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/canva.svg',
    mpid: "6968a520-becd-4044-a2c7-965d82e67c3e"
  }, {
    name: 'Trello',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/trello.svg',
    mpid: "9bd9dc70-e2b8-4014-9f7e-38d2ece6a160"
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