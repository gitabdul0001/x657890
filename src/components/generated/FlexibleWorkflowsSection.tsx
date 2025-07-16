import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const FlexibleWorkflowsSection: React.FC = () => {
  const workflows = [{
    title: "Boost Engagement",
    image: "🚀",
    description: "Boost your social engagement with automated scheduling and smart analytics"
  }, {
    title: "Schedule Post",
    image: "🎨",
    description: "Streamline your content strategy with auto-posting and real-time insights"
  }, {
    title: "Deep Analysis",
    image: "📊",
    description: "Deep-dive into performance with multi-metric post insights"
  }, {
    title: "Quality Assurance",
    image: "✅",
    description: "Ensure product quality with comprehensive testing and review processes"
  }, {
    title: "Analytics & Insights",
    image: "📈",
    description: "Make data-driven decisions with real-time analytics and reporting"
  }, {
    title: "Customer Feedback",
    image: "💬",
    description: "Collect and analyze customer feedback to improve your products continuously"
  }] as any[];
  return <div className="flexible-workflows-section">
      <div className="flexible-workflows-section__header">
        <h2 style={{
        display: "none"
      }}>Flexible Workflows</h2>
        <div className="flexible-workflows-section__header__controls" style={{
        display: "none"
      }}>
          <button className="flexible-workflows-section__header__controls__button">
            <ChevronLeft />
          </button>
          <button className="flexible-workflows-section__header__controls__button">
            <ChevronRight style={{
            display: "none"
          }} />
          </button>
        </div>
      </div>
      <div className="flexible-workflows-section__content">
        <AnimatePresence>
          {workflows.map((workflow, index) => <motion.div key={workflow.mpid} initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: 50
        }} transition={{
          duration: 0.5
        }} className="flexible-workflows-section__content__workflow">
              <div className="flexible-workflows-section__content__workflow__title" style={{
            display: "none"
          }}>
                {workflow.title}
              </div>
              <div className="flexible-workflows-section__content__workflow__description" style={{
            display: "none"
          }}>
                {workflow.description}
              </div>
            </motion.div>)}
        </AnimatePresence>
      </div>
    </div>;
};
export default FlexibleWorkflowsSection;