import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const FlexibleWorkflowsSection: React.FC = () => {
  const workflows = [{
    title: "Boost Engagement",
    image: "🚀",
    description: "Boost your social engagement with automated scheduling and smart analytics",
    mpid: "7ce8b89a-165d-4e28-91d6-d8551e679a24"
  }, {
    title: "Schedule Post",
    image: "🎨",
    description: "Streamline your content strategy with auto-posting and real-time insights",
    mpid: "e94c4333-a0d7-45bc-8976-d1dc47d5171b"
  }, {
    title: "Deep Analysis",
    image: "📊",
    description: "Deep-dive into performance with multi-metric post insights",
    mpid: "454080fa-06e2-4f17-9bab-03026fb62b67"
  }, {
    title: "Quality Assurance",
    image: "✅",
    description: "Ensure product quality with comprehensive testing and review processes",
    mpid: "98996252-69ea-4554-b5fa-9c6ac7975112"
  }, {
    title: "Analytics & Insights",
    image: "📈",
    description: "Make data-driven decisions with real-time analytics and reporting",
    mpid: "33225af7-ff71-4625-8502-2060dd604187"
  }, {
    title: "Customer Feedback",
    image: "💬",
    description: "Collect and analyze customer feedback to improve your products continuously",
    mpid: "92eae283-a9b1-49c0-95f8-793706dba97d"
  }] as any[];
  return <div className="flexible-workflows-section" data-magicpath-id="0" data-magicpath-path="FlexibleWorkflowsSection.tsx">
      <div className="flexible-workflows-section__header" data-magicpath-id="1" data-magicpath-path="FlexibleWorkflowsSection.tsx">
        <h2 data-magicpath-id="2" data-magicpath-path="FlexibleWorkflowsSection.tsx">Flexible Workflows</h2>
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
              <div className="flexible-workflows-section__content__workflow__title" data-magicpath-uuid={(workflow as any)["mpid"] ?? "unsafe"} data-magicpath-field="title:unknown" data-magicpath-id="11" data-magicpath-path="FlexibleWorkflowsSection.tsx">
                {workflow.title}
              </div>
              <div className="flexible-workflows-section__content__workflow__description" data-magicpath-uuid={(workflow as any)["mpid"] ?? "unsafe"} data-magicpath-field="description:unknown" data-magicpath-id="12" data-magicpath-path="FlexibleWorkflowsSection.tsx">
                {workflow.description}
              </div>
            </motion.div>)}
        </AnimatePresence>
      </div>
    </div>;
};
export default FlexibleWorkflowsSection;