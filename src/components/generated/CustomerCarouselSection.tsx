"use client";

import React from 'react';
import { motion } from 'framer-motion';
const CustomerCarouselSection: React.FC = () => {
  const brands = [{
    name: 'Microsoft',
    logo: 'https://logo.clearbit.com/microsoft.com',
    mpid: "c72e8cbb-1c98-400c-8327-1ea84ca20254"
  }, {
    name: 'Google',
    logo: 'https://logo.clearbit.com/google.com',
    mpid: "c02c0707-64cc-480e-b930-1c25022f8d57"
  }, {
    name: 'Apple',
    logo: 'https://logo.clearbit.com/apple.com',
    mpid: "e22531d5-aee0-4638-b11c-a826c9b9f7bf"
  }, {
    name: 'Amazon',
    logo: 'https://logo.clearbit.com/amazon.com',
    mpid: "5fa3b11c-6d89-45d8-89e4-d3e27c2e3133"
  }, {
    name: 'Netflix',
    logo: 'https://logo.clearbit.com/netflix.com',
    mpid: "96924b20-2e82-43e1-aa9d-005b9fd12d26"
  }, {
    name: 'Spotify',
    logo: 'https://logo.clearbit.com/spotify.com',
    mpid: "f9f3f52a-c376-44d3-aa69-85674d427b59"
  }, {
    name: 'Slack',
    logo: 'https://logo.clearbit.com/slack.com',
    mpid: "7e2f42d5-85cb-4cc6-bbe6-4d4a39ba4fd8"
  }, {
    name: 'GitHub',
    logo: 'https://logo.clearbit.com/github.com',
    mpid: "577282d1-dd61-4600-9536-f197efd4851d"
  }, {
    name: 'Zoom',
    logo: 'https://logo.clearbit.com/zoom.us',
    mpid: "ae2d4b11-a87f-4015-91a0-53f66dd0b5fc"
  }, {
    name: 'Dropbox',
    logo: 'https://logo.clearbit.com/dropbox.com',
    mpid: "919c059c-6790-482a-8db2-c9704fa59b36"
  }, {
    name: 'Adobe',
    logo: 'https://logo.clearbit.com/adobe.com',
    mpid: "2627e112-1817-4c92-9e1e-cea6b914d236"
  }, {
    name: 'Tesla',
    logo: 'https://logo.clearbit.com/tesla.com',
    mpid: "e1a34fe8-9866-4c91-93a0-55c504a7b7bc"
  }, {
    name: 'Airbnb',
    logo: 'https://logo.clearbit.com/airbnb.com',
    mpid: "a9c541aa-0e5a-4e27-b384-5a4d4fed743e"
  }, {
    name: 'Uber',
    logo: 'https://logo.clearbit.com/uber.com',
    mpid: "fb056579-cc5a-4fc0-b9f0-6123845a63ca"
  }, {
    name: 'Twitter',
    logo: 'https://logo.clearbit.com/twitter.com',
    mpid: "0788fa6d-ad94-4cc8-8752-edeaed4265b3"
  }] as any[];
  const secondRowBrands = [{
    name: 'Meta',
    logo: 'https://logo.clearbit.com/meta.com',
    mpid: "8212b237-f365-47f2-911c-bf140a9d5852"
  }, {
    name: 'LinkedIn',
    logo: 'https://logo.clearbit.com/linkedin.com',
    mpid: "608c8ccf-7036-4160-9e53-da5bd5a33ce0"
  }, {
    name: 'PayPal',
    logo: 'https://logo.clearbit.com/paypal.com',
    mpid: "5646e8b5-bdb5-46d1-bb8b-119bbd01e24a"
  }, {
    name: 'Stripe',
    logo: 'https://logo.clearbit.com/stripe.com',
    mpid: "5be7818a-e351-4603-80a1-5aa2addcd074"
  }, {
    name: 'Shopify',
    logo: 'https://logo.clearbit.com/shopify.com',
    mpid: "4719534c-01e7-498b-b157-d84e4743b3fe"
  }, {
    name: 'Discord',
    logo: 'https://logo.clearbit.com/discord.com',
    mpid: "92c491f4-67e5-4226-a7bd-c505b396f677"
  }, {
    name: 'Notion',
    logo: 'https://logo.clearbit.com/notion.so',
    mpid: "d342323d-6398-4a2c-b3aa-c9a7e9148982"
  }, {
    name: 'Figma',
    logo: 'https://logo.clearbit.com/figma.com',
    mpid: "7f299e42-e01b-40b9-a7f1-833d909c7e6a"
  }, {
    name: 'Canva',
    logo: 'https://logo.clearbit.com/canva.com',
    mpid: "f94e646b-0483-46c2-b54f-35c08f901bfe"
  }, {
    name: 'Trello',
    logo: 'https://logo.clearbit.com/trello.com',
    mpid: "f7a4e67f-6336-4c99-8128-12b06757839d"
  }, {
    name: 'Asana',
    logo: 'https://logo.clearbit.com/asana.com',
    mpid: "8832f73e-5ee8-4290-b3a4-1faeb1407b30"
  }, {
    name: 'Salesforce',
    logo: 'https://logo.clearbit.com/salesforce.com',
    mpid: "9962ec67-5253-4b72-8a4e-2408f98232fa"
  }, {
    name: 'HubSpot',
    logo: 'https://logo.clearbit.com/hubspot.com',
    mpid: "55d5fdc7-caa8-4a5d-afed-31a9975686fb"
  }, {
    name: 'Mailchimp',
    logo: 'https://logo.clearbit.com/mailchimp.com',
    mpid: "619d21eb-6455-4230-8b94-a29278e35306"
  }] as any[];
  return <section className="py-24 px-6 bg-gray-50" data-magicpath-id="0" data-magicpath-path="CustomerCarouselSection.tsx">
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
            <span className="text-2xl transform scale-x-[-1]" data-magicpath-id="4" data-magicpath-path="CustomerCarouselSection.tsx">⟨</span>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 tracking-wide uppercase" data-magicpath-id="5" data-magicpath-path="CustomerCarouselSection.tsx">
              Brands that love Reaxo
            </h2>
            <img src="https://www.todesktop.com/_app/immutable/assets/pointing-arrow.hZqSxAwL.svg" alt="pointing arrow" className="ml-3 inline translate-y-2 transform scale-x-[-1] w-6 h-6" data-magicpath-id="6" data-magicpath-path="CustomerCarouselSection.tsx" />
          </div>
        </motion.div>

        {/* Brand Grid */}
        <div className="relative overflow-hidden" data-magicpath-id="7" data-magicpath-path="CustomerCarouselSection.tsx">
          <div className="relative flex w-full flex-col items-center gap-4" data-magicpath-id="8" data-magicpath-path="CustomerCarouselSection.tsx">
            {/* First row of logos */}
            <motion.div className="flex w-fit flex-nowrap" initial={{
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
                {brands.map((brand, index) => <motion.div key={brand.name} className="flex h-24 w-24 flex-none flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white lg:h-32 lg:w-32 hover:shadow-lg transition-all duration-300" whileHover={{
                scale: 1.05,
                y: -2
              }} transition={{
                duration: 0.2
              }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="CustomerCarouselSection.tsx">
                    <div className="h-12 w-12 lg:h-16 lg:w-16" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="CustomerCarouselSection.tsx">
                      <img alt={`${brand.name} app icon`} className="block h-12 w-12 lg:h-16 lg:w-16 object-contain" loading="lazy" src={brand.logo} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:string" data-magicpath-id="13" data-magicpath-path="CustomerCarouselSection.tsx" />
                    </div>
                    <div className="font-display text-[12px] lg:text-[16px] text-gray-700 font-medium" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:string" data-magicpath-id="14" data-magicpath-path="CustomerCarouselSection.tsx">
                      {brand.name}
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Second row of logos */}
            <motion.div className="flex w-fit flex-nowrap" initial={{
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
                {secondRowBrands.map((brand, index) => <motion.div key={brand.name} className="flex h-24 w-24 flex-none flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white lg:h-32 lg:w-32 hover:shadow-lg transition-all duration-300" whileHover={{
                scale: 1.05,
                y: -2
              }} transition={{
                duration: 0.2
              }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="CustomerCarouselSection.tsx">
                    <div className="h-12 w-12 lg:h-16 lg:w-16" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="CustomerCarouselSection.tsx">
                      <img alt={`${brand.name} app icon`} className="block h-12 w-12 lg:h-16 lg:w-16 object-contain" loading="lazy" src={brand.logo} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:string" data-magicpath-id="19" data-magicpath-path="CustomerCarouselSection.tsx" />
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