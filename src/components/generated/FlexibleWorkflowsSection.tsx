import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const FlexibleWorkflowsSection: React.FC = () => {
  const workflows = [{
    title: "Boost Engagement",
    image: "🚀",
    description: "Boost your social engagement with automated scheduling and smart analytics",
    mpid: "f7296df4-7391-4226-b298-84827d9e8fd7"
  }, {
    title: "Schedule Post",
    image: "🎨",
    description: "Streamline your content strategy with auto-posting and real-time insights",
    mpid: "c3064a01-f1f8-4c06-8256-8df431fa9080"
  }, {
    title: "Deep Analysis",
    image: "📊",
    description: "Deep-dive into performance with multi-metric post insights",
    mpid: "c1ae6bf3-10ed-4aa0-9ca3-b7bc18b70aad"
  }, {
    title: "Quality Assurance",
    image: "✅",
    description: "Ensure product quality with comprehensive testing and review processes",
    mpid: "1bd90752-a7ef-4c64-9617-2690a325d28c"
  }, {
    title: "Analytics & Insights",
    image: "📈",
    description: "Make data-driven decisions with real-time analytics and reporting",
    mpid: "fd2d383f-b417-4bb1-a0d5-a665b850325a"
  }, {
    title: "Customer Feedback",
    image: "💬",
    description: "Collect and analyze customer feedback to improve your products continuously",
    mpid: "6c378ae9-20f4-4e05-a98c-ed79b03744a7"
  }] as any[];
  return <div className="flexible-workflows-section" data-magicpath-id="0" data-magicpath-path="FlexibleWorkflowsSection.tsx">
      <div className="flexible-workflows-section__header" data-magicpath-id="1" data-magicpath-path="FlexibleWorkflowsSection.tsx">
        <h2 data-magicpath-id="2" data-magicpath-path="FlexibleWorkflowsSection.tsx" style={{
        display: "none"
      }}>Flexible Workflows</h2>
        <div className="flexible-workflows-section__header__controls" data-magicpath-id="3" data-magicpath-path="FlexibleWorkflowsSection.tsx">
          <button className="flexible-workflows-section__header__controls__button" data-magicpath-id="4" data-magicpath-path="FlexibleWorkflowsSection.tsx">
            <ChevronLeft data-magicpath-id="5" data-magicpath-path="FlexibleWorkflowsSection.tsx" />
          </button>
          <button className="flexible-workflows-section__header__controls__button" data-magicpath-id="6" data-magicpath-path="FlexibleWorkflowsSection.tsx">
            <ChevronRight data-magicpath-id="7" data-magicpath-path="FlexibleWorkflowsSection.tsx" />
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
              <div className="flexible-workflows-section__content__workflow__title" data-magicpath-uuid={(workflow as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="11" data-magicpath-path="FlexibleWorkflowsSection.tsx" style={{
            display: "none"
          }}>
                {workflow.title}
              </div>
              <div className="flexible-workflows-section__content__workflow__description" data-magicpath-uuid={(workflow as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="12" data-magicpath-path="FlexibleWorkflowsSection.tsx" style={{
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