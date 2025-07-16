import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const FlexibleWorkflowsSection: React.FC = () => {
  const workflows = [{
    title: "Boost Engagement",
    image: "🚀",
    description: "Boost your social engagement with automated scheduling and smart analytics",
    mpid: "1c35776e-8b38-4818-9640-6de50202d890"
  }, {
    title: "Schedule Post",
    image: "🎨",
    description: "Streamline your content strategy with auto-posting and real-time insights",
    mpid: "0867a353-9b0c-4eb5-bb9b-5ea4c69317fa"
  }, {
    title: "Deep Analysis",
    image: "📊",
    description: "Deep-dive into performance with multi-metric post insights",
    mpid: "3c9f6907-5362-4fa6-b9ff-8dde5b85a4f5"
  }, {
    title: "Quality Assurance",
    image: "✅",
    description: "Ensure product quality with comprehensive testing and review processes",
    mpid: "4e4b68c7-8356-4d0f-a8f7-b14929f558e5"
  }, {
    title: "Analytics & Insights",
    image: "📈",
    description: "Make data-driven decisions with real-time analytics and reporting",
    mpid: "859a6380-ef96-4387-ab85-2d7c3829a4ca"
  }, {
    title: "Customer Feedback",
    image: "💬",
    description: "Collect and analyze customer feedback to improve your products continuously",
    mpid: "52e7afd6-ed3b-453a-bf75-de381f03b895"
  }] as any[];
  return <div className="flexible-workflows-section" data-magicpath-id="0" data-magicpath-path="FlexibleWorkflowsSection.tsx">
      <div className="flexible-workflows-section__header" data-magicpath-id="1" data-magicpath-path="FlexibleWorkflowsSection.tsx">
        <h2 style={{
        display: "none"
      }} data-magicpath-id="2" data-magicpath-path="FlexibleWorkflowsSection.tsx">Flexible Workflows</h2>
        <div className="flexible-workflows-section__header__controls" style={{
        display: "none"
      }} data-magicpath-id="3" data-magicpath-path="FlexibleWorkflowsSection.tsx">
          <button className="flexible-workflows-section__header__controls__button" data-magicpath-id="4" data-magicpath-path="FlexibleWorkflowsSection.tsx">
            <ChevronLeft data-magicpath-id="5" data-magicpath-path="FlexibleWorkflowsSection.tsx" />
          </button>
          <button className="flexible-workflows-section__header__controls__button" data-magicpath-id="6" data-magicpath-path="FlexibleWorkflowsSection.tsx">
            <ChevronRight style={{
            display: "none"
          }} data-magicpath-id="7" data-magicpath-path="FlexibleWorkflowsSection.tsx" />
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