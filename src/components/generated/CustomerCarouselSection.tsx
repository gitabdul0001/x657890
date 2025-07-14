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
    mpid: "5e364cfb-2fd0-4d45-a859-cc78fb739cc7"
  }, {
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/google.svg',
    mpid: "3d47d820-74c5-4dee-b089-955b3214a6fc"
  }, {
    name: 'Apple',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/apple.svg',
    mpid: "0bff7c24-8210-42d2-9beb-7d541dfdbbbd"
  }, {
    name: 'Amazon',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazon.svg',
    mpid: "efbbedbd-a292-475d-9e0e-b583832bb928"
  }, {
    name: 'Netflix',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/netflix.svg',
    mpid: "5f76cbb0-a3f2-4cd1-8498-edb8a02ad9ba"
  }, {
    name: 'Spotify',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/spotify.svg',
    mpid: "243c4e07-6fdc-41ef-8a5d-284ef1f02ef9"
  }, {
    name: 'Slack',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/slack.svg',
    mpid: "0de9028f-cb3a-4245-8b09-4f02ff035d30"
  }, {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/github.svg',
    mpid: "db9f2d60-530b-4ed5-83af-affa86775972"
  }, {
    name: 'Zoom',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/zoom.svg',
    mpid: "2341fbc8-c98f-495c-8af9-bdba89605330"
  }, {
    name: 'Dropbox',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/dropbox.svg',
    mpid: "3dde200f-1005-4372-96c9-5ff1ceac710a"
  }, {
    name: 'Adobe',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobe.svg',
    mpid: "d8b317f6-5ecc-4901-a620-b09301459838"
  }, {
    name: 'Tesla',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/tesla.svg',
    mpid: "b1866cff-fd15-48e6-a8cc-33a9f5bfbaf5"
  }, {
    name: 'Airbnb',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/airbnb.svg',
    mpid: "c35ef6d2-6c2d-4bb6-ac35-b6323e327c83"
  }, {
    name: 'Uber',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/uber.svg',
    mpid: "b3b6d688-9d78-43bd-8978-66f2219608d2"
  }, {
    name: 'Twitter',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/twitter.svg',
    mpid: "86ec376a-95a6-4267-8da6-c295f46cc583"
  }] as any[];
  const secondRowBrands = [{
    name: 'Meta',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/meta.svg',
    mpid: "1f74c6e1-a44f-468d-8625-0356ba5163cc"
  }, {
    name: 'LinkedIn',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/linkedin.svg',
    mpid: "508377e4-58fe-4b0e-a04b-0e0209557771"
  }, {
    name: 'PayPal',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/paypal.svg',
    mpid: "75b218b5-78e7-425e-9771-77732e9a0296"
  }, {
    name: 'Discord',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/discord.svg',
    mpid: "f21dd758-24f5-4a62-ab21-206253b161f3"
  }, {
    name: 'Notion',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/notion.svg',
    mpid: "60a4c87d-f89c-4573-9700-e76b4630cb1e"
  }, {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/figma.svg',
    mpid: "e4f45d07-82e3-431b-b0df-b9892fe4aa47"
  }, {
    name: 'Canva',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/canva.svg',
    mpid: "8cceb40f-bf3d-4434-8497-bd83e622cb55"
  }, {
    name: 'Trello',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/trello.svg',
    mpid: "74d266cf-ced7-4100-bd4b-9b79d0d6daa6"
  }, {
    name: 'Asana',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/asana.svg',
    mpid: "9592fa44-f799-49fb-bdfb-98fc44fe8d29"
  }, {
    name: 'Salesforce',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/salesforce.svg',
    mpid: "4941cd44-75bf-4c44-9304-699843c1ca5f"
  }, {
    name: 'HubSpot',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/hubspot.svg',
    mpid: "5b042456-4fdf-4ceb-a592-95c110227816"
  }, {
    name: 'Mailchimp',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/mailchimp.svg',
    mpid: "83fc4d90-5a9f-48e5-922a-4e04b67fa2cd"
  }, {
    name: 'Twitch',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/twitch.svg',
    mpid: "8b634367-3181-482c-80d0-73e0e6017a5e"
  }, {
    name: 'Reddit',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/reddit.svg',
    mpid: "fe1bcf25-5689-4a8d-967b-370b81829a4f"
  }, {
    name: 'Vercel',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/vercel.svg',
    mpid: "78860ad7-9081-49d6-9705-6ff9e5605ea6"
  }] as any[];

  // Duplicate arrays for seamless infinite scroll effect
  const duplicatedFirstRow = [...firstRowBrands, ...firstRowBrands, ...firstRowBrands];
  const duplicatedSecondRow = [...secondRowBrands, ...secondRowBrands, ...secondRowBrands];
  return <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden" data-magicpath-id="0" data-magicpath-path="CustomerCarouselSection.tsx">
      <div className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="CustomerCarouselSection.tsx">
        {/* Section Header */}
        <motion.div className="text-center mb-20" initial={{
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
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed" data-magicpath-id="7" data-magicpath-path="CustomerCarouselSection.tsx">
            Join thousands of companies that rely on Reaxo to streamline their workflows and accelerate growth
          </p>
        </motion.div>

        {/* Brand Carousel with Scroll Animation */}
        <div className="relative" data-magicpath-id="8" data-magicpath-path="CustomerCarouselSection.tsx">
          {/* First row - moves left to right on scroll down */}
          <div className="relative mb-8 overflow-hidden" data-magicpath-id="9" data-magicpath-path="CustomerCarouselSection.tsx">
            <motion.div className="flex gap-8 w-fit" style={{
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
          }} data-magicpath-id="10" data-magicpath-path="CustomerCarouselSection.tsx">
              {duplicatedFirstRow.map((brand, index) => <motion.div key={`first-${brand.name}-${index}`} className="flex-none" whileHover={{
              y: -8
            }} transition={{
              duration: 0.3,
              ease: "easeOut"
            }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="CustomerCarouselSection.tsx">
                  <div className="group relative w-28 h-28 lg:w-36 lg:h-36 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500 flex items-center justify-center backdrop-blur-sm" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="CustomerCarouselSection.tsx">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-slate-50/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="CustomerCarouselSection.tsx" />
                    <div className="relative z-10 flex flex-col items-center gap-3" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="CustomerCarouselSection.tsx">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="CustomerCarouselSection.tsx">
                        <img alt={`${brand.name} logo`} className="w-full h-full object-contain filter brightness-0 opacity-70 group-hover:opacity-90 transition-all duration-300" loading="lazy" src={brand.logo} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknown" data-magicpath-id="16" data-magicpath-path="CustomerCarouselSection.tsx" />
                      </div>
                      <span className="text-xs lg:text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors duration-300" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="17" data-magicpath-path="CustomerCarouselSection.tsx">
                        {brand.name}
                      </span>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>
          </div>

          {/* Second row - moves right to left on scroll down */}
          <div className="relative overflow-hidden" data-magicpath-id="18" data-magicpath-path="CustomerCarouselSection.tsx">
            <motion.div className="flex gap-8 w-fit" style={{
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
          }} data-magicpath-id="19" data-magicpath-path="CustomerCarouselSection.tsx">
              {duplicatedSecondRow.map((brand, index) => <motion.div key={`second-${brand.name}-${index}`} className="flex-none" whileHover={{
              y: -8
            }} transition={{
              duration: 0.3,
              ease: "easeOut"
            }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="CustomerCarouselSection.tsx">
                  <div className="group relative w-28 h-28 lg:w-36 lg:h-36 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500 flex items-center justify-center backdrop-blur-sm" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="CustomerCarouselSection.tsx">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-slate-50/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="CustomerCarouselSection.tsx" />
                    <div className="relative z-10 flex flex-col items-center gap-3" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="CustomerCarouselSection.tsx">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="CustomerCarouselSection.tsx">
                        <img alt={`${brand.name} logo`} className="w-full h-full object-contain filter brightness-0 opacity-70 group-hover:opacity-90 transition-all duration-300" loading="lazy" src={brand.logo} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknown" data-magicpath-id="25" data-magicpath-path="CustomerCarouselSection.tsx" />
                      </div>
                      <span className="text-xs lg:text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors duration-300" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="26" data-magicpath-path="CustomerCarouselSection.tsx">
                        {brand.name}
                      </span>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div className="text-center mt-24" initial={{
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
      }} data-magicpath-id="27" data-magicpath-path="CustomerCarouselSection.tsx">
          <p className="text-xl text-slate-600 mb-10 font-light" data-magicpath-id="28" data-magicpath-path="CustomerCarouselSection.tsx">
            Ready to join the leaders?
          </p>
          <motion.button className="group relative px-12 py-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-lg font-medium rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl" whileHover={{
          scale: 1.02,
          y: -2
        }} whileTap={{
          scale: 0.98
        }} data-magicpath-id="29" data-magicpath-path="CustomerCarouselSection.tsx">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-magicpath-id="30" data-magicpath-path="CustomerCarouselSection.tsx" />
            <span className="relative z-10" data-magicpath-id="31" data-magicpath-path="CustomerCarouselSection.tsx">
              Start your journey today
            </span>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" initial={{
            x: '-100%'
          }} whileHover={{
            x: '100%'
          }} transition={{
            duration: 0.6,
            ease: "easeInOut"
          }} data-magicpath-id="32" data-magicpath-path="CustomerCarouselSection.tsx" />
          </motion.button>
        </motion.div>
      </div>
    </section>;
};
export default CustomerCarouselSection;