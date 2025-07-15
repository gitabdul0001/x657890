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
    mpid: "3f413ce2-98b5-44cb-9dc1-32e1ba8a803c"
  }, {
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/google.svg',
    mpid: "036c6eb1-6765-4309-89eb-dd7c1dc6d905"
  }, {
    name: 'Apple',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/apple.svg',
    mpid: "2ed6b52e-d503-4d3e-8329-23088efb09b5"
  }, {
    name: 'Amazon',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazon.svg',
    mpid: "f08ecd2d-3ea1-488b-87f0-e2cb039f025f"
  }, {
    name: 'Netflix',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/netflix.svg',
    mpid: "9de0f22b-1d9a-4d38-9b4c-188d4c4ca305"
  }, {
    name: 'Spotify',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/spotify.svg',
    mpid: "294c98dd-331a-4710-953e-3e8d7d08e167"
  }, {
    name: 'Slack',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/slack.svg',
    mpid: "039d9c8e-d54b-40f5-a151-9586980bbd2d"
  }, {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/github.svg',
    mpid: "2c9ec88a-de0a-4903-8579-0db8c9d8ea53"
  }, {
    name: 'Zoom',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/zoom.svg',
    mpid: "57096ec3-c20e-4a3b-b072-d02ec9d44d37"
  }, {
    name: 'Dropbox',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/dropbox.svg',
    mpid: "223c325d-bc1a-4eb4-bb57-6dfe61caac7f"
  }, {
    name: 'Adobe',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobe.svg',
    mpid: "cf894a3e-68d9-42a2-af49-a88dacb8f40e"
  }, {
    name: 'Tesla',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/tesla.svg',
    mpid: "df4efc02-8122-4a42-a32a-f4fb8a935fbc"
  }, {
    name: 'Airbnb',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/airbnb.svg',
    mpid: "c1fa7b49-aadb-48be-bcb9-f9cf10eafe9e"
  }, {
    name: 'Uber',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/uber.svg',
    mpid: "6b691a8b-79ac-48db-b94c-44daa2d3c146"
  }, {
    name: 'Twitter',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/twitter.svg',
    mpid: "edea08e3-57b7-4b26-96e7-09af03ca249a"
  }] as any[];
  const secondRowBrands = [{
    name: 'Meta',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/meta.svg',
    mpid: "ad074db0-76ad-4089-b61c-de3017ff972c"
  }, {
    name: 'LinkedIn',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/linkedin.svg',
    mpid: "5af81348-d521-4799-9cec-c637478fc4f8"
  }, {
    name: 'PayPal',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/paypal.svg',
    mpid: "c4c6f56f-df82-42aa-ad65-34cff79724e8"
  }, {
    name: 'Discord',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/discord.svg',
    mpid: "85f44fd7-f796-47cd-bc8b-97055ec05d91"
  }, {
    name: 'Notion',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/notion.svg',
    mpid: "11844a17-ad51-45d8-834a-7c577be9ed25"
  }, {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/figma.svg',
    mpid: "b17fddf7-0258-477a-99b4-5c2d8bfd2903"
  }, {
    name: 'Canva',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/canva.svg',
    mpid: "7b841901-c4f4-4644-8737-55cea72cce6a"
  }, {
    name: 'Trello',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/trello.svg',
    mpid: "cadc209d-9537-444c-968c-0f64a9f5c1c8"
  }, {
    name: 'Asana',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/asana.svg',
    mpid: "0c43d712-5ea3-4718-956a-42390b2a715c"
  }, {
    name: 'Salesforce',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/salesforce.svg',
    mpid: "a4b996fc-3295-43e9-a758-8d74f464ee94"
  }, {
    name: 'HubSpot',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/hubspot.svg',
    mpid: "eb2d5e54-0b3c-400e-990b-b9ef79d7254c"
  }, {
    name: 'Mailchimp',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/mailchimp.svg',
    mpid: "3c23de1e-97a7-4bec-ac87-c92e28179e54"
  }, {
    name: 'Twitch',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/twitch.svg',
    mpid: "73a7a5e5-b9d6-4459-a4d9-89b97101733d"
  }, {
    name: 'Reddit',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/reddit.svg',
    mpid: "f5c32b02-32e4-4974-9182-73d3d793bfda"
  }, {
    name: 'Vercel',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/vercel.svg',
    mpid: "b5e41baa-93d5-4d01-98da-54b64be51b73"
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
          <div className="relative mb-12 overflow-hidden w-full" data-magicpath-id="8" data-magicpath-path="CustomerCarouselSection.tsx">
            <motion.div className="flex gap-12 w-fit min-w-full" style={{
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
              y: -12,
              scale: 1.05
            }} transition={{
              duration: 0.3,
              ease: "easeOut"
            }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="CustomerCarouselSection.tsx">
                  <div className="group relative w-36 h-36 lg:w-44 lg:h-44 rounded-3xl border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center backdrop-blur-sm" style={{
                backgroundColor: '#fcfcf9'
              }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="CustomerCarouselSection.tsx">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-slate-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="CustomerCarouselSection.tsx" />
                    <div className="relative z-10 flex flex-col items-center gap-4" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="CustomerCarouselSection.tsx">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="CustomerCarouselSection.tsx">
                        <img alt={`${brand.name} logo`} className="w-full h-full object-contain filter brightness-0 opacity-70 group-hover:opacity-90 transition-all duration-300" loading="lazy" src={brand.logo} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknown" data-magicpath-id="15" data-magicpath-path="CustomerCarouselSection.tsx" />
                      </div>
                      <span className="text-sm lg:text-base font-medium text-slate-600 group-hover:text-slate-800 transition-colors duration-300" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="16" data-magicpath-path="CustomerCarouselSection.tsx">
                        {brand.name}
                      </span>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>
          </div>

          {/* Second row - moves right to left on scroll down */}
          <div className="relative overflow-hidden w-full" data-magicpath-id="17" data-magicpath-path="CustomerCarouselSection.tsx">
            <motion.div className="flex gap-12 w-fit min-w-full" style={{
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
              y: -12,
              scale: 1.05
            }} transition={{
              duration: 0.3,
              ease: "easeOut"
            }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="19" data-magicpath-path="CustomerCarouselSection.tsx">
                  <div className="group relative w-36 h-36 lg:w-44 lg:h-44 rounded-3xl border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center backdrop-blur-sm" style={{
                backgroundColor: '#fcfcf9'
              }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="CustomerCarouselSection.tsx">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-slate-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="CustomerCarouselSection.tsx" />
                    <div className="relative z-10 flex flex-col items-center gap-4" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="CustomerCarouselSection.tsx">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="CustomerCarouselSection.tsx">
                        <img alt={`${brand.name} logo`} className="w-full h-full object-contain filter brightness-0 opacity-70 group-hover:opacity-90 transition-all duration-300" loading="lazy" src={brand.logo} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknown" data-magicpath-id="24" data-magicpath-path="CustomerCarouselSection.tsx" />
                      </div>
                      <span className="text-sm lg:text-base font-medium text-slate-600 group-hover:text-slate-800 transition-colors duration-300" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="25" data-magicpath-path="CustomerCarouselSection.tsx">
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