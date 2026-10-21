import React from 'react';
import { Search, Compass, Code, Rocket, Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Search className="w-5 h-5" />;
      case '02':
        return <Compass className="w-5 h-5" />;
      case '03':
        return <Code className="w-5 h-5" />;
      case '04':
        return <Rocket className="w-5 h-5" />;
      default:
        return <Search className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#FAF8F5] relative border-t border-[#EFE8EC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C97A8E] block mb-2">
            METHODOLOGY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2E1325] tracking-tight font-medium">
            My Work Process
          </h2>
          <div className="w-12 h-[2px] bg-[#C97A8E] mt-4 mb-4" />
          <p className="text-sm sm:text-base text-[#6E5767] leading-relaxed">
            A transparent four-phase journey ensuring every project is delivered on schedule, within scope, and polished to perfection.
          </p>
        </div>

        {/* 4-Step Interactive Timeline Grid */}
        <div className="relative">
          
          {/* Subtle connecting hairline on desktop */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-1/2 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#DEC8D2] to-transparent -translate-y-16 -z-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="luxury-card rounded-2xl p-7 flex flex-col justify-between text-left group hover:-translate-y-1"
              >
                <div>
                  {/* Step Number & Icon Lockup */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-light text-[#C97A8E]/60 group-hover:text-[#C97A8E] transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF0F4] text-[#C97A8E] flex items-center justify-center group-hover:bg-[#34152B] group-hover:text-white transition-colors duration-300">
                      {getStepIcon(step.step)}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-xl font-semibold text-[#2E1325] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs font-medium text-[#7C6675] mb-4 leading-relaxed">
                    {step.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-[#5E4757] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverable Outcomes */}
                <div className="pt-4 border-t border-[#F3ECEF] space-y-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#937D8D] block">
                    Key Deliverables
                  </span>
                  {step.outcomes.map((outcome, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#4D3847]">
                      <Check className="w-3 h-3 text-[#528767] mt-0.5 shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
