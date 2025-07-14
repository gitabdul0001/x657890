import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
const CustomerCarouselSection: React.FC = () => {
  const customers = [{
    name: 'Slack',
    logo: '💬',
    mpid: "819a151d-f2c4-4df4-b5b8-eea9b745c185"
  }, {
    name: 'Notion',
    logo: '📝',
    mpid: "d24f4e48-cefa-4b9d-8cc5-08ece584eca3"
  }, {
    name: 'Figma',
    logo: '🎨',
    mpid: "312e8413-3077-4370-b9ef-13429377d6aa"
  }, {
    name: 'GitHub',
    logo: '🐙',
    mpid: "beb0a765-a506-4895-98a8-c21beee86104"
  }, {
    name: 'Discord',
    logo: '🎮',
    mpid: "c6aefe28-183b-40a5-a6fd-b08e6a0715a4"
  }, {
    name: 'Spotify',
    logo: '🎵',
    mpid: "f74da2ff-4178-45a9-86be-779b6e585088"
  }, {
    name: 'Netflix',
    logo: '🎬',
    mpid: "bbba9288-db8b-4b8f-8732-c274000b5ab7"
  }, {
    name: 'Airbnb',
    logo: '🏠',
    mpid: "d4d7505f-dbf3-4657-b4d2-132a3766e48f"
  }, {
    name: 'Uber',
    logo: '🚗',
    mpid: "c63a91bc-3fc1-4e32-ad1c-d1498c6ef4c9"
  }, {
    name: 'Stripe',
    logo: '💳',
    mpid: "991c54c3-fed1-4134-92f2-139b4416ff2d"
  }, {
    name: 'Zoom',
    logo: '📹',
    mpid: "e6dee203-a064-4b26-b7bf-1a40489b1439"
  }, {
    name: 'Dropbox',
    logo: '📦',
    mpid: "ccaa6cc7-6859-4a21-815f-b24a6eed73e4"
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