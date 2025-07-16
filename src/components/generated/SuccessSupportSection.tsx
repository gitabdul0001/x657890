import React from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar } from 'lucide-react';
const SuccessSupportSection: React.FC = () => {
  const testimonials = [{
    text: "Reaxo transformed our development workflow. We ship features 3x faster now.",
    author: "Sarah Chen",
    role: "CTO at TechFlow",
    avatar: "👩‍💻"
  }, {
    text: "The analytics dashboard gives us insights we never had before. Game changer!",
    author: "Marcus Johnson",
    role: "Product Manager at InnovateCorp",
    avatar: "👨‍💼"
  }, {
    text: "Best investment we made this year. ROI was immediate and substantial.",
    author: "Elena Rodriguez",
    role: "CEO at StartupX",
    avatar: "👩‍💼"
  }, {
    text: "Customer support is phenomenal. They helped us migrate seamlessly.",
    author: "David Kim",
    role: "Lead Developer at CodeCraft",
    avatar: "👨‍💻"
  }, {
    text: "The collaboration features brought our remote team closer together.",
    author: "Lisa Wang",
    role: "Design Lead at CreativeStudio",
    avatar: "👩‍🎨"
  }, {
    text: "Reaxo's automation saved us 20 hours per week. Incredible efficiency gains.",
    author: "Alex Thompson",
    role: "Operations Director at ScaleUp",
    avatar: "👨‍🔧"
  }] as any[];
  const features = ["24/7 dedicated support team", "Comprehensive onboarding program", "Regular training sessions", "Custom integration assistance"];
  return <section className="py-16 px-6 bg-slate-900 text-white relative overflow-hidden" style={{
    background: "rgba(47,47,48,255)",
    display: "none"
  }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
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
        }}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Success & Support
                <br />
                <span className="text-blue-400">Every Step</span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Our dedicated team ensures your success from day one. Get the support you need to maximize your investment and achieve your goals.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
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
            }}>
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-300">{feature}</span>
                </motion.div>)}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <motion.button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
                Get Reaxo free
              </motion.button>
              <motion.button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-600 text-white text-lg font-semibold rounded-xl hover:border-gray-500 hover:bg-gray-800 transition-all duration-300" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
                <Calendar className="w-5 h-5" />
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
        }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {/* First Column - Scrolling Up */}
              <div className="relative overflow-hidden h-full">
                <motion.div className="space-y-8" animate={{
                y: [0, -140 * (testimonials.length / 2)]
              }} transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}>
                  {[...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map((testimonial, index) => <motion.div key={`col1-${index}`} className="support_testimonials-item bg-[#3a3a3b] rounded-lg p-6 min-h-[160px] flex flex-col justify-between">
                      <div className="support_testimonials-text text-gray-200 mb-4 leading-relaxed text-base flex-grow">
                        "{testimonial.text}"
                      </div>
                      <div className="support_testimonials-flex flex items-center gap-3">
                        <div className="support_testimonials-image w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white text-sm">{testimonial.avatar}</div>
                        <div className="support_testimonials-text-flex">
                          <div className="heading-style-h6 text-weight-bold text-color-grey font-semibold text-white text-sm">{testimonial.author}</div>
                          <div className="heading-style-h6 text-color-grey text-gray-400 text-sm">{testimonial.role}</div>
                        </div>
                      </div>
                    </motion.div>)}
                </motion.div>
              </div>

              {/* Second Column - Scrolling Down */}
              <div className="relative overflow-hidden h-full">
                <motion.div className="space-y-8" animate={{
                y: [-140 * (testimonials.length / 2), 0]
              }} transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}>
                  {[...testimonials.slice(3, 6), ...testimonials.slice(3, 6)].map((testimonial, index) => <motion.div key={`col2-${index}`} className="support_testimonials-item bg-[#3a3a3b] rounded-lg p-6 min-h-[160px] flex flex-col justify-between">
                      <div className="support_testimonials-text text-gray-200 mb-4 leading-relaxed text-base flex-grow">
                        "{testimonial.text}"
                      </div>
                      <div className="support_testimonials-flex flex items-center gap-3">
                        <div className="support_testimonials-image w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white text-sm">{testimonial.avatar}</div>
                        <div className="support_testimonials-text-flex">
                          <div className="heading-style-h6 text-weight-bold text-color-grey font-semibold text-white text-sm">{testimonial.author}</div>
                          <div className="heading-style-h6 text-color-grey text-gray-400 text-sm">{testimonial.role}</div>
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