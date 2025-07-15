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
    mpid: "13388e50-f88b-4f58-b843-6a5cb5f28047"
  }, {
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/google.svg',
    mpid: "9249dfae-66a2-41a8-8d58-96ad928ecfa0"
  }, {
    name: 'Apple',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/apple.svg',
    mpid: "aa13e3bb-fc11-4441-9739-08ebc88880af"
  }, {
    name: 'Amazon',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazon.svg',
    mpid: "fa436ec6-687b-4266-be75-8e5f876e9338"
  }, {
    name: 'Netflix',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/netflix.svg',
    mpid: "e4ecd9c2-31bc-4706-a5f3-5ed154217d97"
  }, {
    name: 'Spotify',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/spotify.svg',
    mpid: "d0a31445-ca2f-4706-a55d-7dacce8bc896"
  }, {
    name: 'Slack',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/slack.svg',
    mpid: "6f76f9ef-2b0f-4e17-9c76-479953413f4c"
  }, {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/github.svg',
    mpid: "dbc5a521-5712-4922-8b74-7aa7938db1e3"
  }, {
    name: 'Zoom',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/zoom.svg',
    mpid: "515cd5c0-1619-445c-98e2-8a8a4d0cfea5"
  }, {
    name: 'Dropbox',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/dropbox.svg',
    mpid: "a5a75c53-639a-4474-b61e-a19881f110d0"
  }, {
    name: 'Adobe',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobe.svg',
    mpid: "ac281f89-bc5a-44c1-b48f-22c442b1ce9d"
  }, {
    name: 'Tesla',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/tesla.svg',
    mpid: "e31667d1-5dbc-4232-b59b-dbfe8280328e"
  }, {
    name: 'Airbnb',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/airbnb.svg',
    mpid: "0ed00a01-66c3-4c81-a213-3692dbce6241"
  }, {
    name: 'Uber',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/uber.svg',
    mpid: "ef48e777-390f-4248-8a64-5ef046e11f5e"
  }, {
    name: 'Twitter',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/twitter.svg',
    mpid: "76fc2623-a199-4ba9-9ca3-28e571f4d852"
  }] as any[];
  const secondRowBrands = [{
    name: 'Meta',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/meta.svg',
    mpid: "c5b2a585-acd4-49de-a3e5-af5c4fd1ff5d"
  }, {
    name: 'LinkedIn',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/linkedin.svg',
    mpid: "d39581bd-92f6-41c3-820f-caef9ffd51e3"
  }, {
    name: 'PayPal',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/paypal.svg',
    mpid: "d12d5469-ea87-41c4-83a3-749ee7309c96"
  }, {
    name: 'Discord',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/discord.svg',
    mpid: "944eadb8-6c43-414e-8286-ad6ea93b2a7a"
  }, {
    name: 'Notion',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/notion.svg',
    mpid: "a94c4465-f7c5-4784-9079-8bae3f8dc8d6"
  }, {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/figma.svg',
    mpid: "0ac163d9-5bc3-4542-be21-b55ae5efa8a8"
  }, {
    name: 'Canva',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/canva.svg',
    mpid: "c1166785-3dbb-44c6-a901-a58685ae6f22"
  }, {
    name: 'Trello',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/trello.svg',
    mpid: "1ad0a7eb-97d2-4f84-9e41-28523b5b8427"
  }, {
    name: 'Asana',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/asana.svg',
    mpid: "c1251f44-35fa-48f9-8e84-dfd4d276083e"
  }, {
    name: 'Salesforce',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/salesforce.svg',
    mpid: "e0c5ac28-1c8c-46ac-a7c3-ce40e0a45e68"
  }, {
    name: 'HubSpot',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/hubspot.svg',
    mpid: "af5a589f-5f6e-4f09-bc79-e1492a4ae7f3"
  }, {
    name: 'Mailchimp',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/mailchimp.svg',
    mpid: "2e54c046-1ace-4fb5-b886-841119141e6f"
  }, {
    name: 'Twitch',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/twitch.svg',
    mpid: "402b3ea9-3dbc-4ac9-ab0e-4443a24a26c9"
  }, {
    name: 'Reddit',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/reddit.svg',
    mpid: "4727afbc-4ab5-426e-9dc7-78c10fc0c243"
  }, {
    name: 'Vercel',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/vercel.svg',
    mpid: "fd781d21-c741-4eb2-a7cc-8844d5d73bfe"
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