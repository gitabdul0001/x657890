import React from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar } from 'lucide-react';
const SuccessSupportSection: React.FC = () => {
  const testimonials = [{
    text: "Reaxo transformed our development workflow. We ship features 3x faster now.",
    author: "Sarah Chen",
    role: "CTO at TechFlow",
    avatar: "👩‍💻",
    mpid: "bb99e025-65c2-4e55-b4a5-fefef65ef936"
  }, {
    text: "The analytics dashboard gives us insights we never had before. Game changer!",
    author: "Marcus Johnson",
    role: "Product Manager at InnovateCorp",
    avatar: "👨‍💼",
    mpid: "f3849e88-f023-4921-846e-24d8945ca557"
  }, {
    text: "Best investment we made this year. ROI was immediate and substantial.",
    author: "Elena Rodriguez",
    role: "CEO at StartupX",
    avatar: "👩‍💼",
    mpid: "6d3375d7-db26-48c3-9b6a-e0d80904ccd7"
  }, {
    text: "Customer support is phenomenal. They helped us migrate seamlessly.",
    author: "David Kim",
    role: "Lead Developer at CodeCraft",
    avatar: "👨‍💻",
    mpid: "d86c4de7-d6fc-4c7c-9c24-c226f187ddf2"
  }, {
    text: "The collaboration features brought our remote team closer together.",
    author: "Lisa Wang",
    role: "Design Lead at CreativeStudio",
    avatar: "👩‍🎨",
    mpid: "b5ea608f-9334-42d6-8efc-2a2e2f19bb65"
  }, {
    text: "Reaxo's automation saved us 20 hours per week. Incredible efficiency gains.",
    author: "Alex Thompson",
    role: "Operations Director at ScaleUp",
    avatar: "👨‍🔧",
    mpid: "7a139338-405d-4600-97b0-c15489ee14cf"
  }] as any[];
  const features = ["24/7 dedicated support team", "Comprehensive onboarding program", "Regular training sessions", "Custom integration assistance"];
  return <section className="py-16 px-6 bg-slate-900 text-white relative overflow-hidden" style={{
    background: "rgba(47,47,48,255)",
    display: "none"
  }} data-magicpath-id="0" data-magicpath-path="SuccessSupportSection.tsx">
      <div className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="SuccessSupportSection.tsx">
        <div className="grid lg:grid-cols-2 gap-16 items-start" data-magicpath-id="2" data-magicpath-path="SuccessSupportSection.tsx">
          {/* Left Column - Content */}
          <motion.div className="space-y-8" initial={{
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
        }} data-magicpath-id="3" data-magicpath-path="SuccessSupportSection.tsx">
            <div data-magicpath-id="4" data-magicpath-path="SuccessSupportSection.tsx">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" data-magicpath-id="5" data-magicpath-path="SuccessSupportSection.tsx">
                Success & Support
                <br data-magicpath-id="6" data-magicpath-path="SuccessSupportSection.tsx" />
                <span className="text-blue-400" data-magicpath-id="7" data-magicpath-path="SuccessSupportSection.tsx">Every Step</span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8" data-magicpath-id="8" data-magicpath-path="SuccessSupportSection.tsx">
                Our dedicated team ensures your success from day one. Get the support you need to maximize your investment and achieve your goals.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4" data-magicpath-id="9" data-magicpath-path="SuccessSupportSection.tsx">
              {features.map((feature, index) => <motion.div key={index} className="flex items-center gap-4" initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="SuccessSupportSection.tsx">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="11" data-magicpath-path="SuccessSupportSection.tsx">
                    <Check className="w-4 h-4 text-white" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="12" data-magicpath-path="SuccessSupportSection.tsx" />
                  </div>
                  <span className="text-lg text-gray-300" data-magicpath-uuid={(feature as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="SuccessSupportSection.tsx">{feature}</span>
                </motion.div>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8" data-magicpath-id="14" data-magicpath-path="SuccessSupportSection.tsx">
              <motion.button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} data-magicpath-id="15" data-magicpath-path="SuccessSupportSection.tsx">
                Get Reaxo free
              </motion.button>
              <motion.button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-600 text-white text-lg font-semibold rounded-xl hover:border-gray-500 hover:bg-gray-800 transition-all duration-300" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }} data-magicpath-id="16" data-magicpath-path="SuccessSupportSection.tsx">
                <Calendar className="w-5 h-5" data-magicpath-id="17" data-magicpath-path="SuccessSupportSection.tsx" />
                Book a demo
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Testimonial Carousels */}
          <motion.div className="relative h-[600px]" initial={{
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
        }} data-magicpath-id="18" data-magicpath-path="SuccessSupportSection.tsx">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full" data-magicpath-id="19" data-magicpath-path="SuccessSupportSection.tsx">
              {/* First Column - Scrolling Up */}
              <div className="relative overflow-hidden h-full" data-magicpath-id="20" data-magicpath-path="SuccessSupportSection.tsx">
                <motion.div className="space-y-8" animate={{
                y: [0, -140 * (testimonials.length / 2)]
              }} transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }} data-magicpath-id="21" data-magicpath-path="SuccessSupportSection.tsx">
                  {[...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map((testimonial, index) => <motion.div key={`col1-${index}`} className="support_testimonials-item bg-[#3a3a3b] rounded-lg p-6 min-h-[160px] flex flex-col justify-between" data-magicpath-id="22" data-magicpath-path="SuccessSupportSection.tsx">
                      <div className="support_testimonials-text text-gray-200 mb-4 leading-relaxed text-base flex-grow" data-magicpath-id="23" data-magicpath-path="SuccessSupportSection.tsx">
                        "{testimonial.text}"
                      </div>
                      <div className="support_testimonials-flex flex items-center gap-3" data-magicpath-id="24" data-magicpath-path="SuccessSupportSection.tsx">
                        <div className="support_testimonials-image w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white text-sm" data-magicpath-id="25" data-magicpath-path="SuccessSupportSection.tsx">{testimonial.avatar}</div>
                        <div className="support_testimonials-text-flex" data-magicpath-id="26" data-magicpath-path="SuccessSupportSection.tsx">
                          <div className="heading-style-h6 text-weight-bold text-color-grey font-semibold text-white text-sm" data-magicpath-id="27" data-magicpath-path="SuccessSupportSection.tsx">{testimonial.author}</div>
                          <div className="heading-style-h6 text-color-grey text-gray-400 text-sm" data-magicpath-id="28" data-magicpath-path="SuccessSupportSection.tsx">{testimonial.role}</div>
                        </div>
                      </div>
                    </motion.div>)}
                </motion.div>
              </div>

              {/* Second Column - Scrolling Down */}
              <div className="relative overflow-hidden h-full" data-magicpath-id="29" data-magicpath-path="SuccessSupportSection.tsx">
                <motion.div className="space-y-8" animate={{
                y: [-140 * (testimonials.length / 2), 0]
              }} transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }} data-magicpath-id="30" data-magicpath-path="SuccessSupportSection.tsx">
                  {[...testimonials.slice(3, 6), ...testimonials.slice(3, 6)].map((testimonial, index) => <motion.div key={`col2-${index}`} className="support_testimonials-item bg-[#3a3a3b] rounded-lg p-6 min-h-[160px] flex flex-col justify-between" data-magicpath-id="31" data-magicpath-path="SuccessSupportSection.tsx">
                      <div className="support_testimonials-text text-gray-200 mb-4 leading-relaxed text-base flex-grow" data-magicpath-id="32" data-magicpath-path="SuccessSupportSection.tsx">
                        "{testimonial.text}"
                      </div>
                      <div className="support_testimonials-flex flex items-center gap-3" data-magicpath-id="33" data-magicpath-path="SuccessSupportSection.tsx">
                        <div className="support_testimonials-image w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white text-sm" data-magicpath-id="34" data-magicpath-path="SuccessSupportSection.tsx">{testimonial.avatar}</div>
                        <div className="support_testimonials-text-flex" data-magicpath-id="35" data-magicpath-path="SuccessSupportSection.tsx">
                          <div className="heading-style-h6 text-weight-bold text-color-grey font-semibold text-white text-sm" data-magicpath-id="36" data-magicpath-path="SuccessSupportSection.tsx">{testimonial.author}</div>
                          <div className="heading-style-h6 text-color-grey text-gray-400 text-sm" data-magicpath-id="37" data-magicpath-path="SuccessSupportSection.tsx">{testimonial.role}</div>
                        </div>
                      </div>
                    </motion.div>)}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default SuccessSupportSection;