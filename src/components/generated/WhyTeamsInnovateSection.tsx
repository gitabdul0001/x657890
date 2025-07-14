import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
const WhyTeamsInnovateSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Calculate scroll progress when section is in view
        if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
          const scrollProgress = (windowHeight - sectionTop) / (windowHeight + sectionHeight);
          setScrollY(scrollProgress);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logo data for the scrolling rows
  const topRowLogos = ['Microsoft', 'Google', 'Apple', 'Amazon', 'Meta', 'Netflix', 'Tesla', 'Spotify'];
  const bottomRowLogos = ['Adobe', 'Salesforce', 'Oracle', 'IBM', 'Intel', 'Nvidia', 'PayPal', 'Uber'];
  return <section ref={sectionRef} className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden" data-magicpath-id="0" data-magicpath-path="WhyTeamsInnovateSection.tsx">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30" data-magicpath-id="1" data-magicpath-path="WhyTeamsInnovateSection.tsx">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-xl" data-magicpath-id="2" data-magicpath-path="WhyTeamsInnovateSection.tsx"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full blur-xl" data-magicpath-id="3" data-magicpath-path="WhyTeamsInnovateSection.tsx"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto" data-magicpath-id="4" data-magicpath-path="WhyTeamsInnovateSection.tsx">
        {/* Header */}
        <div className="text-center mb-16" data-magicpath-id="5" data-magicpath-path="WhyTeamsInnovateSection.tsx">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" data-magicpath-id="6" data-magicpath-path="WhyTeamsInnovateSection.tsx">
            Trusted by teams at
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-magicpath-id="7" data-magicpath-path="WhyTeamsInnovateSection.tsx">
            Join thousands of innovative companies already using our platform
          </p>
        </div>

        {/* Scrolling Logo Rows */}
        <div className="space-y-8" data-magicpath-id="8" data-magicpath-path="WhyTeamsInnovateSection.tsx">
          {/* Top Row - Scrolls Left to Right */}
          <div className="relative overflow-hidden" data-magicpath-id="9" data-magicpath-path="WhyTeamsInnovateSection.tsx">
            <motion.div className="flex space-x-12 whitespace-nowrap" style={{
            transform: `translateX(${scrollY * 200 - 100}px)`
          }} data-magicpath-id="10" data-magicpath-path="WhyTeamsInnovateSection.tsx">
              {[...topRowLogos, ...topRowLogos].map((logo, index) => <div key={index} className="flex-shrink-0 px-8 py-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow" data-magicpath-id="11" data-magicpath-path="WhyTeamsInnovateSection.tsx">
                  <span className="text-2xl font-semibold text-gray-700" data-magicpath-id="12" data-magicpath-path="WhyTeamsInnovateSection.tsx">{logo}</span>
                </div>)}
            </motion.div>
          </div>

          {/* Bottom Row - Scrolls Right to Left */}
          <div className="relative overflow-hidden" data-magicpath-id="13" data-magicpath-path="WhyTeamsInnovateSection.tsx">
            <motion.div className="flex space-x-12 whitespace-nowrap" style={{
            transform: `translateX(${-scrollY * 200 + 100}px)`
          }} data-magicpath-id="14" data-magicpath-path="WhyTeamsInnovateSection.tsx">
              {[...bottomRowLogos, ...bottomRowLogos].map((logo, index) => <div key={index} className="flex-shrink-0 px-8 py-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow" data-magicpath-id="15" data-magicpath-path="WhyTeamsInnovateSection.tsx">
                  <span className="text-2xl font-semibold text-gray-700" data-magicpath-id="16" data-magicpath-path="WhyTeamsInnovateSection.tsx">{logo}</span>
                </div>)}
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-magicpath-id="17" data-magicpath-path="WhyTeamsInnovateSection.tsx">
          <motion.button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} data-magicpath-id="18" data-magicpath-path="WhyTeamsInnovateSection.tsx">
            Join these companies
          </motion.button>
        </div>
      </div>
    </section>;
};
export default WhyTeamsInnovateSection;