import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
const CustomerCarouselSection: React.FC = () => {
  const customers = [{
    name: 'Slack',
    logo: '💬',
    mpid: "9523efd0-9f09-4376-9bcc-f9fcd5fd0419"
  }, {
    name: 'Notion',
    logo: '📝',
    mpid: "7b2b190e-e835-4ef8-adfa-70e1e2deff34"
  }, {
    name: 'Figma',
    logo: '🎨',
    mpid: "24f1c53d-c700-4d1d-9ab2-28a5b6d07fde"
  }, {
    name: 'GitHub',
    logo: '🐙',
    mpid: "4756610b-740f-42e4-86cd-4f7d66fc64ce"
  }, {
    name: 'Discord',
    logo: '🎮',
    mpid: "c24382e9-5b72-4871-87d6-687c0c8496e1"
  }, {
    name: 'Spotify',
    logo: '🎵',
    mpid: "7e551cff-0a02-4e3e-96cf-919191e2dd35"
  }, {
    name: 'Netflix',
    logo: '🎬',
    mpid: "d5dea6bf-4805-4240-bcfc-f50ab0d5ff2d"
  }, {
    name: 'Airbnb',
    logo: '🏠',
    mpid: "89e0474a-f688-4767-8f0f-765e5e6fee7b"
  }, {
    name: 'Uber',
    logo: '🚗',
    mpid: "dd69eeea-88b5-47e3-a509-8f25abdc911b"
  }, {
    name: 'Stripe',
    logo: '💳',
    mpid: "539feccc-ab9e-401a-8187-f2dce22fd31f"
  }, {
    name: 'Zoom',
    logo: '📹',
    mpid: "b2c5a520-fdef-4068-b28e-8b0a53cd9e91"
  }, {
    name: 'Dropbox',
    logo: '📦',
    mpid: "8550e0c6-b3e2-42e4-8209-54445ad054e0"
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