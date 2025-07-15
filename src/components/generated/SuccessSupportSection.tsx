import React from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar } from 'lucide-react';
const SuccessSupportSection: React.FC = () => {
  const testimonials = [{
    text: "Reaxo transformed our development workflow. We ship features 3x faster now.",
    author: "Sarah Chen",
    role: "CTO at TechFlow",
    avatar: "👩‍💻",
    mpid: "24b2941e-6962-4bcf-92f4-e011b5a2a48b"
  }, {
    text: "The analytics dashboard gives us insights we never had before. Game changer!",
    author: "Marcus Johnson",
    role: "Product Manager at InnovateCorp",
    avatar: "👨‍💼",
    mpid: "ceb3c09e-5096-4e88-b546-2ca012b448b2"
  }, {
    text: "Best investment we made this year. ROI was immediate and substantial.",
    author: "Elena Rodriguez",
    role: "CEO at StartupX",
    avatar: "👩‍💼",
    mpid: "4b485cef-9e4b-4804-95aa-c4e9610730f0"
  }, {
    text: "Customer support is phenomenal. They helped us migrate seamlessly.",
    author: "David Kim",
    role: "Lead Developer at CodeCraft",
    avatar: "👨‍💻",
    mpid: "a0614bf7-4d3e-4602-890d-9fde85884867"
  }, {
    text: "The collaboration features brought our remote team closer together.",
    author: "Lisa Wang",
    role: "Design Lead at CreativeStudio",
    avatar: "👩‍🎨",
    mpid: "d7c5cebd-58fe-4f49-b6c8-ac9b64e2cf55"
  }, {
    text: "Reaxo's automation saved us 20 hours per week. Incredible efficiency gains.",
    author: "Alex Thompson",
    role: "Operations Director at ScaleUp",
    avatar: "👨‍🔧",
    mpid: "e259900e-575a-4c8d-8e89-d43464c10d4c"
  }] as any[];
  const features = ["24/7 dedicated support team", "Comprehensive onboarding program", "Regular training sessions", "Custom integration assistance"];
  return <section className="py-16 px-6 bg-slate-900 text-white" data-magicpath-id="0" data-magicpath-path="SuccessSupportSection.tsx">
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
          <motion.div className="relative h-96 overflow-hidden" initial={{
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
                <motion.div className="space-y-6" animate={{
                y: [-100, -100 * (testimonials.length / 2) - 100]
              }} transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }} data-magicpath-id="21" data-magicpath-path="SuccessSupportSection.tsx">
                  {[...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map((testimonial, index) => <div key={`col1-${index}`} className="bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-700" data-magicpath-id="22" data-magicpath-path="SuccessSupportSection.tsx">
                      <blockquote className="text-gray-300 mb-4 leading-relaxed" data-magicpath-id="23" data-magicpath-path="SuccessSupportSection.tsx">
                        "{testimonial.text}"
                      </blockquote>
                      <div className="flex items-center gap-3" data-magicpath-id="24" data-magicpath-path="SuccessSupportSection.tsx">
                        <div className="text-2xl" data-magicpath-id="25" data-magicpath-path="SuccessSupportSection.tsx">{testimonial.avatar}</div>
                        <div data-magicpath-id="26" data-magicpath-path="SuccessSupportSection.tsx">
                          <div className="font-semibold text-white" data-magicpath-id="27" data-magicpath-path="SuccessSupportSection.tsx">{testimonial.author}</div>
                          <div className="text-sm text-gray-400" data-magicpath-id="28" data-magicpath-path="SuccessSupportSection.tsx">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>)}
                </motion.div>
              </div>

              {/* Second Column - Scrolling Down */}
              <div className="relative overflow-hidden h-full" data-magicpath-id="29" data-magicpath-path="SuccessSupportSection.tsx">
                <motion.div className="space-y-6" animate={{
                y: [-100 * (testimonials.length / 2) + 100, 100]
              }} transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }} data-magicpath-id="30" data-magicpath-path="SuccessSupportSection.tsx">
                  {[...testimonials.slice(3, 6), ...testimonials.slice(3, 6)].map((testimonial, index) => <div key={`col2-${index}`} className="bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-700" data-magicpath-id="31" data-magicpath-path="SuccessSupportSection.tsx">
                      <blockquote className="text-gray-300 mb-4 leading-relaxed" data-magicpath-id="32" data-magicpath-path="SuccessSupportSection.tsx">
                        "{testimonial.text}"
                      </blockquote>
                      <div className="flex items-center gap-3" data-magicpath-id="33" data-magicpath-path="SuccessSupportSection.tsx">
                        <div className="text-2xl" data-magicpath-id="34" data-magicpath-path="SuccessSupportSection.tsx">{testimonial.avatar}</div>
                        <div data-magicpath-id="35" data-magicpath-path="SuccessSupportSection.tsx">
                          <div className="font-semibold text-white" data-magicpath-id="36" data-magicpath-path="SuccessSupportSection.tsx">{testimonial.author}</div>
                          <div className="text-sm text-gray-400" data-magicpath-id="37" data-magicpath-path="SuccessSupportSection.tsx">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>)}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default SuccessSupportSection;