"use client";

import React from 'react';
import { motion } from 'framer-motion';
const CustomerCarouselSection: React.FC = () => {
  const brands = [{
    name: 'Microsoft',
    logo: 'https://logo.clearbit.com/microsoft.com',
    mpid: "324ee21c-f291-468b-a161-5876d456d73e"
  }, {
    name: 'Google',
    logo: 'https://logo.clearbit.com/google.com',
    mpid: "ce1eed54-de66-4c1b-821b-96319deb6189"
  }, {
    name: 'Apple',
    logo: 'https://logo.clearbit.com/apple.com',
    mpid: "56d9fc58-4877-4c3b-93ea-86656750d0a4"
  }, {
    name: 'Amazon',
    logo: 'https://logo.clearbit.com/amazon.com',
    mpid: "412fdd11-6825-4f5c-a5c4-8bd9cd0aef3f"
  }, {
    name: 'Netflix',
    logo: 'https://logo.clearbit.com/netflix.com',
    mpid: "60f30624-8742-4358-802a-8a45080e2157"
  }, {
    name: 'Spotify',
    logo: 'https://logo.clearbit.com/spotify.com',
    mpid: "80528bbe-e24a-4189-9b8f-18fad1219cb5"
  }, {
    name: 'Slack',
    logo: 'https://logo.clearbit.com/slack.com',
    mpid: "44ab93c6-7e00-43d3-8d12-bda34726a8ed"
  }, {
    name: 'GitHub',
    logo: 'https://logo.clearbit.com/github.com',
    mpid: "84e1a09c-a0b3-48e1-991d-9a62ea2b5d5b"
  }, {
    name: 'Zoom',
    logo: 'https://logo.clearbit.com/zoom.us',
    mpid: "37f2f626-0137-4062-a1d5-083384eb2bed"
  }, {
    name: 'Dropbox',
    logo: 'https://logo.clearbit.com/dropbox.com',
    mpid: "5da6bce9-565f-4169-b71c-00aa74fdca83"
  }, {
    name: 'Adobe',
    logo: 'https://logo.clearbit.com/adobe.com',
    mpid: "c6a511a1-3127-4634-ba57-7a2a984100e3"
  }, {
    name: 'Tesla',
    logo: 'https://logo.clearbit.com/tesla.com',
    mpid: "e669e9b3-cbfa-481c-bcc4-9234a807dcf1"
  }, {
    name: 'Airbnb',
    logo: 'https://logo.clearbit.com/airbnb.com',
    mpid: "e53ad697-5b11-4dc7-b1f3-af3d13b8bc34"
  }, {
    name: 'Uber',
    logo: 'https://logo.clearbit.com/uber.com',
    mpid: "72db4f6c-34d7-41f2-9b36-0b7e6217b759"
  }, {
    name: 'Twitter',
    logo: 'https://logo.clearbit.com/twitter.com',
    mpid: "5f073c5f-c6b1-411d-9ee8-411eea398fff"
  }] as any[];
  const secondRowBrands = [{
    name: 'Meta',
    logo: 'https://logo.clearbit.com/meta.com',
    mpid: "467d422a-a189-48f8-b97d-47c5ee69ff89"
  }, {
    name: 'LinkedIn',
    logo: 'https://logo.clearbit.com/linkedin.com',
    mpid: "6f563700-942e-4a78-8695-b21f2e9faf10"
  }, {
    name: 'PayPal',
    logo: 'https://logo.clearbit.com/paypal.com',
    mpid: "e2893cf1-ff19-4e44-b26c-e0384c720353"
  }, {
    name: 'Stripe',
    logo: 'https://logo.clearbit.com/stripe.com',
    mpid: "4892585f-eb08-478f-8496-bdc45e6923cf"
  }, {
    name: 'Shopify',
    logo: 'https://logo.clearbit.com/shopify.com',
    mpid: "a025e50a-22ab-4c14-877b-b89840328424"
  }, {
    name: 'Discord',
    logo: 'https://logo.clearbit.com/discord.com',
    mpid: "b336f801-6cea-4c5a-b555-5e608245dfa7"
  }, {
    name: 'Notion',
    logo: 'https://logo.clearbit.com/notion.so',
    mpid: "a817b906-5ed5-47f3-976c-9a58c9871a7d"
  }, {
    name: 'Figma',
    logo: 'https://logo.clearbit.com/figma.com',
    mpid: "5dc38dbd-1032-47d3-9f9d-ae93c983e166"
  }, {
    name: 'Canva',
    logo: 'https://logo.clearbit.com/canva.com',
    mpid: "9cb6d8b5-9b12-4204-993f-a1d27d14cd2c"
  }, {
    name: 'Trello',
    logo: 'https://logo.clearbit.com/trello.com',
    mpid: "d217ba3f-7b4f-456e-accd-b5d35bb64d8f"
  }, {
    name: 'Asana',
    logo: 'https://logo.clearbit.com/asana.com',
    mpid: "b4fbe5e9-c509-42b9-ab13-946d4604557d"
  }, {
    name: 'Salesforce',
    logo: 'https://logo.clearbit.com/salesforce.com',
    mpid: "ae101d16-8c45-4547-8982-8903649f16b2"
  }, {
    name: 'HubSpot',
    logo: 'https://logo.clearbit.com/hubspot.com',
    mpid: "d14e8c64-e1a0-4374-99cf-e7e28ca65c1c"
  }, {
    name: 'Mailchimp',
    logo: 'https://logo.clearbit.com/mailchimp.com',
    mpid: "630bcb14-f16f-449d-943a-4aeb62b59547"
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