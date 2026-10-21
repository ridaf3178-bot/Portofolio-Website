import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Star, 
  Info,
  Pause,
  Play
} from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FAF8F5] relative border-t border-[#EFE8EC] overflow-hidden">
      
      {/* Background ambient accent */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F3EBF4]/50 rounded-full blur-3xl pointer-events-none -z-0"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C97A8E] block mb-2">
              CLIENT PERSPECTIVES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2E1325] tracking-tight font-medium">
              Client Testimonials
            </h2>
            <div className="w-12 h-[2px] bg-[#C97A8E] mt-4 mb-4" />
            <p className="text-sm sm:text-base text-[#6E5767] leading-relaxed">
              Real reflections of client satisfaction, collaborative communication, and delivered commercial outcomes.
            </p>
          </div>

          {/* Honest Disclaimer Notice */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FAF0F4] border border-[#ECD3DF] text-xs text-[#7A4052] max-w-md text-left">
            <Info className="w-4 h-4 shrink-0 text-[#C97A8E]" />
            <span>
              <strong>Sample Showcase:</strong> Representative testimonials illustrating client feedback standards until verified live reviews are imported.
            </span>
          </div>
        </div>

        {/* Carousel Showcase Container */}
        <div className="max-w-4xl mx-auto">
          <div className="luxury-glass rounded-3xl p-8 sm:p-12 shadow-xl border border-white/80 relative text-left">
            
            {/* Top Row: Quote Icon + Rating */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF0F4] text-[#C97A8E] flex items-center justify-center">
                <Quote className="w-6 h-6" />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 text-[#C97A8E]" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>

            {/* Testimonial Quote Text */}
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#2E1325] leading-relaxed font-normal mb-8 italic">
              “{current.quote}”
            </blockquote>

            {/* Client Profile Lockup & Project Type */}
            <div className="pt-6 border-t border-[#EFE5EC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#34152B] text-white flex items-center justify-center font-serif font-semibold text-sm tracking-wide">
                  {current.avatarInitials}
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-[#2E1325] leading-tight">
                    {current.clientName}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#7C6675] mt-0.5">
                    <span>{current.role}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-[#4D3847]">{current.companyOrProject}</span>
                  </div>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[10px] uppercase tracking-wider text-[#9C8898] block">
                  Project Scope
                </span>
                <span className="text-xs font-semibold text-[#34152B]">
                  {current.projectType}
                </span>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="mt-8 pt-6 border-t border-[#EFE5EC] flex items-center justify-between">
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx ? 'w-8 bg-[#C97A8E]' : 'w-2 bg-[#DEC8D4] hover:bg-[#BFA4B4]'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next & Pause Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="p-2 rounded-xl text-[#7C6675] hover:text-[#2E1325] hover:bg-[#FAF0F4] transition-colors cursor-pointer"
                  title={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
                  aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
                >
                  {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                <button
                  onClick={prevSlide}
                  className="p-2 rounded-xl text-[#34152B] bg-white hover:bg-[#FAF0F4] border border-[#E5DAE1] shadow-2xs transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={nextSlide}
                  className="p-2 rounded-xl text-[#34152B] bg-white hover:bg-[#FAF0F4] border border-[#E5DAE1] shadow-2xs transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
