"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
const CustomerCarouselSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const {
    scrollY: motionScrollY
  } = useScroll();
  useEffect(() => {
    const unsubscribe = motionScrollY.onChange(latest => {
      setScrollY(latest);
    });
    return () => unsubscribe();
  }, [motionScrollY]);

  // Extended brand lists with more logos for smooth animation
  const brands = [{
    name: 'Microsoft',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/microsoft.svg',
    mpid: "9c75c3b6-1821-4a87-9c3f-558556cd0cc1"
  }, {
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/google.svg',
    mpid: "d20df6cf-4659-4425-bb3c-972c500eef1e"
  }, {
    name: 'Apple',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/apple.svg',
    mpid: "851ceb51-765b-4d1a-9a4b-7b422c00c0a8"
  }, {
    name: 'Amazon',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazon.svg',
    mpid: "288d4157-66bb-47fb-acb2-590079be3131"
  }, {
    name: 'Netflix',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/netflix.svg',
    mpid: "1faa70e5-513f-4f73-a5aa-0c68fb1d3ed2"
  }, {
    name: 'Spotify',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/spotify.svg',
    mpid: "333c20fa-3f72-4061-b0ef-5062ec6e5aa2"
  }, {
    name: 'Slack',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/slack.svg',
    mpid: "f42f65f0-7bc4-4d49-abde-d86b94a8e5c1"
  }, {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/github.svg',
    mpid: "60cd3cd1-a811-4efd-afbf-88c8e10e262e"
  }, {
    name: 'Zoom',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/zoom.svg',
    mpid: "f6e85d12-c2d3-4901-957d-83a767a7ec77"
  }, {
    name: 'Dropbox',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/dropbox.svg',
    mpid: "0738574d-2e5a-4935-928e-9ccc192cc682"
  }, {
    name: 'Adobe',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobe.svg',
    mpid: "0eab5925-fd6d-4ff0-be13-e1d7da7cd3a5"
  }, {
    name: 'Tesla',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/tesla.svg',
    mpid: "7873059f-9dc6-46f0-ab1b-3e8f05fac0ed"
  }, {
    name: 'Airbnb',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/airbnb.svg',
    mpid: "f7ff3e5d-9dfc-4e2b-bad4-d87f3d431ff7"
  }, {
    name: 'Uber',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/uber.svg',
    mpid: "8df320db-82bc-4b2c-94c5-86f4e234196a"
  }, {
    name: 'Twitter',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/twitter.svg',
    mpid: "56297039-634a-4589-ab86-e8a857c7afa3"
  }, {
    name: 'Instagram',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/instagram.svg',
    mpid: "cb67dd82-da84-45a1-97f0-fd13c10cda35"
  }, {
    name: 'YouTube',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/youtube.svg',
    mpid: "f9878680-eff5-4966-8e2f-76c4ecee03cc"
  }, {
    name: 'TikTok',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/tiktok.svg',
    mpid: "becad61c-2487-49ce-b43d-027515f96b1f"
  }] as any[];
  const secondRowBrands = [{
    name: 'Meta',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/meta.svg',
    mpid: "81f4924b-aaa4-430d-a207-02b69ad98440"
  }, {
    name: 'LinkedIn',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/linkedin.svg',
    mpid: "8df4c1c0-8232-4f10-acd9-4dcb12180383"
  }, {
    name: 'PayPal',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/paypal.svg',
    mpid: "3f3c3934-be4d-4c95-9794-28c6018b9769"
  }, {
    name: 'Stripe',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/stripe.svg',
    mpid: "023b3116-a22a-471d-b07b-1dbb57aa5f81"
  }, {
    name: 'Shopify',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/shopify.svg',
    mpid: "4d43585e-32b1-4b00-a2e7-ef4c35f18049"
  }, {
    name: 'Discord',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/discord.svg',
    mpid: "50d9eda4-0a05-4c15-a71b-9dc62c172733"
  }, {
    name: 'Notion',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/notion.svg',
    mpid: "a802f0af-af9c-41fc-9d26-9abf30ed08c5"
  }, {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/figma.svg',
    mpid: "53e7c955-d1da-4e5d-a2c3-dae04f280957"
  }, {
    name: 'Canva',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/canva.svg',
    mpid: "58debb16-30c9-499e-80b6-b05863b370fe"
  }, {
    name: 'Trello',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/trello.svg',
    mpid: "4e522f0b-6ac4-4632-8bad-7d71977e207e"
  }, {
    name: 'Asana',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/asana.svg',
    mpid: "8a170aa1-05d8-4146-8f79-ec22aa807d52"
  }, {
    name: 'Salesforce',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/salesforce.svg',
    mpid: "b4c02359-1d5a-44fd-91b0-8f0d3ecb3fd1"
  }, {
    name: 'HubSpot',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/hubspot.svg',
    mpid: "9e6d8385-87c4-46d5-b6fb-32767c83858f"
  }, {
    name: 'Mailchimp',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/mailchimp.svg',
    mpid: "0889ada1-f4d4-40eb-8920-e78385ef5202"
  }, {
    name: 'Twitch',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/twitch.svg',
    mpid: "5e67570e-74a2-4455-a62b-f6869141337b"
  }, {
    name: 'Reddit',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/reddit.svg',
    mpid: "4458fbdf-aa9d-4f84-906b-6074e66005d0"
  }, {
    name: 'Pinterest',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/pinterest.svg',
    mpid: "a9b51d88-2537-4784-a798-d4048d5c05f4"
  }] as any[];

  // Create transform values for scroll-based animation
  const firstRowX = useTransform(motionScrollY, [0, 1000], [0, -200]);
  const secondRowX = useTransform(motionScrollY, [0, 1000], [0, 200]);
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
            x: firstRowX
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
              <div className="flex w-fit gap-4" style={{
              transform: 'translateX(68.88px)'
            }} data-magicpath-id="10" data-magicpath-path="CustomerCarouselSection.tsx">
                {brands.map((brand, index) => <motion.div key={`${brand.name}-${index}`} className="flex h-24 w-24 flex-none flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-[#fcfcf9] lg:h-32 lg:w-32 hover:shadow-lg transition-all duration-300" whileHover={{
                scale: 1.05,
                y: -2
              }} transition={{
                duration: 0.2
              }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="CustomerCarouselSection.tsx">
                    <div className="h-12 w-12 lg:h-16 lg:w-16" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="CustomerCarouselSection.tsx">
                      <img alt={`${brand.name} app icon`} className="block h-12 w-12 lg:h-16 lg:w-16 object-contain filter brightness-0" loading="lazy" src={brand.logo} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknown" data-magicpath-id="13" data-magicpath-path="CustomerCarouselSection.tsx" />
                    </div>
                    <div className="font-display text-[12px] lg:text-[16px] text-gray-700 font-medium" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="14" data-magicpath-path="CustomerCarouselSection.tsx">
                      {brand.name}
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Second row of logos - moves right to left on scroll down */}
            <motion.div className="flex w-fit flex-nowrap" style={{
            x: secondRowX
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
              <div className="flex w-fit gap-4" style={{
              transform: 'translateX(-68.88px)'
            }} data-magicpath-id="16" data-magicpath-path="CustomerCarouselSection.tsx">
                {secondRowBrands.map((brand, index) => <motion.div key={`${brand.name}-${index}`} className="flex h-24 w-24 flex-none flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-[#fcfcf9] lg:h-32 lg:w-32 hover:shadow-lg transition-all duration-300" whileHover={{
                scale: 1.05,
                y: -2
              }} transition={{
                duration: 0.2
              }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="CustomerCarouselSection.tsx">
                    <div className="h-12 w-12 lg:h-16 lg:w-16" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="CustomerCarouselSection.tsx">
                      <img alt={`${brand.name} app icon`} className="block h-12 w-12 lg:h-16 lg:w-16 object-contain filter brightness-0" loading="lazy" src={brand.logo} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknown" data-magicpath-id="19" data-magicpath-path="CustomerCarouselSection.tsx" />
                    </div>
                    <div className="font-display text-[12px] lg:text-[16px] text-gray-700 font-medium" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="20" data-magicpath-path="CustomerCarouselSection.tsx">
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