import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'skills', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8DFE5]/80 py-3.5 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark / Monogram */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C97A8E] rounded-md"
          aria-label="Rida Fatima Home"
        >
          <div className="w-9 h-9 rounded-full bg-[#34152B] text-[#FAF8F5] flex items-center justify-center font-serif text-lg font-semibold tracking-wide transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#C97A8E]">
            RF.
          </div>
          <div className="hidden sm:block">
            <span className="font-serif text-lg font-semibold tracking-tight text-[#34152B] block leading-none">
              Rida Fatima
            </span>
            <span className="text-[10px] tracking-widest text-[#7C6675] uppercase block mt-0.5">
              WordPress & Frontend
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Clean single-line text links) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4D3847]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#C97A8E] ${
                  isActive ? 'text-[#2E1325] font-semibold' : 'text-[#5E4757]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C97A8E] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions (CV & Hire Me) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCvModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#4D3847] hover:text-[#2E1325] bg-[#F3ECF0] hover:bg-[#EBE2E7] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            title="View developer CV"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-4 sm:px-5 py-2 text-xs font-semibold text-white bg-[#34152B] hover:bg-[#48203D] active:bg-[#280F21] rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Hire Me</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#34152B] hover:bg-[#F0E6EC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C97A8E]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8DFE5] px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-2 text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-[#C97A8E] font-semibold'
                    : 'text-[#34152B] hover:text-[#C97A8E]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#E8DFE5] flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="text-sm font-medium text-[#4D3847] hover:text-[#2E1325] flex items-center gap-1"
              >
                <span>View Full CV</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-[#7C6675] hover:text-[#34152B]"
              >
                Direct WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
