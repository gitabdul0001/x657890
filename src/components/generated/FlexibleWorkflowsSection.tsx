import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const FlexibleWorkflowsSection: React.FC = () => {
  const workflows = [{
    title: "Development Workflow",
    image: "🚀",
    description: "Streamline your development process with automated testing and deployment",
    mpid: "273639d2-e268-4941-9a17-88c3c8d2d848"
  }, {
    title: "Design System",
    image: "🎨",
    description: "Maintain consistency across your products with a unified design system",
    mpid: "55054c79-8e12-4019-ad25-561d3c16287f"
  }, {
    title: "Project Management",
    image: "📊",
    description: "Keep your team aligned with powerful project tracking and collaboration tools",
    mpid: "ff2f279b-56a0-47af-a5d4-e6d4d86f8733"
  }, {
    title: "Quality Assurance",
    image: "✅",
    description: "Ensure product quality with comprehensive testing and review processes",
    mpid: "cd72501c-7139-46e9-ac05-a1f45c4b8b5b"
  }, {
    title: "Analytics & Insights",
    image: "📈",
    description: "Make data-driven decisions with real-time analytics and reporting",
    mpid: "3c6a1a12-c563-4285-a839-5d8cf138ca9e"
  }, {
    title: "Customer Feedback",
    image: "💬",
    description: "Collect and analyze customer feedback to improve your products continuously",
    mpid: "324d9037-8a00-4283-9f3d-c475a403418f"
  }] as any[];
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, workflows.length - itemsPerView);
  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };
  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };
  return <section className="py-24 px-6 bg-white" data-magicpath-id="0" data-magicpath-path="FlexibleWorkflowsSection.tsx">
      <div className="max-w-7xl mx-auto" data-magicpath-id="1" data-magicpath-path="FlexibleWorkflowsSection.tsx">
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
      }} data-magicpath-id="2" data-magicpath-path="FlexibleWorkflowsSection.tsx">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-magicpath-id="3" data-magicpath-path="FlexibleWorkflowsSection.tsx">
            Flexible Workflows for
            <br data-magicpath-id="4" data-magicpath-path="FlexibleWorkflowsSection.tsx" />
            <span className="text-blue-600" data-magicpath-id="5" data-magicpath-path="FlexibleWorkflowsSection.tsx">Every Use Case</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-magicpath-id="6" data-magicpath-path="FlexibleWorkflowsSection.tsx">
            Adapt Reaxo to your unique needs with customizable workflows that grow with your team and scale with your business.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative" data-magicpath-id="7" data-magicpath-path="FlexibleWorkflowsSection.tsx">
          {/* Navigation Arrows */}
          <button onClick={prevSlide} disabled={currentIndex === 0} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" data-magicpath-id="8" data-magicpath-path="FlexibleWorkflowsSection.tsx">
            <ChevronLeft className="w-6 h-6 text-gray-600" data-magicpath-id="9" data-magicpath-path="FlexibleWorkflowsSection.tsx" />
          </button>

          <button onClick={nextSlide} disabled={currentIndex === maxIndex} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" data-magicpath-id="10" data-magicpath-path="FlexibleWorkflowsSection.tsx">
            <ChevronRight className="w-6 h-6 text-gray-600" data-magicpath-id="11" data-magicpath-path="FlexibleWorkflowsSection.tsx" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden" data-magicpath-id="12" data-magicpath-path="FlexibleWorkflowsSection.tsx">
            <motion.div className="flex gap-8" animate={{
            x: -currentIndex * (100 / itemsPerView) + '%'
          }} transition={{
            duration: 0.5,
            ease: "easeInOut"
          }} style={{
            width: `${workflows.length / itemsPerView * 100}%`
          }} data-magicpath-id="13" data-magicpath-path="FlexibleWorkflowsSection.tsx">
              {workflows.map((workflow, index) => <motion.div key={index} className="flex-shrink-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer" style={{
              width: `${100 / workflows.length}%`
            }} whileHover={{
              scale: 1.02,
              y: -5
            }} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} data-magicpath-uuid={(workflow as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="FlexibleWorkflowsSection.tsx">
                  <div className="text-center" data-magicpath-uuid={(workflow as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="FlexibleWorkflowsSection.tsx">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300" data-magicpath-uuid={(workflow as any)["mpid"] ?? "unsafe"} data-magicpath-field="image:unknown" data-magicpath-id="16" data-magicpath-path="FlexibleWorkflowsSection.tsx">
                      {workflow.image}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors" data-magicpath-uuid={(workflow as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="17" data-magicpath-path="FlexibleWorkflowsSection.tsx">
                      {workflow.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed" data-magicpath-uuid={(workflow as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="18" data-magicpath-path="FlexibleWorkflowsSection.tsx">
                      {workflow.description}
                    </p>
                  </div>
                </motion.div>)}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-12" data-magicpath-id="19" data-magicpath-path="FlexibleWorkflowsSection.tsx">
            {Array.from({
            length: maxIndex + 1
          }).map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`} data-magicpath-id="20" data-magicpath-path="FlexibleWorkflowsSection.tsx" />)}
          </div>
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
      }} data-magicpath-id="21" data-magicpath-path="FlexibleWorkflowsSection.tsx">
          <motion.button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} data-magicpath-id="22" data-magicpath-path="FlexibleWorkflowsSection.tsx">
            Explore all workflows
          </motion.button>
        </motion.div>
      </div>
    </section>;
};
export default FlexibleWorkflowsSection;