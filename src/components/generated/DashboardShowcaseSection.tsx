import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
const DashboardShowcaseSection: React.FC = () => {
  return <section className="py-24 px-6 bg-white" data-magicpath-id="0" data-magicpath-path="DashboardShowcaseSection.tsx">
      <div className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="DashboardShowcaseSection.tsx">
        <div className="grid lg:grid-cols-2 gap-16 items-center" data-magicpath-id="2" data-magicpath-path="DashboardShowcaseSection.tsx">
          {/* Image Column */}
          <motion.div className="relative" initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} viewport={{
          once: true
        }} data-magicpath-id="3" data-magicpath-path="DashboardShowcaseSection.tsx">
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-2xl" data-magicpath-id="4" data-magicpath-path="DashboardShowcaseSection.tsx">
              {/* Mock dashboard interface */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden" data-magicpath-id="5" data-magicpath-path="DashboardShowcaseSection.tsx">
                <div className="bg-gray-800 px-4 py-3 flex items-center gap-2" data-magicpath-id="6" data-magicpath-path="DashboardShowcaseSection.tsx">
                  <div className="w-3 h-3 bg-red-500 rounded-full" data-magicpath-id="7" data-magicpath-path="DashboardShowcaseSection.tsx"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" data-magicpath-id="8" data-magicpath-path="DashboardShowcaseSection.tsx"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full" data-magicpath-id="9" data-magicpath-path="DashboardShowcaseSection.tsx"></div>
                </div>
                <div className="p-6" data-magicpath-id="10" data-magicpath-path="DashboardShowcaseSection.tsx">
                  <div className="grid grid-cols-3 gap-4 mb-6" data-magicpath-id="11" data-magicpath-path="DashboardShowcaseSection.tsx">
                    <div className="bg-blue-100 rounded-lg p-4 h-20" data-magicpath-id="12" data-magicpath-path="DashboardShowcaseSection.tsx"></div>
                    <div className="bg-green-100 rounded-lg p-4 h-20" data-magicpath-id="13" data-magicpath-path="DashboardShowcaseSection.tsx"></div>
                    <div className="bg-purple-100 rounded-lg p-4 h-20" data-magicpath-id="14" data-magicpath-path="DashboardShowcaseSection.tsx"></div>
                  </div>
                  <div className="space-y-3" data-magicpath-id="15" data-magicpath-path="DashboardShowcaseSection.tsx">
                    <div className="bg-gray-100 rounded h-4 w-full" data-magicpath-id="16" data-magicpath-path="DashboardShowcaseSection.tsx"></div>
                    <div className="bg-gray-100 rounded h-4 w-3/4" data-magicpath-id="17" data-magicpath-path="DashboardShowcaseSection.tsx"></div>
                    <div className="bg-gray-100 rounded h-4 w-1/2" data-magicpath-id="18" data-magicpath-path="DashboardShowcaseSection.tsx"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20" animate={{
              y: [0, -10, 0],
              rotate: [0, 180, 360]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} data-magicpath-id="19" data-magicpath-path="DashboardShowcaseSection.tsx" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div className="space-y-8" initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} viewport={{
          once: true
        }} data-magicpath-id="20" data-magicpath-path="DashboardShowcaseSection.tsx">
            <div data-magicpath-id="21" data-magicpath-path="DashboardShowcaseSection.tsx">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight" data-magicpath-id="22" data-magicpath-path="DashboardShowcaseSection.tsx">
                Powerful Dashboard
                <br data-magicpath-id="23" data-magicpath-path="DashboardShowcaseSection.tsx" />
                <span className="text-blue-600" data-magicpath-id="24" data-magicpath-path="DashboardShowcaseSection.tsx">Analytics</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8" data-magicpath-id="25" data-magicpath-path="DashboardShowcaseSection.tsx">
                Get real-time insights into your product performance with our comprehensive analytics dashboard. Track user engagement, monitor key metrics, and make data-driven decisions that drive growth.
              </p>
            </div>

            <motion.button className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl group" whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} data-magicpath-id="26" data-magicpath-path="DashboardShowcaseSection.tsx">
              Explore the dashboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-magicpath-id="27" data-magicpath-path="DashboardShowcaseSection.tsx" />
            </motion.button>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-6 pt-8" data-magicpath-id="28" data-magicpath-path="DashboardShowcaseSection.tsx">
              <div className="space-y-2" data-magicpath-id="29" data-magicpath-path="DashboardShowcaseSection.tsx">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center" data-magicpath-id="30" data-magicpath-path="DashboardShowcaseSection.tsx">
                  <div className="w-6 h-6 bg-blue-600 rounded" data-magicpath-id="31" data-magicpath-path="DashboardShowcaseSection.tsx"></div>
                </div>
                <h3 className="font-semibold text-gray-900" data-magicpath-id="32" data-magicpath-path="DashboardShowcaseSection.tsx">Real-time Data</h3>
                <p className="text-sm text-gray-600" data-magicpath-id="33" data-magicpath-path="DashboardShowcaseSection.tsx">Live updates and instant notifications</p>
              </div>
              <div className="space-y-2" data-magicpath-id="34" data-magicpath-path="DashboardShowcaseSection.tsx">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center" data-magicpath-id="35" data-magicpath-path="DashboardShowcaseSection.tsx">
                  <div className="w-6 h-6 bg-green-600 rounded-full" data-magicpath-id="36" data-magicpath-path="DashboardShowcaseSection.tsx"></div>
                </div>
                <h3 className="font-semibold text-gray-900" data-magicpath-id="37" data-magicpath-path="DashboardShowcaseSection.tsx">Smart Insights</h3>
                <p className="text-sm text-gray-600" data-magicpath-id="38" data-magicpath-path="DashboardShowcaseSection.tsx">AI-powered recommendations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default DashboardShowcaseSection;