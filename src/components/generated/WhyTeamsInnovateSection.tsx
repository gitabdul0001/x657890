"use client";

import * as React from "react";
import { motion } from "framer-motion";

// Floating card data with different positions and scales
const floatingCards = [{
  id: 1,
  x: -749.2,
  y: -398.044,
  scale: 0.956978,
  image: "1.png",
  mpid: "79a8aeb6-8480-4945-91a2-cb0a6f96e3ef"
}, {
  id: 2,
  x: -551.178,
  y: -438.089,
  scale: 0.956978,
  image: "2.png",
  mpid: "0d0c4409-ef27-48a3-b89c-db28051869bd"
}, {
  id: 3,
  x: -8.48888,
  y: -341.044,
  scale: 0.956978,
  image: "3.png",
  mpid: "86499918-f5c1-405e-b983-1059cde2c3fb"
}, {
  id: 4,
  x: 216.044,
  y: -327.044,
  scale: 0.956978,
  image: "4.png",
  mpid: "2a113551-5a7e-48dd-bbfe-73de147ed8b1"
}, {
  id: 5,
  x: 360.044,
  y: -481.111,
  scale: 0.956978,
  image: "5.png",
  mpid: "437a2957-580d-4580-8f70-63825f05d213"
}, {
  id: 6,
  x: 428.111,
  y: 50,
  scale: 0.956978,
  image: "6.png",
  mpid: "acb4b119-dd58-453e-aa89-f43fdad00a99"
}, {
  id: 7,
  x: -698.156,
  y: -251.044,
  scale: 0.956978,
  image: "7.png",
  mpid: "264a9c77-71d7-4a7f-a28d-babffeb7fe0f"
}, {
  id: 8,
  x: 591.156,
  y: -198.044,
  scale: 0.956978,
  image: "8.png",
  mpid: "d6a08482-4dcb-4235-9b75-08fb7028d2bd"
}, {
  id: 9,
  x: 818.2,
  y: -228.044,
  scale: 0.956978,
  image: "9.png",
  mpid: "fea08545-90af-43d0-8bd1-789882c1f7de"
}, {
  id: 10,
  x: -723.156,
  y: 192.089,
  scale: 0.956978,
  image: "10.png",
  mpid: "44b62911-01af-4eb7-b174-0c46dd8d3914"
}, {
  id: 11,
  x: -526.067,
  y: 310.089,
  scale: 0.956978,
  image: "11.png",
  mpid: "7c3cdb8d-e605-4a2b-8c35-20f473e866d7"
}, {
  id: 12,
  x: -257.044,
  y: 276.067,
  scale: 0.956978,
  image: "12.png",
  mpid: "1b25ad6b-0462-42b6-9517-08958e1fdaa3"
}, {
  id: 13,
  x: -138.044,
  y: 292.511,
  scale: 0.956978,
  image: "13.png",
  mpid: "790e36e5-c9cb-403d-b35b-79fdbab7c9b8"
}, {
  id: 14,
  x: 303.04,
  y: 102.489,
  scale: 0.956978,
  image: "14.png",
  mpid: "f8d9373c-44e0-4d77-b72b-3caeb121599c"
}, {
  id: 15,
  x: 386.111,
  y: 235.511,
  scale: 0.956978,
  image: "15.png",
  mpid: "655d1524-15c0-4b60-b721-e7ad3e1a64e5"
}] as any[];
export default function WhyTeamsInnovateSection() {
  return <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white min-h-screen flex items-center justify-center" data-magicpath-id="0" data-magicpath-path="WhyTeamsInnovateSection.tsx">
      {/* Canvas background with fade effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-slate-50/30 to-slate-100/50" data-magicpath-id="1" data-magicpath-path="WhyTeamsInnovateSection.tsx" />
      
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-6 py-24" data-magicpath-id="2" data-magicpath-path="WhyTeamsInnovateSection.tsx">
        <div className="flex flex-col items-center justify-center text-center space-y-8" data-magicpath-id="3" data-magicpath-path="WhyTeamsInnovateSection.tsx">
          {/* Main heading and CTA */}
          <div className="max-w-2xl space-y-6" data-magicpath-id="4" data-magicpath-path="WhyTeamsInnovateSection.tsx">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight" data-magicpath-id="5" data-magicpath-path="WhyTeamsInnovateSection.tsx">
              Why teams innovate on Reaxo
            </h3>
            
            <motion.button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} data-magicpath-id="6" data-magicpath-path="WhyTeamsInnovateSection.tsx">
              Sign up free
            </motion.button>
          </div>
        </div>
      </div>

      {/* Floating cards positioned absolutely */}
      <div className="absolute inset-0 pointer-events-none" data-magicpath-id="7" data-magicpath-path="WhyTeamsInnovateSection.tsx">
        {floatingCards.map(card => <motion.div key={card.id} className="absolute top-1/2 left-1/2 w-[140px] h-[152px]" style={{
        transform: `translateX(${card.x}px) translateY(${card.y}px) scale(${card.scale})`
      }} initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: card.scale,
        y: [0, -10, 0]
      }} transition={{
        opacity: {
          duration: 0.6,
          delay: card.id * 0.1
        },
        scale: {
          duration: 0.6,
          delay: card.id * 0.1
        },
        y: {
          duration: 3 + card.id % 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: card.id * 0.2
        }
      }} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="8" data-magicpath-path="WhyTeamsInnovateSection.tsx">
            <div className="relative w-full h-full" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="WhyTeamsInnovateSection.tsx">
              {/* Placeholder for card content - using colored rectangles as placeholders */}
              <div className={`w-full h-full rounded-lg shadow-lg ${card.id % 5 === 0 ? 'bg-gradient-to-br from-purple-400 to-pink-400' : card.id % 4 === 0 ? 'bg-gradient-to-br from-blue-400 to-cyan-400' : card.id % 3 === 0 ? 'bg-gradient-to-br from-green-400 to-emerald-400' : card.id % 2 === 0 ? 'bg-gradient-to-br from-orange-400 to-red-400' : 'bg-gradient-to-br from-indigo-400 to-purple-400'}`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="WhyTeamsInnovateSection.tsx">
                {/* Card content placeholder */}
                <div className="p-4 h-full flex flex-col justify-between" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="WhyTeamsInnovateSection.tsx">
                  <div className="w-8 h-8 bg-white/20 rounded-full" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="WhyTeamsInnovateSection.tsx" />
                  <div className="space-y-2" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="WhyTeamsInnovateSection.tsx">
                    <div className="h-2 bg-white/30 rounded" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="WhyTeamsInnovateSection.tsx" />
                    <div className="h-2 bg-white/20 rounded w-3/4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="WhyTeamsInnovateSection.tsx" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>)}
      </div>

      {/* Mobile optimization - hide some cards on smaller screens */}
      <div className="md:hidden" data-magicpath-id="16" data-magicpath-path="WhyTeamsInnovateSection.tsx">
        {floatingCards.slice(0, 4).map(card => <motion.div key={`mobile-${card.id}`} className="absolute top-1/2 left-1/2 w-[140px] h-[152px]" style={{
        transform: `translateX(${card.x * 0.3}px) translateY(${card.y * 0.3}px) scale(${card.scale * 0.7})`
      }} initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: card.scale * 0.7,
        y: [0, -10, 0]
      }} transition={{
        opacity: {
          duration: 0.6,
          delay: card.id * 0.1
        },
        scale: {
          duration: 0.6,
          delay: card.id * 0.1
        },
        y: {
          duration: 3 + card.id % 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: card.id * 0.2
        }
      }} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="WhyTeamsInnovateSection.tsx">
            <div className="relative w-full h-full" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="WhyTeamsInnovateSection.tsx">
              <div className={`w-full h-full rounded-lg shadow-lg ${card.id % 5 === 0 ? 'bg-gradient-to-br from-purple-400 to-pink-400' : card.id % 4 === 0 ? 'bg-gradient-to-br from-blue-400 to-cyan-400' : card.id % 3 === 0 ? 'bg-gradient-to-br from-green-400 to-emerald-400' : card.id % 2 === 0 ? 'bg-gradient-to-br from-orange-400 to-red-400' : 'bg-gradient-to-br from-indigo-400 to-purple-400'}`} data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="19" data-magicpath-path="WhyTeamsInnovateSection.tsx">
                <div className="p-4 h-full flex flex-col justify-between" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="WhyTeamsInnovateSection.tsx">
                  <div className="w-8 h-8 bg-white/20 rounded-full" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="21" data-magicpath-path="WhyTeamsInnovateSection.tsx" />
                  <div className="space-y-2" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="WhyTeamsInnovateSection.tsx">
                    <div className="h-2 bg-white/30 rounded" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="23" data-magicpath-path="WhyTeamsInnovateSection.tsx" />
                    <div className="h-2 bg-white/20 rounded w-3/4" data-magicpath-uuid={(card as any)["mpid"] ?? "unsafe"} data-magicpath-id="24" data-magicpath-path="WhyTeamsInnovateSection.tsx" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>)}
      </div>
    </section>;
}