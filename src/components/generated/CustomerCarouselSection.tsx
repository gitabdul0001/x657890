"use client";

import React from 'react';
import { motion } from 'framer-motion';
const CustomerCarouselSection: React.FC = () => {
  const brands = [{
    name: 'Microsoft',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/microsoft.svg',
    mpid: "3242950f-2fb2-4865-89af-dc63a67a1237"
  }, {
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/google.svg',
    mpid: "e5ab0a9a-6cbe-4a1e-8d7d-6a7122e92045"
  }, {
    name: 'Apple',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/apple.svg',
    mpid: "4e3ab92d-98b5-407f-a284-f0417fa2ed86"
  }, {
    name: 'Amazon',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/amazon.svg',
    mpid: "ee2dcd99-a7de-49e4-9946-8ae3008fb389"
  }, {
    name: 'Netflix',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/netflix.svg',
    mpid: "d05f38b0-3374-4e05-868d-b4b83f2cf447"
  }, {
    name: 'Spotify',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/spotify.svg',
    mpid: "49435873-23a3-4193-b8a1-38c739bce66b"
  }, {
    name: 'Slack',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/slack.svg',
    mpid: "b7906f61-285c-473e-b3cf-222ca3c7f8e6"
  }, {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/github.svg',
    mpid: "a3904fe4-7909-4e6c-80d6-163ee38e30e0"
  }, {
    name: 'Zoom',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/zoom.svg',
    mpid: "50b47b11-8947-4ccd-8f2d-c137e4a25c35"
  }, {
    name: 'Dropbox',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/dropbox.svg',
    mpid: "860abcd7-8b25-4cac-84e3-3904158d6b5f"
  }, {
    name: 'Adobe',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/adobe.svg',
    mpid: "8fca150d-c867-42c0-97e5-7c66b396cea6"
  }, {
    name: 'Tesla',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/tesla.svg',
    mpid: "835592c5-f71b-4470-8b07-e84f1974cef3"
  }, {
    name: 'Airbnb',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/airbnb.svg',
    mpid: "034cd32c-37de-4db5-9b3b-c43a5137a357"
  }, {
    name: 'Uber',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/uber.svg',
    mpid: "fde37ccc-7597-4a20-ab23-728b430f90ec"
  }, {
    name: 'Twitter',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/twitter.svg',
    mpid: "925d5843-74ca-4c38-8ae4-c3417f400397"
  }] as any[];
  const secondRowBrands = [{
    name: 'Meta',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/meta.svg',
    mpid: "fb995a15-d49e-4429-806d-086800ac0962"
  }, {
    name: 'LinkedIn',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/linkedin.svg',
    mpid: "8b479661-098e-4b24-a6ca-904aa2e5e26b"
  }, {
    name: 'PayPal',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/paypal.svg',
    mpid: "f7423cf7-404c-4934-a043-213f7a9b6e3e"
  }, {
    name: 'Stripe',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/stripe.svg',
    mpid: "1cf4f514-81b7-4085-9be5-9078a7f8fa8f"
  }, {
    name: 'Shopify',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/shopify.svg',
    mpid: "ccce1a9a-2339-49ab-9673-e486adc7f777"
  }, {
    name: 'Discord',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/discord.svg',
    mpid: "cb1de3d2-187b-4257-ba3f-1223e7f360e9"
  }, {
    name: 'Notion',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/notion.svg',
    mpid: "c4eb6198-0b91-4fd2-bedb-e83fc344348b"
  }, {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/figma.svg',
    mpid: "da18de3c-5ab1-401d-a68a-5c765c8a0f07"
  }, {
    name: 'Canva',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/canva.svg',
    mpid: "597057f4-6953-42bf-9381-38189827a8ee"
  }, {
    name: 'Trello',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/trello.svg',
    mpid: "1031b199-2e97-446c-b4bd-ba078e0d2829"
  }, {
    name: 'Asana',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/asana.svg',
    mpid: "e230192c-2fea-456a-b53f-bd3e3df47614"
  }, {
    name: 'Salesforce',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/salesforce.svg',
    mpid: "2b206d92-0b34-46eb-ae1f-8ae69bc4e1df"
  }, {
    name: 'HubSpot',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/hubspot.svg',
    mpid: "6b297c5e-3f8f-4d9a-ba47-f9eda78867f7"
  }, {
    name: 'Mailchimp',
    logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/mailchimp.svg',
    mpid: "e38c3950-f2d5-402e-87cd-2f7cbbdc2ad9"
  }] as any[];
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
                {brands.map((brand, index) => <motion.div key={brand.name} className="flex h-24 w-24 flex-none flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-[#fcfcf9] lg:h-32 lg:w-32 hover:shadow-lg transition-all duration-300" whileHover={{
                scale: 1.05,
                y: -2
              }} transition={{
                duration: 0.2
              }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="CustomerCarouselSection.tsx">
                    <div className="h-12 w-12 lg:h-16 lg:w-16" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="CustomerCarouselSection.tsx">
                      <img alt={`${brand.name} app icon`} className="block h-12 w-12 lg:h-16 lg:w-16 object-contain" loading="lazy" src={brand.logo} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknown" data-magicpath-id="13" data-magicpath-path="CustomerCarouselSection.tsx" />
                    </div>
                    <div className="font-display text-[12px] lg:text-[16px] text-gray-700 font-medium" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="14" data-magicpath-path="CustomerCarouselSection.tsx">
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
                {secondRowBrands.map((brand, index) => <motion.div key={brand.name} className="flex h-24 w-24 flex-none flex-col items-center justify-center gap-2 rounded-xl border border-gray-300 bg-[#fcfcf9] lg:h-32 lg:w-32 hover:shadow-lg transition-all duration-300" whileHover={{
                scale: 1.05,
                y: -2
              }} transition={{
                duration: 0.2
              }} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="CustomerCarouselSection.tsx">
                    <div className="h-12 w-12 lg:h-16 lg:w-16" data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="CustomerCarouselSection.tsx">
                      <img alt={`${brand.name} app icon`} className="block h-12 w-12 lg:h-16 lg:w-16 object-contain" loading="lazy" src={brand.logo} data-magicpath-uuid={(brand as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknown" data-magicpath-id="19" data-magicpath-path="CustomerCarouselSection.tsx" />
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