import React from 'react';
import { 
  LayoutTemplate, 
  Smartphone, 
  Code2, 
  Sparkles, 
  RefreshCw, 
  Zap,
  ArrowRight,
  Check
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectServiceForInquiry?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutTemplate':
        return <LayoutTemplate className="w-5 h-5" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5" />;
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      default:
        return <LayoutTemplate className="w-5 h-5" />;
    }
  };

  const handleInquire = (serviceTitle: string) => {
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(serviceTitle);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FAF8F5] relative border-t border-[#EFE8EC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C97A8E] block mb-2">
              SPECIALIZED OFFERINGS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2E1325] tracking-tight font-medium">
              My Services
            </h2>
            <div className="w-12 h-[2px] bg-[#C97A8E] mt-4" />
          </div>

          <p className="text-sm sm:text-base text-[#6E5767] max-w-md text-left leading-relaxed">
            From bespoke custom WordPress themes to modern frontend codebases, every project is crafted with refined aesthetics, smooth responsiveness, and long-term scalability.
          </p>
        </div>

        {/* Six Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="luxury-card rounded-2xl p-7 flex flex-col justify-between text-left group hover:-translate-y-1"
            >
              <div>
                {/* Header: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-xl font-light text-[#A893A2]">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0F4] text-[#C97A8E] group-hover:bg-[#C97A8E] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2E1325] mb-3 leading-snug group-hover:text-[#C97A8E] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#5E4757] leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 mb-6 pt-4 border-t border-[#F3ECEF]">
                  {service.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#523E4C]">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#FAF0F4] text-[#C97A8E] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer: Technology Stack & Inquiry Link */}
              <div className="pt-4 border-t border-[#F3ECEF] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 text-[11px] text-[#7C6675]">
                  {service.technologies.slice(0, 2).map((tech, i) => (
                    <span key={i}>
                      {tech}
                      {i < 1 && service.technologies.length > 1 ? ' · ' : ''}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleInquire(service.title)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#2E1325] hover:text-[#C97A8E] transition-colors cursor-pointer group/btn"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
