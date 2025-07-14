import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
const CustomerCarouselSection: React.FC = () => {
  const customers = [{
    name: 'Slack',
    logo: '💬',
    mpid: "02bdfd9a-d44d-4a2c-8a05-a6365ab30ad3"
  }, {
    name: 'Notion',
    logo: '📝',
    mpid: "645b7e33-98dd-45c8-90c6-5242f11c4d0b"
  }, {
    name: 'Figma',
    logo: '🎨',
    mpid: "7a7e6733-a8f2-41bc-b773-fcc7ecec079a"
  }, {
    name: 'GitHub',
    logo: '🐙',
    mpid: "579ac614-eb4c-47e2-a7c2-46fb26a88df2"
  }, {
    name: 'Discord',
    logo: '🎮',
    mpid: "36cead58-b888-4340-bd0e-a281a4401792"
  }, {
    name: 'Spotify',
    logo: '🎵',
    mpid: "28fa3bcc-7f0e-4cb2-a148-8c11c447ef5f"
  }, {
    name: 'Netflix',
    logo: '🎬',
    mpid: "c6f3df20-1434-4a4a-b1d0-d9e889816d03"
  }, {
    name: 'Airbnb',
    logo: '🏠',
    mpid: "642e8829-062e-4cb0-bc17-cefa9a2de9a3"
  }, {
    name: 'Uber',
    logo: '🚗',
    mpid: "90166cdf-4e25-427c-abe1-1643427e9720"
  }, {
    name: 'Stripe',
    logo: '💳',
    mpid: "6329e4d4-66ca-4516-8f8f-82994efa490d"
  }, {
    name: 'Zoom',
    logo: '📹',
    mpid: "309a5c9e-cfc7-4e1d-894e-026b462aecc1"
  }, {
    name: 'Dropbox',
    logo: '📦',
    mpid: "4e2cde59-9d13-4d3c-937d-52a865d3fdb1"
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