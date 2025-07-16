"use client";

import React from 'react';
import { motion } from 'framer-motion';
const CustomerCarouselSection: React.FC = () => {
  // Combined brand list from both rows
  const brands = [{
    name: 'Microsoft',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/microsoft.svg',
    mpid: "d45f7b3e-6d0b-40a8-b1db-5a95a1267f8f"
  }, {
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/google.svg',
    mpid: "b024cb7f-ca96-4d8e-8012-adda84bcff37"
  }, {
    name: 'Apple',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/apple.svg',
    mpid: "af5b3e55-2348-413f-bce7-5877fb4b4ee9"
  }, {
    name: 'Amazon',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazon.svg',
    mpid: "6c30fa92-e64d-4f1a-8498-8fe9b6303af4"
  }, {
    name: 'Netflix',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/netflix.svg',
    mpid: "09407165-f249-4952-a3bf-bc095e251dbc"
  }, {
    name: 'Spotify',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/spotify.svg',
    mpid: "2a6d5db8-3e75-445d-b519-341909febfda"
  }, {
    name: 'Slack',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/slack.svg',
    mpid: "2f05720f-6127-43cd-974d-b511369299c1"
  }, {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/github.svg',
    mpid: "a0b2f809-2287-44be-8229-45f654c28f9e"
  }, {
    name: 'Meta',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/meta.svg',
    mpid: "5fb7dec2-dc69-4302-846d-9862155e03e9"
  }, {
    name: 'LinkedIn',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/linkedin.svg',
    mpid: "2ec6bd47-e0e4-4259-b1a0-add9728654c2"
  }, {
    name: 'PayPal',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/paypal.svg',
    mpid: "fef028a4-353d-43c4-9bac-5e6ab7893cea"
  }, {
    name: 'Discord',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/discord.svg',
    mpid: "6f3bbbc2-ea45-4896-84c1-b5356d701baf"
  }, {
    name: 'Notion',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/notion.svg',
    mpid: "0f79a6df-2a60-4a9f-bc96-38535e7ea62d"
  }, {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/figma.svg',
    mpid: "6eabd01a-1898-4b8c-8dc9-935fb45cec7e"
  }, {
    name: 'Canva',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/canva.svg',
    mpid: "863d0325-1de4-4a24-9333-f01aed39085b"
  }, {
    name: 'Trello',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/trello.svg',
    mpid: "d25e04fd-e1bd-4f17-9265-a2bd2dd02280"
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