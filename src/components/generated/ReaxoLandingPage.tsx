import React from 'react';
import HeroSection from './HeroSection';
import CustomerCarouselSection from './CustomerCarouselSection';
import SuccessSupportSection from './SuccessSupportSection';
import FlexibleWorkflowsSection from './FlexibleWorkflowsSection';
import WhyTeamsInnovateSection from './WhyTeamsInnovateSection';
import Footer from './Footer';
import CursorSnowEffect from './CursorSnowEffect';
const ReaxoLandingPage: React.FC = () => {
  return <main className="min-h-screen bg-transparent relative">
      <CursorSnowEffect />
      <HeroSection />
      <CustomerCarouselSection />
      <SuccessSupportSection />
      <FlexibleWorkflowsSection />
      <WhyTeamsInnovateSection />
      <Footer />
    </main>;
};
export default ReaxoLandingPage;