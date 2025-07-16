import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const FlexibleWorkflowsSection: React.FC = () => {
  const workflows = [{
    title: "Boost Engagement",
    image: "🚀",
    description: "Boost your social engagement with automated scheduling and smart analytics",
    mpid: "46de936a-2a1b-49f7-8e02-52b654e451a0"
  }, {
    title: "Schedule Post",
    image: "🎨",
    description: "Streamline your content strategy with auto-posting and real-time insights",
    mpid: "5a3862bd-fe49-446a-bd2b-945b4a9ed0e6"
  }, {
    title: "Deep Analysis",
    image: "📊",
    description: "Deep-dive into performance with multi-metric post insights",
    mpid: "54f88cdc-99c5-407f-985c-4a896a79e141"
  }, {
    title: "Quality Assurance",
    image: "✅",
    description: "Ensure product quality with comprehensive testing and review processes",
    mpid: "fafa6d39-6511-484e-9400-ebac05f9f602"
  }, {
    title: "Analytics & Insights",
    image: "📈",
    description: "Make data-driven decisions with real-time analytics and reporting",
    mpid: "04091dd5-7b69-4037-94df-bc6fb6439be3"
  }, {
    title: "Customer Feedback",
    image: "💬",
    description: "Collect and analyze customer feedback to improve your products continuously",
    mpid: "3ea50f13-f97f-4345-8db3-171b81d8a029"
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