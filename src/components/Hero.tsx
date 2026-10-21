import React from 'react';
import { ArrowDownRight, Sparkles, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, ASSETS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Subtle background ambient gradients in muted lavender and warm ivory */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-0 w-[500px] h-[500px] bg-[#EAE2F3]/40 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <div 
        aria-hidden="true" 
        className="absolute top-48 left-0 w-[420px] h-[420px] bg-[#F7EBF0]/50 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Two-column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Presentation */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability & Role Kicker */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C6675]">
                WORDPRESS & FRONTEND DEVELOPER
              </span>
              <span className="text-[#C5B5C1]" aria-hidden="true">/</span>
              <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4D3847]">
                <span className="w-2 h-2 rounded-full bg-[#528767]" aria-hidden="true" />
                <span>{PERSONAL_INFO.availability}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2E1325] leading-[1.12] tracking-tight mb-6 max-w-2xl text-balance font-medium">
              I Turn Ideas Into{' '}
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#B96A7E] via-[#C97A8E] to-[#8C7DAA]">
                Beautiful Digital Experiences.
              </span>
            </h1>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-[#5E4757] leading-relaxed mb-8 max-w-xl font-normal">
              {PERSONAL_INFO.bioShort}
            </p>

            {/* Experience Badge & Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#34152B] hover:bg-[#48203D] active:bg-[#280F21] rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <span>Explore My Work</span>
                <ArrowDownRight className="w-4 h-4 text-[#D8B4C0]" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 text-sm font-semibold text-[#34152B] bg-white hover:bg-[#FAF5F7] border border-[#E3D7DE] rounded-xl transition-all duration-200 shadow-xs hover:border-[#D0BDC9] hover:-translate-y-0.5"
              >
                Let’s Work Together
              </a>

              {/* 3+ Years of Experience Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#F6EEF3] border border-[#E8DCE3] text-xs font-medium text-[#4D3847]">
                <ShieldCheck className="w-4 h-4 text-[#C97A8E]" />
                <span className="font-semibold text-[#2E1325]">3+ Years</span>
                <span>of Commercial Experience</span>
              </div>
            </div>

            {/* Core Competencies Quick Summary */}
            <div className="pt-6 border-t border-[#E8DFE5]/80 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#6F5768]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C97A8E]" />
                Custom WordPress Themes
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C97A8E]" />
                Elementor Pro Systems
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C97A8E]" />
                Mobile-First Frontend Code
              </span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Portrait & Floating UI Badges */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Soft Lavender Background Composition Shape */}
            <div className="relative w-full max-w-md">
              <div 
                aria-hidden="true" 
                className="absolute -inset-4 bg-gradient-to-tr from-[#E3D9EE] via-[#EFE6F0] to-[#F7ECEF] rounded-[2.5rem] -rotate-2 transform transition-transform group-hover:rotate-0 duration-500 -z-10"
              />

              {/* Main Portrait Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white">
                <img
                  src={ASSETS.heroPortrait}
                  alt="Rida Fatima, professional WordPress and Frontend Developer in modern studio"
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[4/3] hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle Image Vignette Overlay */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 bg-gradient-to-t from-[#2E1325]/25 via-transparent to-transparent pointer-events-none"
                />
              </div>

              {/* Floating UI Card 1: Top-Right "Design + Development" Badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 luxury-glass rounded-2xl px-4 py-2.5 shadow-lg border border-white/80 flex items-center gap-2.5 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-8 h-8 rounded-lg bg-[#FAF0F4] text-[#C97A8E] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#2E1325] block uppercase tracking-wide leading-tight">
                    Design + Development
                  </span>
                  <span className="text-[10px] text-[#7C6675] block leading-tight">
                    Pixel-Perfect Precision
                  </span>
                </div>
              </div>

              {/* Floating UI Card 2: Bottom-Left Performance & Responsiveness */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 luxury-glass rounded-2xl p-3.5 shadow-lg border border-white/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#EFE9F6] text-[#7E6EA5] flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#2E1325]">3+ Years Experience</span>
                    <span className="text-[10px] text-[#528767] font-semibold bg-[#EAF3ED] px-1.5 py-0.5 rounded">Verified</span>
                  </div>
                  <span className="text-[11px] text-[#7C6675] block mt-0.5">
                    100% Mobile & Tablet Responsive
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Full-Width Key Metrics Strip Below the Hero Split */}
        <div className="mt-16 pt-10 border-t border-[#E8DFE5] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-left">
            <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#2E1325] block tracking-tight">
              3+ Years
            </span>
            <span className="text-xs font-medium text-[#7C6675] uppercase tracking-wider block mt-1">
              Commercial Experience
            </span>
          </div>

          <div className="text-left">
            <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#2E1325] block tracking-tight">
              100%
            </span>
            <span className="text-xs font-medium text-[#7C6675] uppercase tracking-wider block mt-1">
              Responsive Standards
            </span>
          </div>

          <div className="text-left">
            <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#2E1325] block tracking-tight">
              30+
            </span>
            <span className="text-xs font-medium text-[#7C6675] uppercase tracking-wider block mt-1">
              Websites & Pages Built
            </span>
          </div>

          <div className="text-left">
            <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#2E1325] block tracking-tight">
              Sub-2s
            </span>
            <span className="text-xs font-medium text-[#7C6675] uppercase tracking-wider block mt-1">
              Target Load Optimization
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
