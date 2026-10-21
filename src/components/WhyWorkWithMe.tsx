import React from 'react';
import { 
  ShieldCheck, 
  Smartphone, 
  Sparkles, 
  Code2, 
  Users, 
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { WHY_WORK_WITH_ME, PERSONAL_INFO } from '../data/portfolioData';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ShieldCheck className="w-5 h-5 text-[#C97A8E]" />;
      case 1:
        return <Smartphone className="w-5 h-5 text-[#9587B6]" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-[#C97A8E]" />;
      case 3:
        return <Code2 className="w-5 h-5 text-[#9587B6]" />;
      case 4:
        return <Users className="w-5 h-5 text-[#C97A8E]" />;
      case 5:
        return <MessageSquare className="w-5 h-5 text-[#9587B6]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#C97A8E]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] relative border-t border-[#EFE8EC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C97A8E] block mb-2">
              THE VALUE PROPOSITION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2E1325] tracking-tight font-medium">
              Why Work With Me?
            </h2>
            <div className="w-12 h-[2px] bg-[#C97A8E] mt-4 mb-4" />
            <p className="text-sm sm:text-base text-[#6E5767] leading-relaxed">
              Real commercial discipline grounded in 3 years of continuous client work. Transparent communication, clean codebases, and zero guesswork.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#34152B] hover:text-[#C97A8E] transition-colors whitespace-nowrap self-start md:self-end"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6 Editorial Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <div
              key={item.number}
              className="luxury-card rounded-2xl p-7 flex flex-col justify-between text-left group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0F4] flex items-center justify-center">
                    {getIcon(idx)}
                  </div>
                  <span className="font-mono text-xs text-[#9B8897] font-semibold">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold text-[#2E1325] mb-3 leading-snug group-hover:text-[#C97A8E] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#5E4757] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#F5EDF1] flex items-center gap-2 text-xs text-[#7C6675]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C97A8E]" />
                <span>Honest, reliable developer commitment</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
