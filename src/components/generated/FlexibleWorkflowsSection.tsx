import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const FlexibleWorkflowsSection: React.FC = () => {
  const workflows = [{
    title: "Boost Engagement",
    image: "🚀",
    description: "Boost your social engagement with automated scheduling and smart analytics",
    mpid: "b8781d49-dbb2-47c8-bac9-7d0b36410d25"
  }, {
    title: "Schedule Post",
    image: "🎨",
    description: "Streamline your content strategy with auto-posting and real-time insights",
    mpid: "c455b47f-0e24-46b5-bf0f-b99cd0c3816d"
  }, {
    title: "Deep Analysis",
    image: "📊",
    description: "Deep-dive into performance with multi-metric post insights",
    mpid: "afd13fb0-64d8-4af6-8171-5bde59f8a697"
  }, {
    title: "Quality Assurance",
    image: "✅",
    description: "Ensure product quality with comprehensive testing and review processes",
    mpid: "73d96caa-24e6-4dc7-911b-7be2babd4ea2"
  }, {
    title: "Analytics & Insights",
    image: "📈",
    description: "Make data-driven decisions with real-time analytics and reporting",
    mpid: "38a3b3b6-e020-45a6-986a-f40f167f73ef"
  }, {
    title: "Customer Feedback",
    image: "💬",
    description: "Collect and analyze customer feedback to improve your products continuously",
    mpid: "b17a3d08-49e7-45aa-a2a2-6bc88e6009d1"
  }] as any[];
  return <div className="flexible-workflows-section" data-magicpath-id="0" data-magicpath-path="FlexibleWorkflowsSection.tsx">
      <div className="flexible-workflows-section__header" data-magicpath-id="1" data-magicpath-path="FlexibleWorkflowsSection.tsx">
        <h2 style={{
        display: "none"
      }} data-magicpath-id="2" data-magicpath-path="FlexibleWorkflowsSection.tsx">Flexible Workflows</h2>
        <div className="flexible-workflows-section__header__controls" data-magicpath-id="3" data-magicpath-path="FlexibleWorkflowsSection.tsx" style={{
        display: "none"
      }}>
          <button className="flexible-workflows-section__header__controls__button" data-magicpath-id="4" data-magicpath-path="FlexibleWorkflowsSection.tsx">
            <ChevronLeft data-magicpath-id="5" data-magicpath-path="FlexibleWorkflowsSection.tsx" />
          </button>
          <button className="flexible-workflows-section__header__controls__button" data-magicpath-id="6" data-magicpath-path="FlexibleWorkflowsSection.tsx">
            <ChevronRight data-magicpath-id="7" data-magicpath-path="FlexibleWorkflowsSection.tsx" style={{
            display: "none"
          }} />
          </button>
        </div>
      </div>
      <div className="flexible-workflows-section__content" data-magicpath-id="8" data-magicpath-path="FlexibleWorkflowsSection.tsx">
        <AnimatePresence data-magicpath-id="9" data-magicpath-path="FlexibleWorkflowsSection.tsx">
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
        }} className="flexible-workflows-section__content__workflow" data-magicpath-uuid={(workflow as any)["mpid"] ?? "unsafe"} data-magicpath-id="10" data-magicpath-path="FlexibleWorkflowsSection.tsx">
              <div className="flexible-workflows-section__content__workflow__title" style={{
            display: "none"
          }} data-magicpath-uuid={(workflow as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="11" data-magicpath-path="FlexibleWorkflowsSection.tsx">
                {workflow.title}
              </div>
              <div className="flexible-workflows-section__content__workflow__description" style={{
            display: "none"
          }} data-magicpath-uuid={(workflow as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="12" data-magicpath-path="FlexibleWorkflowsSection.tsx">
                {workflow.description}
              </div>
            </motion.div>)}
        </AnimatePresence>
      </div>
    </div>;
};
export default FlexibleWorkflowsSection;