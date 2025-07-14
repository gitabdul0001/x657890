"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const CustomerCarouselSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Extended brand lists with more logos for smooth animation
  const brands = [{
    name: 'Microsoft',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/microsoft.svg',
    mpid: "e98d7b14-2ead-49cd-9715-b5bf7f2970b4"
  }, {
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/google.svg',
    mpid: "866504fa-cbce-4f87-b2ea-3b0e3cae1590"
  }, {
    name: 'Apple',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/apple.svg',
    mpid: "475ed023-599c-48df-838d-b0462cda0d8b"
  }, {
    name: 'Amazon',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazon.svg',
    mpid: "d0d01405-1491-4111-b0f5-d689992f73c3"
  }, {
    name: 'Netflix',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/netflix.svg',
    mpid: "d2b454d7-fb71-407c-aed2-f03f22bd1c1a"
  }, {
    name: 'Spotify',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/spotify.svg',
    mpid: "37b6d379-42fb-4795-9be9-e5b11ca33947"
  }, {
    name: 'Slack',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/slack.svg',
    mpid: "d1d5b2ea-db7a-43b3-9f47-f901e06917ce"
  }, {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/github.svg',
    mpid: "d862df00-6c33-4ae3-bde9-fbd55a5297b0"
  }, {
    name: 'Zoom',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/zoom.svg',
    mpid: "15a5d796-b822-42e1-accb-31f5e2158d6c"
  }, {
    name: 'Dropbox',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/dropbox.svg',
    mpid: "1e7a0573-c56f-41ac-b982-4005520678e1"
  }, {
    name: 'Adobe',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobe.svg',
    mpid: "a61b8266-c75f-4ab3-8cfb-5642cebea2cd"
  }, {
    name: 'Tesla',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/tesla.svg',
    mpid: "398e03bf-981c-4733-9a6d-f10a72d11cdf"
  }, {
    name: 'Airbnb',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/airbnb.svg',
    mpid: "b4ab19d7-49c3-48b6-b603-33fc57251ea0"
  }, {
    name: 'Uber',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/uber.svg',
    mpid: "6ed3910c-1880-42aa-bf8a-7f3c6e5ba978"
  }, {
    name: 'Twitter',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/twitter.svg',
    mpid: "ed865e58-ec0b-49a4-a211-8152748c2568"
  }, {
    name: 'Instagram',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/instagram.svg',
    mpid: "0ef59f0b-fb26-4c18-9a97-4d0443162d42"
  }, {
    name: 'YouTube',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/youtube.svg',
    mpid: "6897c9e7-3fe2-47d1-bdaf-326a86afdbfd"
  }, {
    name: 'TikTok',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/tiktok.svg',
    mpid: "d8b233f1-8e2d-401a-9361-5404ca3c8602"
  }] as any[];
  const secondRowBrands = [{
    name: 'Meta',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/meta.svg',
    mpid: "ed93a6d0-0eb4-4cbd-88a2-8ca42c4c0c26"
  }, {
    name: 'LinkedIn',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/linkedin.svg',
    mpid: "49d97653-7c89-4537-88f1-6c6200c9b194"
  }, {
    name: 'PayPal',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/paypal.svg',
    mpid: "b7365a2a-079a-46ef-9928-8f1763ea1af5"
  }, {
    name: 'Stripe',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/stripe.svg',
    mpid: "b1580c37-28fa-49ba-867e-f4b9d3b0daf6"
  }, {
    name: 'Shopify',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/shopify.svg',
    mpid: "f13728fd-1168-4679-b6e0-67c92c5bf599"
  }, {
    name: 'Discord',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/discord.svg',
    mpid: "55a20e39-6e06-4ce8-8cd8-c2f8e91c73c9"
  }, {
    name: 'Notion',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/notion.svg',
    mpid: "cee6cbba-ba57-4242-8eab-9a14ea38f81c"
  }, {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/figma.svg',
    mpid: "7e1b3073-c410-4e1d-ae2b-697c1d3f94ef"
  }, {
    name: 'Canva',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/canva.svg',
    mpid: "1a7fa048-5638-4d53-aa2d-1b121a1f481c"
  }, {
    name: 'Trello',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/trello.svg',
    mpid: "621bfe7d-9984-46ef-b8f2-93f9d001bfe4"
  }, {
    name: 'Asana',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/asana.svg',
    mpid: "d153c09a-3509-48c5-896f-2ed0c67ede4a"
  }, {
    name: 'Salesforce',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/salesforce.svg',
    mpid: "0aa89feb-f9ee-4c55-95aa-2a23226af105"
  }, {
    name: 'HubSpot',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/hubspot.svg',
    mpid: "e3440ad3-a910-4f60-ba59-97ea01b589d1"
  }, {
    name: 'Mailchimp',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/mailchimp.svg',
    mpid: "79e74bd4-c725-43ae-9096-194e93be3d66"
  }, {
    name: 'Twitch',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/twitch.svg',
    mpid: "05cf763b-4c22-4359-b205-e6ce630c0e43"
  }, {
    name: 'Reddit',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/reddit.svg',
    mpid: "62e04da5-aad6-4fd7-98ce-3f060fad723f"
  }, {
    name: 'Pinterest',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/pinterest.svg',
    mpid: "a3c2c06e-459a-4a30-92d6-e87747d7005e"
  }, {
    name: 'Snapchat',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/snapchat.svg',
    mpid: "981469bb-cc69-42d5-b125-65e9e1293cc8"
  }] as any[];

  // Calculate transform values based on scroll
  const firstRowTransform = scrollY * 0.3; // Move right on scroll down
  const secondRowTransform = -scrollY * 0.3; // Move left on scroll down

  return <section className="py-24 px-6 bg-white" data-magicpath-id="0" data-magicpath-path="CustomerCarouselSection.tsx">
      <div className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="CustomerCarouselSection.tsx">
        {/* Section Header */}
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} viewport={{
        once: true
      }} data-magicpath-id="2" data-magicpath-path="CustomerCarouselSection.tsx">
          <div className="flex items-center justify-center gap-4 mb-6" data-magicpath-id="3" data-magicpath-path="CustomerCarouselSection.tsx">
            <img src="https://www.todesktop.com/_app/immutable/assets/pointing-arrow.hZqSxAwL.svg" alt="pointing arrow" className="inline w-6 h-6" data-magicpath-id="4" data-magicpath-path="CustomerCarouselSection.tsx" />
            <h2 className="text-2xl md:text-3xl font-inter font-semibold text-gray-800 tracking-wider uppercase" data-magicpath-id="5" data-magicpath-path="CustomerCarouselSection.tsx">
              Brands that love Reaxo
            </h2>
            <img src="https://www.todesktop.com/_app/immutable/assets/pointing-arrow.hZqSxAwL.svg" alt="pointing arrow" className="inline transform scale-x-[-1] w-6 h-6" data-magicpath-id="6" data-magicpath-path="CustomerCarouselSection.tsx" />
          </div>
        </motion.div>

        {/* Brand Grid with Scroll Animation */}
        <div className="relative overflow-hidden" data-magicpath-id="7" data-magicpath-path="CustomerCarouselSection.tsx">
          <div className="relative flex w-full flex-col items-center gap-4" data-magicpath-id="8" data-magicpath-path="CustomerCarouselSection.tsx">
            {/* First row of logos - moves left to right on scroll down */}
            <motion.div className="flex w-fit flex-nowrap" style={{
            transform: `translateX(${68.88 + firstRowTransform}px)`,
            transition: 'none'
          }} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }} data-magicpath-id="9" data-magicpath-path="CustomerCarouselSection.tsx">
              <div className="flex w-fit gap-4" data-magicpath-id="10" data-magicpath-path="CustomerCarouselSection.tsx">
                {brands.map((brand, index) => <motion.div key={`${brand.name}-${index}`} className="flex h-24 w-24 flex-none flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-[#fcfcf9] lg:h-32 lg:w-32 hover:shadow-lg transition-all duration-300" whileHover={{
                scale: 1.05,
                y: -2
              }} transition={{
                duration: 0.2
              }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="CustomerCarouselSection.tsx">
                    <div className="h-12 w-12 lg:h-16 lg:w-16" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="CustomerCarouselSection.tsx">
                      <img alt={`${brand.name} app icon`} className="block h-12 w-12 lg:h-16 lg:w-16 object-contain filter brightness-0" loading="lazy" src={brand.logo} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:string" data-magicpath-id="13" data-magicpath-path="CustomerCarouselSection.tsx" />
                    </div>
                    <div className="font-display text-[12px] lg:text-[16px] text-gray-700 font-medium" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="14" data-magicpath-path="CustomerCarouselSection.tsx">
                      {brand.name}
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Second row of logos - moves right to left on scroll down */}
            <motion.div className="flex w-fit flex-nowrap" style={{
            transform: `translateX(${-68.88 + secondRowTransform}px)`,
            transition: 'none'
          }} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} viewport={{
            once: true
          }} data-magicpath-id="15" data-magicpath-path="CustomerCarouselSection.tsx">
              <div className="flex w-fit gap-4" data-magicpath-id="16" data-magicpath-path="CustomerCarouselSection.tsx">
                {secondRowBrands.map((brand, index) => <motion.div key={`${brand.name}-${index}`} className="flex h-24 w-24 flex-none flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-[#fcfcf9] lg:h-32 lg:w-32 hover:shadow-lg transition-all duration-300" whileHover={{
                scale: 1.05,
                y: -2
              }} transition={{
                duration: 0.2
              }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="CustomerCarouselSection.tsx">
                    <div className="h-12 w-12 lg:h-16 lg:w-16" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="CustomerCarouselSection.tsx">
                      <img alt={`${brand.name} app icon`} className="block h-12 w-12 lg:h-16 lg:w-16 object-contain filter brightness-0" loading="lazy" src={brand.logo} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:string" data-magicpath-id="19" data-magicpath-path="CustomerCarouselSection.tsx" />
                    </div>
                    <div className="font-display text-[12px] lg:text-[16px] text-gray-700 font-medium" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="20" data-magicpath-path="CustomerCarouselSection.tsx">
                      {brand.name}
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div className="text-center mt-20" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut"
      }} viewport={{
        once: true
      }} data-magicpath-id="21" data-magicpath-path="CustomerCarouselSection.tsx">
          <p className="text-lg text-gray-600 mb-8" data-magicpath-id="22" data-magicpath-path="CustomerCarouselSection.tsx">
            Ready to join them?
          </p>
          <motion.button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} data-magicpath-id="23" data-magicpath-path="CustomerCarouselSection.tsx">
            Start your free trial
          </motion.button>
        </motion.div>
      </div>
    </section>;
};
export default CustomerCarouselSection;