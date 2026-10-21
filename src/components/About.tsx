import React from 'react';
import { Download, FileText, Check, Award, Layout, Smartphone } from 'lucide-react';
import { PERSONAL_INFO, ASSETS } from '../data/portfolioData';

interface AboutProps {
  onOpenCvModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCvModal }) => {
  const handleDirectDownloadCv = () => {
    // Generate and download a formatted resume file
    const cvContent = `=====================================================
RIDA FATIMA — WORDPRESS & FRONTEND DEVELOPER
=====================================================
Email: ${PERSONAL_INFO.email}
Phone / WhatsApp: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
Experience: 3+ Years of Professional Commercial Experience
Portfolio: Online Luxury Showcase

PROFESSIONAL SUMMARY:
Dedicated WordPress and Frontend Developer with 3+ years of experience crafting responsive, user-friendly, and visually appealing web experiences. Specialized in bridging high-end editorial luxury design with clean, maintainable, lightning-fast codebases.

CORE EXPERTISE:
- WordPress Website Development (Custom Themes, Child Themes, WooCommerce, ACF)
- Elementor Pro (Theme Builder, Global Design Systems, Dynamic Loops)
- Frontend Development (Semantic HTML5, CSS3, Flexbox/Grid, Modern JavaScript ES6+)
- Responsive Web Design (Mobile-First Architecture, Breakpoint QA)
- Performance Optimization (Core Web Vitals, Image Compression, Caching)
- Cross-Browser Compatibility (Safari, Chrome, Firefox, iOS, Android)
- Version Control (Git, GitHub)
- Technical On-Page SEO Hygiene

COMMERCIAL EXPERIENCE:
- 3+ Years delivering custom WordPress websites, e-commerce storefronts, and conversion-focused landing pages.
- Successfully built and launched 30+ responsive web interfaces across fashion, real estate, professional services, and tech.
- Collaborated with international design agencies, founders, and private clients worldwide.

EDUCATION & PASSION:
- Degree in Computer Science / Web Technologies
- Obsessive eye for editorial typography, whitespace harmony, and micro-interactions.
=====================================================`;

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Rida_Fatima_Developer_CV.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C97A8E] block mb-2">
            BIOGRAPHY & PHILOSOPHY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2E1325] tracking-tight font-medium">
            A Little About Me
          </h2>
          <div className="w-12 h-[2px] bg-[#C97A8E] mt-4" />
        </div>

        {/* Layout: Image + Editorial Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Studio Workspace Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#EBE1E7] bg-white group">
              <img
                src={ASSETS.workspace}
                alt="Rida Fatima's clean creative workspace studio"
                className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-102 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div 
                aria-hidden="true" 
                className="absolute inset-0 bg-gradient-to-t from-[#2E1325]/40 via-transparent to-transparent pointer-events-none"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-medium tracking-wide uppercase text-white/90 block">
                  Studio Environment
                </span>
                <span className="text-xs text-white/80 font-normal">
                  Where ideas are engineered into pixel-perfect reality
                </span>
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div 
              aria-hidden="true" 
              className="absolute -bottom-3 -right-3 w-full h-full border border-[#D8C7D3] rounded-2xl -z-10 pointer-events-none"
            />
          </div>

          {/* Right Column: Narrative, 3 Pillars & CV Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <p className="text-lg text-[#34152B] leading-relaxed mb-5 font-normal">
              {PERSONAL_INFO.bioLong}
            </p>

            <p className="text-sm sm:text-base text-[#5E4757] leading-relaxed mb-8">
              I believe a website should be more than just a digital brochure; it should be an unforgettable extension of your brand’s prestige. Over the past 3 years, I have collaborated with businesses, agency directors, and founders to translate their unique identities into fluid, intuitive digital platforms that leave a lasting impression.
            </p>

            {/* Three Core Competency Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
              
              {/* Pillar 1 */}
              <div className="p-4 rounded-xl bg-white border border-[#EFE8EC] shadow-xs text-left">
                <div className="w-8 h-8 rounded-lg bg-[#FAF0F4] text-[#C97A8E] flex items-center justify-center mb-2.5">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2E1325] leading-tight mb-1">
                  3+ Years Experience
                </h3>
                <p className="text-xs text-[#7C6675] leading-relaxed">
                  Dedicated commercial experience crafting custom web solutions.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-4 rounded-xl bg-white border border-[#EFE8EC] shadow-xs text-left">
                <div className="w-8 h-8 rounded-lg bg-[#FAF0F4] text-[#C97A8E] flex items-center justify-center mb-2.5">
                  <Layout className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2E1325] leading-tight mb-1">
                  WordPress Dev
                </h3>
                <p className="text-xs text-[#7C6675] leading-relaxed">
                  Custom themes, Elementor mastery, and effortless client editing.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-4 rounded-xl bg-white border border-[#EFE8EC] shadow-xs text-left">
                <div className="w-8 h-8 rounded-lg bg-[#FAF0F4] text-[#C97A8E] flex items-center justify-center mb-2.5">
                  <Smartphone className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#2E1325] leading-tight mb-1">
                  Responsive Frontend
                </h3>
                <p className="text-xs text-[#7C6675] leading-relaxed">
                  Clean HTML5, CSS3, JavaScript, and touch-first performance.
                </p>
              </div>

            </div>

            {/* Key Working Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8 text-xs text-[#4D3847]">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#FAF0F4] text-[#C97A8E] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Semantic HTML5 & modern CSS3 standards</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#FAF0F4] text-[#C97A8E] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Elementor Pro visual & theme builder mastery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#FAF0F4] text-[#C97A8E] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Rigorous cross-browser QA & speed audits</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#FAF0F4] text-[#C97A8E] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Direct, honest communication from day one</span>
              </div>
            </div>

            {/* Download My CV Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenCvModal}
                className="px-5 py-3 text-sm font-semibold text-white bg-[#34152B] hover:bg-[#48203D] active:bg-[#280F21] rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#D8B4C0]" />
                <span>View Full CV & Credentials</span>
              </button>

              <button
                onClick={handleDirectDownloadCv}
                className="px-4 py-3 text-sm font-medium text-[#34152B] bg-white hover:bg-[#FAF5F7] border border-[#E3D7DE] rounded-xl transition-all duration-200 shadow-2xs hover:border-[#D0BDC9] inline-flex items-center gap-2 cursor-pointer"
                title="Download formatted text CV"
              >
                <Download className="w-4 h-4 text-[#7C6675]" />
                <span>Download CV (.txt)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
