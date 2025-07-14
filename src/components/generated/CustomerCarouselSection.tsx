"use client";

import React from 'react';
import { motion } from 'framer-motion';
const CustomerCarouselSection: React.FC = () => {
  const apps = [{
    name: 'LifeAt',
    logo: '🏠',
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
    mpid: "4a8fceb5-a927-4f8a-b274-1cc46a1dd7bb"
  }, {
    name: 'Convy',
    logo: '➕',
    bgColor: 'bg-lime-400',
    textColor: 'text-black',
    mpid: "4ba8823f-efae-4c87-b116-f157e85d4c1a"
  }, {
    name: 'Morgen',
    logo: '🌅',
    bgColor: 'bg-gradient-to-br from-orange-400 to-pink-400',
    textColor: 'text-white',
    mpid: "883e0bc6-3e79-4519-a145-657a94f12d08"
  }, {
    name: 'Campsite',
    logo: '🏕️',
    bgColor: 'bg-red-500',
    textColor: 'text-white',
    mpid: "0d464dfd-2670-401a-b0f6-2b0d1e9b3d12"
  }, {
    name: 'Voiceflow',
    logo: '🎤',
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
    mpid: "699af85a-2296-46db-8827-15cdb592c8e7"
  }, {
    name: 'ClickUp',
    logo: '📊',
    bgColor: 'bg-gradient-to-br from-purple-500 to-blue-500',
    textColor: 'text-white',
    mpid: "b9823903-4f42-4f43-8e27-afe19dd8c7fa"
  }, {
    name: 'Perplexity',
    logo: '🔍',
    bgColor: 'bg-teal-500',
    textColor: 'text-white',
    mpid: "91378351-8de5-4fc6-962a-7a74c28d84b7"
  }, {
    name: 'Sunsama',
    logo: '☀️',
    bgColor: 'bg-orange-500',
    textColor: 'text-white',
    mpid: "5879ef21-58eb-4372-82a0-0af1e7a48b94"
  }, {
    name: 'Beeper',
    logo: '💬',
    bgColor: 'bg-purple-600',
    textColor: 'text-white',
    mpid: "d44c9323-dd99-46b2-a660-c7317c5efda6"
  }, {
    name: 'Cal',
    logo: '📅',
    bgColor: 'bg-gray-800',
    textColor: 'text-white',
    mpid: "f7a103f4-77d7-411c-88de-3fe1f149eae3"
  }, {
    name: 'Webstudio',
    logo: '🌐',
    bgColor: 'bg-gradient-to-br from-blue-600 to-purple-600',
    textColor: 'text-white',
    mpid: "82f99d4c-28c4-498a-b925-880ab6b80ad2"
  }, {
    name: 'Unbounce',
    logo: '📈',
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
    mpid: "3a627a44-33fd-4540-be01-7af6254d9cd7"
  }, {
    name: 'Moises',
    logo: '🎵',
    bgColor: 'bg-teal-600',
    textColor: 'text-white',
    mpid: "1b205985-0936-404c-9add-5fd3d16aad8f"
  }, {
    name: 'Basedash',
    logo: '📊',
    bgColor: 'bg-gray-800',
    textColor: 'text-white',
    mpid: "1efc58a8-a394-42f4-9aa4-79849deb8d20"
  }, {
    name: 'Rise',
    logo: '⭐',
    bgColor: 'bg-purple-500',
    textColor: 'text-white',
    mpid: "1ac2430c-7b86-4dcd-9655-846abed00f7c"
  }, {
    name: 'Site',
    logo: '⚙️',
    bgColor: 'bg-gray-600',
    textColor: 'text-white',
    mpid: "6d981d62-6bba-4470-8e31-d48b40087d92"
  }, {
    name: 'Kosy',
    logo: '💜',
    bgColor: 'bg-purple-400',
    textColor: 'text-white',
    mpid: "2182ad55-2e4e-4b80-b802-f4d655fa18c5"
  }, {
    name: 'Kitemaker',
    logo: '📧',
    bgColor: 'bg-purple-600',
    textColor: 'text-white',
    mpid: "d7a2e352-b2c1-41ca-be3f-37176c1ec24e"
  }, {
    name: 'Verbu',
    logo: '✅',
    bgColor: 'bg-purple-500',
    textColor: 'text-white',
    mpid: "9af23692-1419-4c83-be0f-81f7038d6534"
  }, {
    name: 'Bento',
    logo: '🐷',
    bgColor: 'bg-pink-400',
    textColor: 'text-white',
    mpid: "d5779944-e0de-4ba1-8ae3-2b1659934245"
  }, {
    name: 'Grain',
    logo: '🌱',
    bgColor: 'bg-green-500',
    textColor: 'text-white',
    mpid: "0adbc322-d5b3-4663-8c01-88bccdbe4a6f"
  }] as any[];

  // Create two rows for the grid layout
  const firstRow = apps.slice(0, 11);
  const secondRow = apps.slice(11);
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
            <span className="text-2xl" data-magicpath-id="4" data-magicpath-path="CustomerCarouselSection.tsx">⟨</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight" data-magicpath-id="5" data-magicpath-path="CustomerCarouselSection.tsx">
              APPS THAT SUPPORT REAXO
            </h2>
            <span className="text-2xl" data-magicpath-id="6" data-magicpath-path="CustomerCarouselSection.tsx">⟩</span>
          </div>
        </motion.div>

        {/* App Grid */}
        <div className="space-y-8" data-magicpath-id="7" data-magicpath-path="CustomerCarouselSection.tsx">
          {/* First Row */}
          <motion.div className="flex justify-center gap-4 md:gap-6 flex-wrap" initial={{
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
        }} data-magicpath-id="8" data-magicpath-path="CustomerCarouselSection.tsx">
            {firstRow.map((app, index) => <motion.div key={app.name} className="flex flex-col items-center group cursor-pointer" whileHover={{
            scale: 1.05,
            y: -2
          }} transition={{
            duration: 0.2
          }} data-magicpath-uuid={(app as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="CustomerCarouselSection.tsx">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${app.bgColor} flex items-center justify-center text-2xl md:text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300`} data-magicpath-uuid={(app as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknown" data-magicpath-id="10" data-magicpath-path="CustomerCarouselSection.tsx">
                  {app.logo}
                </div>
                <span className="mt-3 text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors" data-magicpath-uuid={(app as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="11" data-magicpath-path="CustomerCarouselSection.tsx">
                  {app.name}
                </span>
              </motion.div>)}
          </motion.div>

          {/* Second Row */}
          <motion.div className="flex justify-center gap-4 md:gap-6 flex-wrap" initial={{
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
        }} data-magicpath-id="12" data-magicpath-path="CustomerCarouselSection.tsx">
            {secondRow.map((app, index) => <motion.div key={app.name} className="flex flex-col items-center group cursor-pointer" whileHover={{
            scale: 1.05,
            y: -2
          }} transition={{
            duration: 0.2
          }} data-magicpath-uuid={(app as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="CustomerCarouselSection.tsx">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${app.bgColor} flex items-center justify-center text-2xl md:text-3xl shadow-lg group-hover:shadow-xl transition-all duration-300`} data-magicpath-uuid={(app as any)["mpid"] ?? "unsafe"} data-magicpath-field="logo:unknown" data-magicpath-id="14" data-magicpath-path="CustomerCarouselSection.tsx">
                  {app.logo}
                </div>
                <span className="mt-3 text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors" data-magicpath-uuid={(app as any)["mpid"] ?? "unsafe"} data-magicpath-field="name:unknown" data-magicpath-id="15" data-magicpath-path="CustomerCarouselSection.tsx">
                  {app.name}
                </span>
              </motion.div>)}
          </motion.div>
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
      }} data-magicpath-id="16" data-magicpath-path="CustomerCarouselSection.tsx">
          <p className="text-lg text-gray-600 mb-8" data-magicpath-id="17" data-magicpath-path="CustomerCarouselSection.tsx">
            Ready to join them?
          </p>
          <motion.button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl" whileHover={{
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