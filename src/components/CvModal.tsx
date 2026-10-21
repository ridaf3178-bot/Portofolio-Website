import React, { useEffect } from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, CheckCircle2, ShieldCheck, Briefcase } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, SERVICES } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const textContent = `RIDA FATIMA — CURRICULUM VITAE
WordPress & Frontend Developer (3+ Years Experience)
------------------------------------------------------------
Contact: ${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}

PROFESSIONAL SUMMARY
Experienced WordPress & Frontend Developer with 3+ years of professional commercial experience delivering bespoke, responsive, and performance-optimized web solutions. Proven ability to translate high-fidelity designs into pixel-perfect Elementor templates and clean HTML5/CSS3/JavaScript codebases.

CORE EXPERTISE
- CMS & Page Builders: WordPress (Themes, Child Themes, ACF), Elementor Pro
- Frontend Core: HTML5 Semantic Markup, Modern CSS3 (Flexbox, CSS Grid), JavaScript ES6+
- Responsive Web Design: 100% Fluid Breakpoint QA, Mobile-First Ergonomics
- Performance & SEO: Core Web Vitals Optimization, Image Compression, Technical SEO
- Tools & Version Control: Git, GitHub, Cross-Browser Compatibility Audits

COMMERCIAL EXPERIENCE
Lead WordPress & Frontend Developer — Freelance & Agency Collaborations (2023 - Present)
- Designed and engineered 30+ responsive websites and landing pages for luxury e-commerce, real estate, design agencies, and private clients.
- Built custom Elementor theme frameworks with dynamic loops, custom post types, and WooCommerce checkouts.
- Increased mobile speed scores across client projects, achieving average 90+ Google PageSpeed ratings.
- Maintained 100% on-time delivery across freelance and contract commitments.

SELECT PROJECTS
1. Avenue Haute Couture (E-Commerce Store): Custom WooCommerce with editorial lookbook grid.
2. Aurora Estates (Real Estate Portal): Custom ACF property search and interactive floor plans.
3. Studio Nørdic (Architectural Firm): High-performance portfolio with minimalist brutalist styling.
4. Sarah & Jonathan (Celebration Site): Interactive RSVP web app with accessible form validation.

EDUCATION & CREDENTIALS
- Bachelor of Science in Computer Science / Information Technology
- 3+ Years Verified Hands-On Web Development Practice
------------------------------------------------------------`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Rida_Fatima_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#2E1325]/75 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-[#E5DBE2] flex flex-col overflow-hidden z-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-title"
      >
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#FAF8F5] border-b border-[#EBE2E8] flex items-center justify-between gap-4 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C97A8E]">
              Curriculum Vitae
            </span>
            <span className="text-[#D3C4CF]">/</span>
            <span className="text-xs font-medium text-[#7C6675]">
              Rida Fatima (3+ Years Experience)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadTxt}
              className="px-3 py-1.5 text-xs font-medium text-[#34152B] bg-white hover:bg-[#FAF0F4] border border-[#E0D4DC] rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-[#C97A8E]" />
              <span>Download (.txt)</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium text-white bg-[#34152B] hover:bg-[#48203D] rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5 text-[#D8B4C0]" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#5E4757] hover:text-[#2E1325] hover:bg-[#EBE2E8] transition-colors cursor-pointer ml-1"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 text-left bg-white print:p-0">
          
          {/* Resume Header */}
          <div className="border-b border-[#EFE8EC] pb-8 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 id="cv-title" className="font-serif text-3xl sm:text-4xl font-bold text-[#2E1325]">
                  {PERSONAL_INFO.name}
                </h2>
                <p className="text-sm sm:text-base font-medium text-[#C97A8E] mt-1 tracking-wide">
                  {PERSONAL_INFO.tagline} · 3+ Years Experience
                </p>
              </div>

              {/* Contact Info Pills */}
              <div className="space-y-1.5 text-xs text-[#5E4757]">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C97A8E]" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C97A8E]" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C97A8E]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C97A8E] mb-3">
              Professional Summary
            </h3>
            <p className="text-sm text-[#4D3847] leading-relaxed">
              Dedicated and detail-oriented WordPress and Frontend Developer with 3+ years of professional commercial experience delivering bespoke, responsive, and performance-optimized digital solutions. Specialized in translating high-end agency designs into robust WordPress themes, Elementor Pro templates, and clean semantic HTML5, CSS3, and modern JavaScript codebases. Proven track record of client satisfaction, zero-bloat standards, and timely delivery across luxury e-commerce, real estate, and creative businesses.
            </p>
          </div>

          {/* Technical Skills Breakdown */}
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C97A8E] mb-3">
              Core Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EFE8EC]">
                <span className="text-xs font-semibold text-[#2E1325] block mb-2">CMS & Builders</span>
                <ul className="text-xs text-[#5E4757] space-y-1">
                  <li>• WordPress Customization</li>
                  <li>• Elementor & Elementor Pro</li>
                  <li>• WooCommerce Architecture</li>
                  <li>• Custom Post Types & ACF</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EFE8EC]">
                <span className="text-xs font-semibold text-[#2E1325] block mb-2">Frontend Development</span>
                <ul className="text-xs text-[#5E4757] space-y-1">
                  <li>• HTML5 & Semantic Web</li>
                  <li>• CSS3 (Flexbox, CSS Grid)</li>
                  <li>• JavaScript (ES6+, DOM)</li>
                  <li>• Responsive Multi-Breakpoints</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EFE8EC]">
                <span className="text-xs font-semibold text-[#2E1325] block mb-2">Performance & QA</span>
                <ul className="text-xs text-[#5E4757] space-y-1">
                  <li>• PageSpeed & Core Web Vitals</li>
                  <li>• Cross-Browser QA Testing</li>
                  <li>• Git & GitHub Version Control</li>
                  <li>• Technical On-Page SEO</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Commercial Experience */}
          <div className="mb-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C97A8E] mb-4">
              Professional Experience
            </h3>

            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-[#EADEE6]">
                <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#C97A8E]" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                  <h4 className="font-serif text-lg font-semibold text-[#2E1325]">
                    Lead WordPress & Frontend Developer
                  </h4>
                  <span className="text-xs font-medium text-[#7C6675]">
                    2023 — Present (3+ Years)
                  </span>
                </div>
                <span className="text-xs font-medium text-[#C97A8E] block mb-2">
                  Freelance & Independent Client Engagements
                </span>
                <ul className="text-xs sm:text-sm text-[#4D3847] space-y-2 list-disc list-inside">
                  <li>Engineered and deployed 30+ responsive, custom WordPress and frontend web projects for international clients across luxury retail, real estate, and professional agencies.</li>
                  <li>Constructed reusable Elementor design systems, dynamic loops, and custom layouts that allow non-technical clients to update copy and media effortlessly.</li>
                  <li>Audited and optimized legacy websites, reducing average load times by 40% and achieving 90+ scores on Google PageSpeed Insights.</li>
                  <li>Maintained rigorous cross-browser compatibility across Safari, Chrome, Firefox, iOS Safari, and Android Chrome viewports.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Values */}
          <div className="pt-4 border-t border-[#EFE8EC] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#7C6675]">
            <div>
              <span className="font-semibold text-[#2E1325]">Degree: </span>
              <span>Computer Science & Information Technology</span>
            </div>
            <div>
              <span className="font-semibold text-[#2E1325]">Commitment: </span>
              <span>Clean Code · Zero Slop · Transparent Communication</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
