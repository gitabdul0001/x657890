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
    mpid: "1d17a8b8-5a78-4af3-84c8-b9bb167a1f34"
  }, {
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/google.svg',
    mpid: "85af1653-86c2-4a39-ad14-edbc527cb540"
  }, {
    name: 'Apple',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/apple.svg',
    mpid: "a5879afc-5367-4010-a42f-458586bf5f98"
  }, {
    name: 'Amazon',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazon.svg',
    mpid: "b492b473-9641-488e-ac5b-1f17bba80342"
  }, {
    name: 'Netflix',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/netflix.svg',
    mpid: "3885a3e4-5ffd-40b6-9d5a-4dfa10476681"
  }, {
    name: 'Spotify',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/spotify.svg',
    mpid: "60bc86c7-9e5e-4a32-9884-4e608effa118"
  }, {
    name: 'Slack',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/slack.svg',
    mpid: "c209674b-5b79-4aab-a341-647c83917110"
  }, {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/github.svg',
    mpid: "fadf6e84-5760-4ba9-b0bd-d60191368c83"
  }, {
    name: 'Zoom',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/zoom.svg',
    mpid: "201377ad-cd67-4611-86b2-db60b0bef514"
  }, {
    name: 'Dropbox',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/dropbox.svg',
    mpid: "7735fe09-855f-4039-a1a9-823b43e4ef44"
  }, {
    name: 'Adobe',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobe.svg',
    mpid: "795dbab7-6555-4591-bdc7-77f17c45798e"
  }, {
    name: 'Tesla',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/tesla.svg',
    mpid: "4cef6f6d-33f0-4483-811b-acbc3966df8a"
  }, {
    name: 'Airbnb',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/airbnb.svg',
    mpid: "f5ffe882-46ea-4da7-bca6-829f928c34ef"
  }, {
    name: 'Uber',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/uber.svg',
    mpid: "2a8c5725-a063-447e-90b3-13740f2960e6"
  }, {
    name: 'Twitter',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/twitter.svg',
    mpid: "b56c8ea4-2b3e-48c1-98ca-a5865cebe999"
  }] as any[];
  const secondRowBrands = [{
    name: 'Meta',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/meta.svg',
    mpid: "fa9292f9-753c-4e58-991e-fafb96694ef5"
  }, {
    name: 'LinkedIn',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/linkedin.svg',
    mpid: "0ffa02af-1ed8-4e8d-b255-dab3e3cf1154"
  }, {
    name: 'PayPal',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/paypal.svg',
    mpid: "a0025b7b-ecd2-4613-bdbd-68535f87efac"
  }, {
    name: 'Discord',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/discord.svg',
    mpid: "48e2e6dd-440f-4db2-ab97-929810251680"
  }, {
    name: 'Notion',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/notion.svg',
    mpid: "acc263c9-1a85-4f9e-93aa-3b06a2193e42"
  }, {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/figma.svg',
    mpid: "c1fae1ef-1175-4e5c-8bf7-52e80a55ec8a"
  }, {
    name: 'Canva',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/canva.svg',
    mpid: "4e52de87-1854-471d-9d32-4cde9e190f49"
  }, {
    name: 'Trello',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/trello.svg',
    mpid: "69342e4f-4590-46bf-8c38-8d8ddeb00144"
  }, {
    name: 'Asana',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/asana.svg',
    mpid: "ab5ef37f-da68-44d7-bb46-52c12f337093"
  }, {
    name: 'Salesforce',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/salesforce.svg',
    mpid: "019a4bfd-f728-40e1-8727-4acdb9994386"
  }, {
    name: 'HubSpot',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/hubspot.svg',
    mpid: "30d03999-5657-4908-9015-709b5b05c1b9"
  }, {
    name: 'Mailchimp',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/mailchimp.svg',
    mpid: "5054ca03-32e3-4586-8884-2231917b7dd0"
  }, {
    name: 'Twitch',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/twitch.svg',
    mpid: "0c2d8b94-e875-436b-8294-826a1e048e3b"
  }, {
    name: 'Reddit',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/reddit.svg',
    mpid: "649be8be-c2cb-44c2-af9a-97e6086b8b24"
  }, {
    name: 'Vercel',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/vercel.svg',
    mpid: "66d83119-7e75-4da6-9caa-32f430501f49"
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