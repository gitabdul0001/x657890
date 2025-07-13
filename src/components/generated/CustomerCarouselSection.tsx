import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
const CustomerCarouselSection: React.FC = () => {
  const customers = [{
    name: 'Slack',
    logo: '💬',
    mpid: "cd802b6a-962a-4212-990f-8321a79730e2"
  }, {
    name: 'Notion',
    logo: '📝',
    mpid: "3210ea28-857c-495e-880a-8f3e1ded0f4d"
  }, {
    name: 'Figma',
    logo: '🎨',
    mpid: "95c01dc1-c471-4c9c-b5ea-86fcbf209fe5"
  }, {
    name: 'GitHub',
    logo: '🐙',
    mpid: "4e12d315-23e6-4f3f-aa52-16f76874b263"
  }, {
    name: 'Discord',
    logo: '🎮',
    mpid: "d189a9e1-a327-4e8f-8127-2189c44ac3dc"
  }, {
    name: 'Spotify',
    logo: '🎵',
    mpid: "f29001e1-c0a8-4fd6-96b8-5f802c0b7b77"
  }, {
    name: 'Netflix',
    logo: '🎬',
    mpid: "5d4e5d5e-8523-4696-b041-b92aebff6111"
  }, {
    name: 'Airbnb',
    logo: '🏠',
    mpid: "26bed602-bf49-4d13-af13-8d989120839f"
  }, {
    name: 'Uber',
    logo: '🚗',
    mpid: "f17ad23a-47f8-4492-bba7-7e311b12e15c"
  }, {
    name: 'Stripe',
    logo: '💳',
    mpid: "6d9110b3-09ab-4038-a19d-535b79e47573"
  }, {
    name: 'Zoom',
    logo: '📹',
    mpid: "36a18aeb-935b-45e0-a3df-d400dc6e0be6"
  }, {
    name: 'Dropbox',
    logo: '📦',
    mpid: "be8bbd5e-3105-4a63-99b3-487f3f7d1b8d"
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