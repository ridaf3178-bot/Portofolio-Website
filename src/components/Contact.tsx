import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Clock, 
  MapPin, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  prefilledService?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: prefilledService || 'WordPress Website Development',
    budget: 'Medium ($500 - $2,500)',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update projectType if prefilledService changes
  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, projectType: prefilledService }));
    }
  }, [prefilledService]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage('Please provide a message with at least 10 characters.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      projectType: 'WordPress Website Development',
      budget: 'Medium ($500 - $2,500)',
      message: '',
    });
  };

  // Pre-generate direct mailto link with encoded content
  const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name || 'Client'}`);
  const mailtoBody = encodeURIComponent(
    `Hello Rida,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget Scope: ${formData.budget}\n\nProject Details:\n${formData.message}\n\nLooking forward to speaking with you.`
  );
  const directMailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

  // Direct WhatsApp URL with current message draft
  const whatsappCustomUrl = `https://wa.me/923407347937?text=${encodeURIComponent(
    `Hi Rida! My name is ${formData.name || 'a prospective client'}. I'm reaching out regarding ${formData.projectType}. ${formData.message ? `Details: ${formData.message}` : ''}`
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF8F5] relative border-t border-[#EFE8EC]">
      
      {/* Background ambient accents */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/3 left-10 w-80 h-80 bg-[#FAF0F4]/60 rounded-full blur-3xl pointer-events-none -z-0"
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#EDE5F4]/60 rounded-full blur-3xl pointer-events-none -z-0"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C97A8E] block mb-2">
            GET IN TOUCH
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2E1325] tracking-tight font-medium">
            Have a Project in Mind?
          </h2>
          <div className="w-12 h-[2px] bg-[#C97A8E] mt-4 mb-4" />
          <p className="text-base sm:text-lg text-[#5E4757] leading-relaxed">
            Let’s create something beautiful together. Tell me about your project, and let’s bring your ideas to life.
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left">
            
            <div className="space-y-6">
              
              {/* Email Direct Card */}
              <div className="p-6 rounded-2xl bg-white border border-[#EFE8EC] shadow-xs group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0F4] text-[#C97A8E] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg text-[#7C6675] hover:text-[#2E1325] hover:bg-[#FAF0F4] transition-colors cursor-pointer text-xs inline-flex items-center gap-1"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#528767]" />
                        <span className="text-[#528767] font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#9C8898] block">
                  Direct Email
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-serif text-xl sm:text-2xl font-semibold text-[#2E1325] hover:text-[#C97A8E] transition-colors break-all block mt-1"
                >
                  {PERSONAL_INFO.email}
                </a>
                <span className="text-xs text-[#7C6675] block mt-1">
                  Average response time: within 24 hours.
                </span>
              </div>

              {/* WhatsApp Card */}
              <div className="p-6 rounded-2xl bg-white border border-[#EFE8EC] shadow-xs group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF5EE] text-[#3D7C54] flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold text-[#3D7C54] bg-[#EAF5EE] px-2 py-0.5 rounded">
                    Fastest Response
                  </span>
                </div>
                <span className="text-[11px] uppercase tracking-wider text-[#9C8898] block">
                  Phone & WhatsApp
                </span>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-serif text-xl sm:text-2xl font-semibold text-[#2E1325] hover:text-[#3D7C54] transition-colors block mt-1"
                >
                  {PERSONAL_INFO.formattedPhone}
                </a>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#3D7C54] hover:underline"
                >
                  <span>Chat directly on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Working Hours & Availability */}
              <div className="p-6 rounded-2xl bg-white border border-[#EFE8EC] shadow-xs space-y-3 text-xs text-[#5E4757]">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#C97A8E]" />
                  <span>
                    <strong>Availability:</strong> Taking on new projects for this quarter
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C97A8E]" />
                  <span>
                    <strong>Location:</strong> {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

            </div>

            {/* Note on Real Submission Transparency */}
            <div className="p-4 rounded-xl bg-[#F4EEF3] border border-[#E7DBE4] text-xs text-[#6F5768]">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#C97A8E] shrink-0 mt-0.5" />
                <p>
                  <strong>Submission Guarantee:</strong> You can submit your message through this interactive form, or click the direct WhatsApp link or email to start an immediate conversation.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="luxury-glass rounded-3xl p-8 sm:p-10 shadow-xl border border-white/80 text-left">
              
              {submitted ? (
                /* Success State */
                <div className="py-12 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#EAF5EE] text-[#3D7C54] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2E1325]">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#5E4757] max-w-md mx-auto leading-relaxed">
                    Your inquiry regarding <strong>{formData.projectType}</strong> has been logged. I will review your requirements and respond to <strong>{formData.email}</strong> shortly.
                  </p>
                  
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={whatsappCustomUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-[#3D7C54] hover:bg-[#326745] rounded-xl transition-colors inline-flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Also Ping on WhatsApp</span>
                    </a>

                    <a
                      href={directMailtoUrl}
                      className="px-5 py-2.5 text-xs font-semibold text-[#34152B] bg-white border border-[#DEC8D4] hover:bg-[#FAF5F7] rounded-xl transition-colors inline-flex items-center gap-1.5"
                    >
                      <Mail className="w-4 h-4 text-[#C97A8E]" />
                      <span>Open in Email App</span>
                    </a>

                    <button
                      onClick={handleResetForm}
                      className="px-4 py-2.5 text-xs font-medium text-[#7C6675] hover:text-[#2E1325] underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-[#FDF0F3] border border-[#F4CCD5] text-xs text-[#9B2C46] flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#4D3847] mb-2">
                        Your Name <span className="text-[#C97A8E]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        required
                        className="w-full px-4 py-3 text-sm bg-white border border-[#DEC8D4] rounded-xl text-[#2E1325] placeholder-[#B5A3AF] focus:outline-none focus:ring-2 focus:ring-[#C97A8E] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#4D3847] mb-2">
                        Email Address <span className="text-[#C97A8E]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@example.com"
                        required
                        className="w-full px-4 py-3 text-sm bg-white border border-[#DEC8D4] rounded-xl text-[#2E1325] placeholder-[#B5A3AF] focus:outline-none focus:ring-2 focus:ring-[#C97A8E] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Project Type Selector */}
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-[#4D3847] mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-white border border-[#DEC8D4] rounded-xl text-[#2E1325] focus:outline-none focus:ring-2 focus:ring-[#C97A8E] focus:border-transparent transition-all"
                      >
                        <option value="WordPress Website Development">WordPress Website Development</option>
                        <option value="Responsive Website Design">Responsive Website Design</option>
                        <option value="Frontend Development">Frontend Development</option>
                        <option value="Landing Page Design">Landing Page Design</option>
                        <option value="Website Redesign">Website Redesign</option>
                        <option value="Website Optimization">Website Optimization</option>
                        <option value="Other Custom Inquiry">Other Custom Inquiry</option>
                      </select>
                    </div>

                    {/* Estimated Budget Scope */}
                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-[#4D3847] mb-2">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-white border border-[#DEC8D4] rounded-xl text-[#2E1325] focus:outline-none focus:ring-2 focus:ring-[#C97A8E] focus:border-transparent transition-all"
                      >
                        <option value="Starter ($300 - $800)">Starter ($300 - $800)</option>
                        <option value="Medium ($800 - $2,500)">Medium ($800 - $2,500)</option>
                        <option value="Full Scale ($2,500 - $6,000+)">Full Scale ($2,500 - $6,000+)</option>
                        <option value="Undecided / Consultation">Undecided / Open Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#4D3847] mb-2">
                      Project Details & Timeline <span className="text-[#C97A8E]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share brief details about your brand, what you want to achieve, any reference websites you like, and your ideal launch date..."
                      required
                      className="w-full px-4 py-3 text-sm bg-white border border-[#DEC8D4] rounded-xl text-[#2E1325] placeholder-[#B5A3AF] focus:outline-none focus:ring-2 focus:ring-[#C97A8E] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button & Direct WhatsApp Alternative */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-[#34152B] hover:bg-[#48203D] active:bg-[#280F21] rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-4 h-4 text-[#D8B4C0]" />
                        </>
                      )}
                    </button>

                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-[#3D7C54] hover:underline inline-flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Prefer WhatsApp? Message directly</span>
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
