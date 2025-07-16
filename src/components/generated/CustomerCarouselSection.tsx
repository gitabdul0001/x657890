"use client";

import React from 'react';
import { motion } from 'framer-motion';
const CustomerCarouselSection: React.FC = () => {
  // Combined brand list from both rows
  const brands = [{
    name: 'Microsoft',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/microsoft.svg',
    mpid: "ad293458-be95-4348-a231-56873ec935f7"
  }, {
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/google.svg',
    mpid: "29df1b0e-8b6e-48fe-95dd-91aafeeb8055"
  }, {
    name: 'Apple',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/apple.svg',
    mpid: "d55e370e-2ee6-4e2e-bbca-c233c044c885"
  }, {
    name: 'Amazon',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazon.svg',
    mpid: "c4384898-b0e0-4687-8465-94da8167c8b9"
  }, {
    name: 'Netflix',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/netflix.svg',
    mpid: "9d39c9d1-7617-4743-9204-a06bbd930218"
  }, {
    name: 'Spotify',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/spotify.svg',
    mpid: "d8d13f03-ea4f-4ab0-9ed8-d9ef3973b918"
  }, {
    name: 'Slack',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/slack.svg',
    mpid: "5345156d-c23e-4e70-adf6-bd3cb1f3440e"
  }, {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/github.svg',
    mpid: "6c92d3d6-a6e3-4b69-822e-cb3b8773410a"
  }, {
    name: 'Meta',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/meta.svg',
    mpid: "dd6ae25f-4314-4ea4-accf-88dc1f21067b"
  }, {
    name: 'LinkedIn',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/linkedin.svg',
    mpid: "60af40e2-9855-4185-a8b1-2300b6faf054"
  }, {
    name: 'PayPal',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/paypal.svg',
    mpid: "23cb9365-0869-49d3-985c-572d054d5e31"
  }, {
    name: 'Discord',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/discord.svg',
    mpid: "a3259e7b-6580-46e8-b9e9-da065a0416ef"
  }, {
    name: 'Notion',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/notion.svg',
    mpid: "5682d549-ebc7-4ce0-a874-21a026f75439"
  }, {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/figma.svg',
    mpid: "13c554e7-55ff-4b2d-a528-7a78611dee04"
  }, {
    name: 'Canva',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/canva.svg',
    mpid: "0506b136-99ec-4854-beb7-eb6f449a46a9"
  }, {
    name: 'Trello',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/trello.svg',
    mpid: "71b99d01-b8e1-41a1-a207-616f884b929c"
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