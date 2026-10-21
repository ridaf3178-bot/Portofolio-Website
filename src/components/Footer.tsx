import React from 'react';
import { ArrowUp, Mail, MessageCircle, Github, Linkedin, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2E1325] text-[#FAF8F5] pt-16 pb-12 relative overflow-hidden">
      
      {/* Subtle background ambient glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-[#6E3052]/20 rounded-full blur-3xl pointer-events-none -z-0"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10 text-left">
          
          {/* Brand & Monogram Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#2E1325] flex items-center justify-center font-serif text-xl font-bold">
                RF.
              </div>
              <div>
                <span className="font-serif text-xl font-semibold tracking-tight text-white block">
                  Rida Fatima
                </span>
                <span className="text-xs text-[#DEC8D4] tracking-widest uppercase block">
                  WordPress & Frontend Developer
                </span>
              </div>
            </div>

            <p className="text-sm text-[#D1B8C7] leading-relaxed max-w-sm">
              Creating bespoke, responsive websites that marry luxury editorial aesthetics with high-performance code and effortless client workflows.
            </p>

            {/* Quick Status */}
            <div className="inline-flex items-center gap-2 text-xs text-[#E1D3DC] pt-1">
              <span className="w-2 h-2 rounded-full bg-[#5FB87E]" />
              <span>Available for select freelance and contract projects worldwide</span>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C97A8E]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#D1B8C7]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Me</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">My Services</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Skills & Tech Stack</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Client Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Inquiries</a>
              </li>
            </ul>
          </div>

          {/* Contact & Socials Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C97A8E]">
              Direct Inquiries
            </h4>
            
            <div className="space-y-2.5 text-sm text-[#D1B8C7]">
              <div>
                <span className="text-xs text-[#A98E9F] block">Email:</span>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-white transition-colors font-medium"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div>
                <span className="text-xs text-[#A98E9F] block">WhatsApp / Phone:</span>
                <a 
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors font-medium"
                >
                  {PERSONAL_INFO.formattedPhone}
                </a>
              </div>

              <div>
                <span className="text-xs text-[#A98E9F] block">Location:</span>
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Social Icons & CV Action */}
            <div className="pt-3 flex flex-wrap items-center gap-2">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#3D7C54] text-white flex items-center justify-center transition-colors"
                title="WhatsApp Direct"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#C97A8E] text-white flex items-center justify-center transition-colors"
                title="Direct Email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors cursor-pointer ml-1"
              >
                View CV
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A98E9F]">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Rida Fatima. All rights reserved. Crafted with clean code & luxury design.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#DEC8D4] hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
};
