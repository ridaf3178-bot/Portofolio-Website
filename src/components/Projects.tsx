import React, { useState } from 'react';
import { ExternalLink, Eye, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onInquireAboutProject?: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onInquireAboutProject }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalInitialTab, setModalInitialTab] = useState<'caseStudy' | 'preview'>('caseStudy');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'WordPress', 'Frontend', 'E-Commerce', 'Portfolio & Brand'];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeCategory === 'All') return true;
    return proj.category === activeCategory;
  });

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setModalInitialTab('caseStudy');
  };

  const handleOpenLivePreview = (project: Project) => {
    setSelectedProject(project);
    setModalInitialTab('preview');
  };

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#FAF8F5] relative border-t border-[#EFE8EC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C97A8E] block mb-2">
              CURATED PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2E1325] tracking-tight font-medium">
              Featured Projects
            </h2>
            <div className="w-12 h-[2px] bg-[#C97A8E] mt-4 mb-4" />
            <p className="text-sm sm:text-base text-[#6E5767] leading-relaxed">
              A curated selection of responsive WordPress websites, bespoke frontend applications, and luxury digital flagships built with meticulous attention to detail.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F1EAEF] rounded-xl border border-[#E6DBE3]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-white text-[#2E1325] shadow-xs font-semibold'
                    : 'text-[#6F5768] hover:text-[#2E1325]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Large Premium Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="luxury-card rounded-2xl overflow-hidden flex flex-col justify-between text-left group hover:-translate-y-1"
            >
              <div>
                {/* Image Mockup Container with Subtle Hover Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE2E8] border-b border-[#EFE8EC]">
                  <img
                    src={project.image}
                    alt={`${project.title} responsive mockup`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Classification Badge Overlay */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-white/95 text-[#34152B] shadow-2xs backdrop-blur-xs">
                      {project.badgeType}
                    </span>
                  </div>

                  {/* Category Pill Overlay */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-[#34152B]/85 text-white backdrop-blur-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Quick Actions Bar */}
                  <div className="absolute inset-0 bg-[#2E1325]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => handleOpenLivePreview(project)}
                      className="px-3.5 py-2 text-xs font-medium text-white bg-white/20 hover:bg-white hover:text-[#2E1325] rounded-xl backdrop-blur-md transition-all cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Live Preview</span>
                    </button>
                    <button
                      onClick={() => handleOpenDetails(project)}
                      className="px-3.5 py-2 text-xs font-semibold text-white bg-[#C97A8E] hover:bg-[#B36477] rounded-xl shadow-sm transition-all cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2E1325] mb-2 leading-snug group-hover:text-[#C97A8E] transition-colors">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#5E4757] leading-relaxed mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Technology Tags (Clean unboxed with typographic separators) */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#7C6675] mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i}>
                        {tech}
                        {i < Math.min(project.technologies.length, 3) - 1 ? ' · ' : ''}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[11px] text-[#A694A1]">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div className="px-6 pb-6 pt-3 border-t border-[#F3ECEF] flex items-center justify-between">
                <button
                  onClick={() => handleOpenLivePreview(project)}
                  className="text-xs font-medium text-[#7C6675] hover:text-[#2E1325] transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#C97A8E]" />
                  <span>Preview Simulator</span>
                </button>

                <button
                  onClick={() => handleOpenDetails(project)}
                  className="text-xs font-semibold text-[#34152B] hover:text-[#C97A8E] transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Full Modal Viewer & Device Simulator */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          initialTab={modalInitialTab}
          onClose={() => setSelectedProject(null)}
          onInquireAboutProject={onInquireAboutProject}
        />
      )}
    </section>
  );
};
