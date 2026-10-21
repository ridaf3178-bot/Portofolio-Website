import React, { useState, useEffect } from 'react';
import { 
  X, 
  Monitor, 
  Tablet, 
  Smartphone, 
  Check, 
  ExternalLink,
  Layers, 
  Clock, 
  UserCheck, 
  Compass,
  Sparkles
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  initialTab?: 'caseStudy' | 'preview';
  onClose: () => void;
  onInquireAboutProject?: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  initialTab = 'caseStudy',
  onClose,
  onInquireAboutProject,
}) => {
  const [activeTab, setActiveTab] = useState<'caseStudy' | 'preview'>(initialTab);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleInquire = () => {
    onClose();
    if (onInquireAboutProject) {
      onInquireAboutProject(project.title);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#2E1325]/70 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div 
        className="absolute inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Dialog Container */}
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#FAF8F5] rounded-2xl sm:rounded-3xl shadow-2xl border border-[#E5DBE2] flex flex-col overflow-hidden z-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-white border-b border-[#EBE2E8] flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C97A8E]">
              {project.category}
            </span>
            <span className="text-[#D3C4CF]" aria-hidden="true">/</span>
            <span className="text-xs font-medium text-[#7C6675]">
              {project.badgeType}
            </span>
          </div>

          {/* Center Tabs: Case Study vs Device Preview */}
          <div className="hidden sm:flex items-center gap-1 p-1 bg-[#F3ECEF] rounded-xl border border-[#E6DBE3]">
            <button
              onClick={() => setActiveTab('caseStudy')}
              className={`px-3.5 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'caseStudy'
                  ? 'bg-white text-[#2E1325] shadow-2xs font-semibold'
                  : 'text-[#6F5768] hover:text-[#2E1325]'
              }`}
            >
              Case Study & Details
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3.5 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'preview'
                  ? 'bg-white text-[#2E1325] shadow-2xs font-semibold'
                  : 'text-[#6F5768] hover:text-[#2E1325]'
              }`}
            >
              Interactive Device Simulator
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#5E4757] hover:text-[#2E1325] hover:bg-[#F3ECEF] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">

          {/* Mobile Tab Switcher */}
          <div className="sm:hidden flex items-center justify-center gap-2 mb-6 p-1 bg-[#F3ECEF] rounded-xl">
            <button
              onClick={() => setActiveTab('caseStudy')}
              className={`flex-1 py-1.5 text-xs font-medium rounded-lg ${
                activeTab === 'caseStudy' ? 'bg-white text-[#2E1325] font-semibold' : 'text-[#6F5768]'
              }`}
            >
              Case Study
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex-1 py-1.5 text-xs font-medium rounded-lg ${
                activeTab === 'preview' ? 'bg-white text-[#2E1325] font-semibold' : 'text-[#6F5768]'
              }`}
            >
              Device Simulator
            </button>
          </div>

          {/* TAB 1: FULL CASE STUDY OVERVIEW */}
          {activeTab === 'caseStudy' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              
              {/* Header Title & Summary */}
              <div className="text-left">
                <h2 id="modal-title" className="font-serif text-2xl sm:text-4xl font-semibold text-[#2E1325] mb-3">
                  {project.title}
                </h2>
                <p className="text-base text-[#5E4757] leading-relaxed max-w-3xl">
                  {project.fullDescription}
                </p>
              </div>

              {/* Main Visual Image Showcase */}
              <div className="rounded-2xl overflow-hidden border border-[#E9E0E6] shadow-md bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover max-h-[460px]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Project Meta Bar: Role, Client, Year, Tech */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-[#EFE8EC]">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#7C6675] font-medium block">
                    Role
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#2E1325] block mt-1">
                    {project.role}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#7C6675] font-medium block">
                    Classification
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#2E1325] block mt-1">
                    {project.badgeType}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#7C6675] font-medium block">
                    Timeline
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#2E1325] block mt-1">
                    {project.year}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#7C6675] font-medium block">
                    Client / Context
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#2E1325] block mt-1 truncate">
                    {project.client}
                  </span>
                </div>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="p-6 rounded-2xl bg-white border border-[#EFE8EC]">
                  <div className="flex items-center gap-2 mb-3">
                    <Compass className="w-4 h-4 text-[#C97A8E]" />
                    <h3 className="font-serif text-lg font-semibold text-[#2E1325]">
                      The Project Challenge
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5E4757] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#EFE8EC]">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-[#528767]" />
                    <h3 className="font-serif text-lg font-semibold text-[#2E1325]">
                      Technical Solution
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5E4757] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Features & Deliverables */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="p-6 rounded-2xl bg-white border border-[#EFE8EC]">
                  <h3 className="font-serif text-base font-semibold text-[#2E1325] mb-3">
                    Key Features Included
                  </h3>
                  <div className="space-y-2">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#4D3847]">
                        <Check className="w-3.5 h-3.5 text-[#C97A8E] mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#EFE8EC]">
                  <h3 className="font-serif text-base font-semibold text-[#2E1325] mb-3">
                    Deliverables & Milestones
                  </h3>
                  <div className="space-y-2">
                    {project.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#4D3847]">
                        <Check className="w-3.5 h-3.5 text-[#528767] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technology Tags */}
              <div className="text-left pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7C6675] block mb-2">
                  Built With
                </span>
                <div className="flex flex-wrap gap-2 text-xs text-[#4D3847]">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-white px-3 py-1.5 rounded-lg border border-[#E2D8DF]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: INTERACTIVE DEVICE PREVIEW SIMULATOR */}
          {activeTab === 'preview' && (
            <div className="space-y-6 text-center animate-in fade-in duration-200">
              
              {/* Simulator Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-white rounded-xl border border-[#EBE2E8]">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setDeviceMode('desktop')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      deviceMode === 'desktop'
                        ? 'bg-[#34152B] text-white'
                        : 'text-[#6F5768] hover:text-[#2E1325]'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop (1440px)</span>
                  </button>

                  <button
                    onClick={() => setDeviceMode('tablet')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      deviceMode === 'tablet'
                        ? 'bg-[#34152B] text-white'
                        : 'text-[#6F5768] hover:text-[#2E1325]'
                    }`}
                  >
                    <Tablet className="w-3.5 h-3.5" />
                    <span>Tablet (768px)</span>
                  </button>

                  <button
                    onClick={() => setDeviceMode('mobile')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      deviceMode === 'mobile'
                        ? 'bg-[#34152B] text-white'
                        : 'text-[#6F5768] hover:text-[#2E1325]'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile (390px)</span>
                  </button>
                </div>

                <div className="text-xs text-[#7C6675]">
                  <span>Viewing: </span>
                  <strong className="text-[#2E1325]">{project.title}</strong>
                </div>
              </div>

              {/* Simulated Device Frame Container */}
              <div className="flex justify-center p-2 sm:p-6 bg-[#ECE4EA] rounded-2xl border border-[#DFD3DC]">
                <div
                  className={`transition-all duration-300 ease-out bg-white rounded-2xl shadow-xl overflow-hidden border border-[#D9CDD6] ${
                    deviceMode === 'desktop'
                      ? 'w-full max-w-4xl'
                      : deviceMode === 'tablet'
                      ? 'w-[720px] max-w-full'
                      : 'w-[360px] max-w-full'
                  }`}
                >
                  {/* Browser Simulated Header Chrome */}
                  <div className="px-4 py-2.5 bg-[#F6EEF3] border-b border-[#E8DDE4] flex items-center justify-between gap-3 text-xs text-[#7C6675]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E5B5C1]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E5D7B5]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#B5E5C1]" />
                    </div>

                    <div className="flex-1 max-w-md px-3 py-1 bg-white rounded-md text-[11px] text-[#5E4757] truncate text-center border border-[#E5DBE2]">
                      https://preview.ridafatima.dev/{project.id}
                    </div>

                    <span className="text-[10px] font-mono font-medium text-[#528767]">
                      LIVE PREVIEW
                    </span>
                  </div>

                  {/* Simulated Viewport Body with Mockup Image */}
                  <div className="relative overflow-y-auto max-h-[500px] bg-[#FAF8F5]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover"
                      referrerPolicy="no-referrer"
                    />

                    {/* Interactive Overlay Info */}
                    <div className="p-4 bg-white/95 backdrop-blur-xs border-t border-[#EFE8EC] text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-xs font-semibold text-[#2E1325] block">
                          Responsive Design Verification
                        </span>
                        <span className="text-[11px] text-[#7C6675]">
                          Zero layout clipping · 100% Mobile fluid breakpoints
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleInquire}
                          className="px-3.5 py-1.5 text-xs font-medium text-white bg-[#34152B] hover:bg-[#48203D] rounded-lg transition-colors cursor-pointer"
                        >
                          Request Similar Website
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Bottom Sticky Action Footer */}
        <div className="px-6 py-4 bg-white border-t border-[#EBE2E8] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#7C6675] hidden sm:block">
            <span>Interested in a similar build? </span>
            <strong className="text-[#2E1325]">Direct delivery within realistic timelines.</strong>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#4D3847] hover:text-[#2E1325] bg-[#F3ECF0] hover:bg-[#EBE2E7] rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleInquire}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#34152B] hover:bg-[#48203D] rounded-xl transition-colors shadow-xs cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Discuss This Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
