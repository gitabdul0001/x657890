"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
const CustomerCarouselSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to pixel values for smooth animation
  const firstRowX = useTransform(scrollYProgress, [0, 1], [-400, 400]);
  const secondRowX = useTransform(scrollYProgress, [0, 1], [400, -400]);

  // Extended brand lists with premium tech companies
  const firstRowBrands = [{
    name: 'Microsoft',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/microsoft.svg',
    mpid: "c7facabb-c734-46b5-804c-d7b1e3ae1c09"
  }, {
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/google.svg',
    mpid: "478ded3d-80fe-48a0-b060-0c1b1aef90d2"
  }, {
    name: 'Apple',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/apple.svg',
    mpid: "17c89a03-8c8e-4e80-bdde-dc5cd81327ec"
  }, {
    name: 'Amazon',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazon.svg',
    mpid: "7fe2bbcc-4590-4a14-bd65-a1910696c116"
  }, {
    name: 'Netflix',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/netflix.svg',
    mpid: "b75e254d-190a-4830-9fbe-18987974ca0e"
  }, {
    name: 'Spotify',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/spotify.svg',
    mpid: "7e56c5ec-8f2d-4f90-8513-bbdbdd5fff27"
  }, {
    name: 'Slack',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/slack.svg',
    mpid: "ba7b7c31-2ea4-48fc-a0c5-1d9f9f7fe99d"
  }, {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/github.svg',
    mpid: "fe3f949a-c809-4c0e-a80b-0a50f75617b6"
  }, {
    name: 'Zoom',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/zoom.svg',
    mpid: "c49c1976-9d2d-4336-bc91-6d71f41c4c47"
  }, {
    name: 'Dropbox',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/dropbox.svg',
    mpid: "aa6f83ee-074e-4e54-aa12-c5ac5adcc6ac"
  }, {
    name: 'Adobe',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobe.svg',
    mpid: "82f5cac3-4002-410f-bcf5-d6e7c5e9b13a"
  }, {
    name: 'Tesla',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/tesla.svg',
    mpid: "4ab74316-c02c-4316-add7-ab2f42cda73a"
  }, {
    name: 'Airbnb',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/airbnb.svg',
    mpid: "525539f9-0949-48a9-8660-2cb6775848ca"
  }, {
    name: 'Uber',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/uber.svg',
    mpid: "4e17c387-7e8b-4b29-85c2-eb51f48cf780"
  }, {
    name: 'Twitter',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/twitter.svg',
    mpid: "f62a119d-c757-4b21-b970-8e0a5b661fd0"
  }] as any[];
  const secondRowBrands = [{
    name: 'Meta',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/meta.svg',
    mpid: "3feb4544-1fd8-4006-bec4-b58941a98f5d"
  }, {
    name: 'LinkedIn',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/linkedin.svg',
    mpid: "d39a6331-fe7d-4daa-a21a-24c5f6260a11"
  }, {
    name: 'PayPal',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/paypal.svg',
    mpid: "51e6023e-e0d9-4324-a12f-ad65cd430b21"
  }, {
    name: 'Discord',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/discord.svg',
    mpid: "060ce903-6c6d-46cf-bae0-96462b56c8d9"
  }, {
    name: 'Notion',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/notion.svg',
    mpid: "92c7f1b9-534b-44e5-99fc-d05c6a599f21"
  }, {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/figma.svg',
    mpid: "19bc231b-c09d-4849-a5ee-cf37acd0bcb8"
  }, {
    name: 'Canva',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/canva.svg',
    mpid: "54f79821-bd3a-4a03-aeb5-79c6e3c114da"
  }, {
    name: 'Trello',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/trello.svg',
    mpid: "08a0cbe1-3ce1-4f43-8581-57652e40124e"
  }, {
    name: 'Asana',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/asana.svg',
    mpid: "c0e55d1c-9f83-4c66-8731-64c486a874b1"
  }, {
    name: 'Salesforce',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/salesforce.svg',
    mpid: "f45216d9-f687-44bb-a468-a2869369b967"
  }, {
    name: 'HubSpot',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/hubspot.svg',
    mpid: "5b946389-5288-4de4-8322-3e8e0b8ed1aa"
  }, {
    name: 'Mailchimp',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/mailchimp.svg',
    mpid: "0ca57e7d-1415-40f2-ad00-5f43d372aba2"
  }, {
    name: 'Twitch',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/twitch.svg',
    mpid: "79971301-31df-4fae-aec8-2471aa826cca"
  }, {
    name: 'Reddit',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/reddit.svg',
    mpid: "20dbd6bc-0146-46b3-852b-0f082459e680"
  }, {
    name: 'Vercel',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/vercel.svg',
    mpid: "9f4890bd-2f0b-4879-af53-a4332d9f2f54"
  }] as any[];

  // Duplicate arrays for seamless infinite scroll effect
  const duplicatedFirstRow = [...firstRowBrands, ...firstRowBrands, ...firstRowBrands];
  const duplicatedSecondRow = [...secondRowBrands, ...secondRowBrands, ...secondRowBrands];
  return <section ref={sectionRef} className="py-32 px-6 bg-white overflow-hidden" data-magicpath-id="0" data-magicpath-path="CustomerCarouselSection.tsx">
      <div className="w-full max-w-none mx-auto" data-magicpath-id="1" data-magicpath-path="CustomerCarouselSection.tsx">
        {/* Section Header */}
        <motion.div className="text-center mb-20 max-w-7xl mx-auto" initial={{
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
          <div className="flex items-center justify-center gap-6 mb-8" data-magicpath-id="3" data-magicpath-path="CustomerCarouselSection.tsx">
            <motion.img src="https://www.todesktop.com/_app/immutable/assets/pointing-arrow.hZqSxAwL.svg" alt="pointing arrow" className="w-8 h-8 opacity-60" animate={{
            x: [-2, 2, -2]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }} data-magicpath-id="4" data-magicpath-path="CustomerCarouselSection.tsx" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-800 tracking-wide" data-magicpath-id="5" data-magicpath-path="CustomerCarouselSection.tsx">
              Trusted by industry leaders
            </h2>
            <motion.img src="https://www.todesktop.com/_app/immutable/assets/pointing-arrow.hZqSxAwL.svg" alt="pointing arrow" className="w-8 h-8 opacity-60 transform scale-x-[-1]" animate={{
            x: [2, -2, 2]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }} data-magicpath-id="6" data-magicpath-path="CustomerCarouselSection.tsx" />
          </div>
        </motion.div>

        {/* Brand Carousel with Scroll Animation */}
        <div className="relative w-full" data-magicpath-id="7" data-magicpath-path="CustomerCarouselSection.tsx">
          {/* First row - moves left to right on scroll down */}
          <div className="relative mb-8 overflow-hidden w-full" data-magicpath-id="8" data-magicpath-path="CustomerCarouselSection.tsx">
            <motion.div className="flex gap-8 w-fit min-w-full" style={{
            x: firstRowX
          }} initial={{
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
          }} data-magicpath-id="9" data-magicpath-path="CustomerCarouselSection.tsx">
              {duplicatedFirstRow.map((brand, index) => <motion.div key={`first-${brand.name}-${index}`} className="flex-none" whileHover={{
              y: -8
            }} transition={{
              duration: 0.3,
              ease: "easeOut"
            }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="CustomerCarouselSection.tsx">
                  <div className="group relative w-28 h-28 lg:w-36 lg:h-36 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500 flex items-center justify-center backdrop-blur-sm" style={{
                backgroundColor: '#fcfcf9'
              }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="CustomerCarouselSection.tsx">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-slate-50/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="CustomerCarouselSection.tsx" />
                    <div className="relative z-10 flex flex-col items-center gap-3" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="CustomerCarouselSection.tsx">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="CustomerCarouselSection.tsx">
                        <img alt={`${brand.name} logo`} className="w-full h-full object-contain filter brightness-0 opacity-70 group-hover:opacity-90 transition-all duration-300" loading="lazy" src={brand.logo} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknown" data-magicpath-id="15" data-magicpath-path="CustomerCarouselSection.tsx" />
                      </div>
                      <span className="text-xs lg:text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors duration-300" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="16" data-magicpath-path="CustomerCarouselSection.tsx">
                        {brand.name}
                      </span>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>
          </div>

          {/* Second row - moves right to left on scroll down */}
          <div className="relative overflow-hidden w-full" data-magicpath-id="17" data-magicpath-path="CustomerCarouselSection.tsx">
            <motion.div className="flex gap-8 w-fit min-w-full" style={{
            x: secondRowX
          }} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} viewport={{
            once: true
          }} data-magicpath-id="18" data-magicpath-path="CustomerCarouselSection.tsx">
              {duplicatedSecondRow.map((brand, index) => <motion.div key={`second-${brand.name}-${index}`} className="flex-none" whileHover={{
              y: -8
            }} transition={{
              duration: 0.3,
              ease: "easeOut"
            }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="19" data-magicpath-path="CustomerCarouselSection.tsx">
                  <div className="group relative w-28 h-28 lg:w-36 lg:h-36 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500 flex items-center justify-center backdrop-blur-sm" style={{
                backgroundColor: '#fcfcf9'
              }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="CustomerCarouselSection.tsx">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-slate-50/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="CustomerCarouselSection.tsx" />
                    <div className="relative z-10 flex flex-col items-center gap-3" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="CustomerCarouselSection.tsx">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="CustomerCarouselSection.tsx">
                        <img alt={`${brand.name} logo`} className="w-full h-full object-contain filter brightness-0 opacity-70 group-hover:opacity-90 transition-all duration-300" loading="lazy" src={brand.logo} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknown" data-magicpath-id="24" data-magicpath-path="CustomerCarouselSection.tsx" />
                      </div>
                      <span className="text-xs lg:text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors duration-300" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="25" data-magicpath-path="CustomerCarouselSection.tsx">
                        {brand.name}
                      </span>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div className="text-center mt-24 max-w-7xl mx-auto" initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut"
      }} viewport={{
        once: true
      }} data-magicpath-id="26" data-magicpath-path="CustomerCarouselSection.tsx">
          <p className="text-xl text-slate-600 mb-10 font-light" data-magicpath-id="27" data-magicpath-path="CustomerCarouselSection.tsx">
            Ready to join the leaders?
          </p>
          <motion.button className="group relative px-12 py-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-lg font-medium rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl" whileHover={{
          scale: 1.02,
          y: -2
        }} whileTap={{
          scale: 0.98
        }} data-magicpath-id="28" data-magicpath-path="CustomerCarouselSection.tsx">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-id="29" data-magicpath-path="CustomerCarouselSection.tsx" />
            <span className="relative z-10" data-magicpath-id="30" data-magicpath-path="CustomerCarouselSection.tsx">
              Start your journey today
            </span>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" initial={{
            x: '-100%'
          }} whileHover={{
            x: '100%'
          }} transition={{
            duration: 0.6,
            ease: "easeInOut"
          }} data-magicpath-id="31" data-magicpath-path="CustomerCarouselSection.tsx" />
          </motion.button>
        </motion.div>
      </div>
    </section>;
};
export default CustomerCarouselSection;