import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
const CustomerCarouselSection: React.FC = () => {
  const customers = [{
    name: 'Slack',
    logo: '💬',
    mpid: "c6681341-b313-421e-9010-15e7dcc7d8ef"
  }, {
    name: 'Notion',
    logo: '📝',
    mpid: "3a5473b1-3245-4f9f-b707-49a45a444c68"
  }, {
    name: 'Figma',
    logo: '🎨',
    mpid: "4dcb4288-e4d4-40c4-a3a8-4e43c7fd553b"
  }, {
    name: 'GitHub',
    logo: '🐙',
    mpid: "1d4e814d-85ee-4b15-afde-f1a25eae4291"
  }, {
    name: 'Discord',
    logo: '🎮',
    mpid: "4aee469b-5393-4eac-a4fc-6d1c13c8586f"
  }, {
    name: 'Spotify',
    logo: '🎵',
    mpid: "9f97d47a-e5bd-4146-83b6-c4bebfb1a24f"
  }, {
    name: 'Netflix',
    logo: '🎬',
    mpid: "9554bd75-2f87-42ea-910a-58afaf92d8b2"
  }, {
    name: 'Airbnb',
    logo: '🏠',
    mpid: "2a1cf627-c7d9-48aa-83af-2d675e3c6706"
  }, {
    name: 'Uber',
    logo: '🚗',
    mpid: "901a0b7d-3769-48ce-831f-9ab0956f0145"
  }, {
    name: 'Stripe',
    logo: '💳',
    mpid: "495a4932-86e2-4add-acc1-da8a3f1cee1d"
  }, {
    name: 'Zoom',
    logo: '📹',
    mpid: "e477586f-3305-4d81-95f8-6709fc00403a"
  }, {
    name: 'Dropbox',
    logo: '📦',
    mpid: "ba7f3018-aee3-4112-83a0-78763599dd93"
  }] as any[];

  // Duplicate for seamless infinite scroll
  const duplicatedCustomers = [...customers, ...customers];
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
            <ArrowRight className="w-6 h-6 text-blue-600" data-magicpath-id="4" data-magicpath-path="CustomerCarouselSection.tsx" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900" data-magicpath-id="5" data-magicpath-path="CustomerCarouselSection.tsx">
              Trusted by Industry Leaders
            </h2>
            <ArrowRight className="w-6 h-6 text-blue-600" data-magicpath-id="6" data-magicpath-path="CustomerCarouselSection.tsx" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-magicpath-id="7" data-magicpath-path="CustomerCarouselSection.tsx">
            Join thousands of companies that rely on Reaxo to build exceptional products
          </p>
        </motion.div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative overflow-hidden" data-magicpath-id="8" data-magicpath-path="CustomerCarouselSection.tsx">
          <motion.div className="flex gap-8" animate={{
          x: [0, -50 * customers.length]
        }} transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }} whileHover={{
          animationPlayState: 'paused'
        }} data-magicpath-id="9" data-magicpath-path="CustomerCarouselSection.tsx">
            {duplicatedCustomers.map((customer, index) => <motion.div key={`${customer.name}-${index}`} className="flex-shrink-0 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 min-w-[200px] group cursor-pointer" whileHover={{
            scale: 1.05,
            y: -5
          }} data-magicpath-uuid={(customer as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="CustomerCarouselSection.tsx">
                <div className="text-center" data-magicpath-uuid={(customer as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="CustomerCarouselSection.tsx">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" data-magicpath-uuid={(customer as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknown" data-magicpath-id="12" data-magicpath-path="CustomerCarouselSection.tsx">
                    {customer.logo}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors" data-magicpath-uuid={(customer as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="13" data-magicpath-path="CustomerCarouselSection.tsx">
                    {customer.name}
                  </h3>
                </div>
              </motion.div>)}
          </motion.div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" data-magicpath-id="14" data-magicpath-path="CustomerCarouselSection.tsx" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" data-magicpath-id="15" data-magicpath-path="CustomerCarouselSection.tsx" />
        </div>

        {/* Bottom CTA */}
        <motion.div className="text-center mt-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }} viewport={{
        once: true
      }} data-magicpath-id="16" data-magicpath-path="CustomerCarouselSection.tsx">
          <p className="text-lg text-gray-600 mb-6" data-magicpath-id="17" data-magicpath-path="CustomerCarouselSection.tsx">
            Ready to join them?
          </p>
          <motion.button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} data-magicpath-id="18" data-magicpath-path="CustomerCarouselSection.tsx">
            Start your free trial
          </motion.button>
        </motion.div>
      </div>
    </section>;
};
export default CustomerCarouselSection;