import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
  };

  const handleInquireAboutProject = (projectTitle: string) => {
    setPrefilledService(`Custom build like "${projectTitle}"`);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#34152B] selection:bg-[#EBD8DF] selection:text-[#2E1325]">
      
      {/* Premium Sticky Navigation */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      <main>
        {/* 1. Stunning Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 3. My Services (6 Cards) */}
        <Services onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* 4. My Skills (12 Skills with Interactive Calibration) */}
        <Skills />

        {/* 5. Featured Projects (6 Large Mockup Cards + Simulator + Case Studies) */}
        <Projects onInquireAboutProject={handleInquireAboutProject} />

        {/* 6. Work Process (4-Step Timeline) */}
        <Process />

        {/* 7. Why Work With Me (6 Editorial Points) */}
        <WhyWorkWithMe />

        {/* 8. Client Testimonials Carousel */}
        <Testimonials />

        {/* 9. Contact Section with Working Form & WhatsApp */}
        <Contact prefilledService={prefilledService} />
      </main>

      {/* 10. Elegant Footer */}
      <Footer onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Interactive CV Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />

    </div>
  );
}
