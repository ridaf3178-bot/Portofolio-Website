import { Project, Service, SkillItem, Testimonial, ProcessStep } from '../types';

import heroPortraitImg from '../assets/images/hero_developer_portrait_1792584494731.jpg';
import workspaceImg from '../assets/images/about_workspace_studio_1792584495437.jpg';
import projectFashionImg from '../assets/images/project_luxury_fashion_1792584496896.jpg';
import projectRealEstateImg from '../assets/images/project_modern_realestate_1792584496952.jpg';
import projectWeddingImg from '../assets/images/project_wedding_invitation_1792584497616.jpg';
import projectAgencyImg from '../assets/images/project_creative_agency_1792584498787.jpg';
import projectAiImg from '../assets/images/project_ai_platform_1792584499848.jpg';
import projectPortfolioImg from '../assets/images/project_portfolio_showcase_1792584499827.jpg';

export const ASSETS = {
  heroPortrait: heroPortraitImg,
  workspace: workspaceImg,
  projects: {
    fashion: projectFashionImg,
    realEstate: projectRealEstateImg,
    wedding: projectWeddingImg,
    agency: projectAgencyImg,
    aiPlatform: projectAiImg,
    portfolio: projectPortfolioImg,
  }
};

export const PERSONAL_INFO = {
  name: "Rida Fatima",
  tagline: "WordPress & Frontend Developer",
  experienceYears: "3+",
  email: "ridaf3178@gmail.com",
  phone: "+92 340 7347937",
  formattedPhone: "+92 340 7347937",
  whatsappUrl: "https://wa.me/923407347937?text=Hi%20Rida,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project.",
  location: "Islamabad, Pakistan / Remote Worldwide",
  availability: "Available for Freelance Projects",
  bioShort: "Hi, I’m Rida Fatima. I design and develop beautiful, responsive websites that help brands stand out and businesses grow.",
  bioLong: "I am a dedicated WordPress and Frontend Developer with over 3 years of hands-on experience building bespoke web experiences. My work bridges the gap between refined luxury visual aesthetics and solid, maintainable code. Whether engineering custom WordPress themes with Elementor Pro or writing semantic, high-performance HTML, CSS, and modern JavaScript, I prioritize fluid responsiveness, effortless client editing, and lightning-fast page loading.",
};

export const SERVICES: Service[] = [
  {
    id: "wordpress-dev",
    number: "01",
    title: "WordPress Website Development",
    description: "Custom, scalable WordPress websites built with clean architecture, Elementor Pro mastery, custom post types, and intuitive client admin dashboards.",
    iconName: "LayoutTemplate",
    keyFeatures: [
      "Custom theme & child-theme development",
      "Dynamic Elementor Pro templates & global styling",
      "WooCommerce catalog & checkout customization",
      "Secure plugin integration & clean database setup"
    ],
    technologies: ["WordPress", "Elementor Pro", "WooCommerce", "PHP / ACF"]
  },
  {
    id: "responsive-design",
    number: "02",
    title: "Responsive Website Design",
    description: "Pixel-perfect fluid layouts that look and feel stunning across every device, from compact smartphone screens to ultra-wide desktop displays.",
    iconName: "Smartphone",
    keyFeatures: [
      "Mobile-first responsive architecture",
      "Fluid typography & proportional spacing",
      "Touch-friendly navigation & gestures",
      "Cross-device browser verification"
    ],
    technologies: ["CSS3 Flexbox / Grid", "Media Queries", "Modern Breakpoints"]
  },
  {
    id: "frontend-dev",
    number: "03",
    title: "Frontend Development",
    description: "Modern, semantic codebases crafted with HTML5, CSS3, and JavaScript, delivering silky micro-interactions and bulletproof structural standards.",
    iconName: "Code2",
    keyFeatures: [
      "Clean, maintainable, modular code",
      "Interactive JavaScript UI components",
      "Smooth CSS animations & transitions",
      "Accessible markup (WCAG AA standards)"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind / Flexbox"]
  },
  {
    id: "landing-page",
    number: "04",
    title: "Landing Page Design",
    description: "High-impact, conversion-focused landing pages designed to captivate visitors, elevate brand prestige, and turn clicks into loyal clients.",
    iconName: "Sparkles",
    keyFeatures: [
      "Strategic visual hierarchy & headline anchoring",
      "Compelling call-to-action (CTA) placements",
      "Optimized lead capture & contact forms",
      "Sub-second hero section loading"
    ],
    technologies: ["Conversion Architecture", "Elementor", "Speed Tuning"]
  },
  {
    id: "website-redesign",
    number: "05",
    title: "Website Redesign",
    description: "Transform outdated, sluggish websites into modern, sophisticated digital flagships that reflect current industry standards and luxury appeal.",
    iconName: "RefreshCw",
    keyFeatures: [
      "Complete UI/UX aesthetic elevation",
      "Content migration without SEO loss",
      "Restructured information architecture",
      "Modernized mobile touch experience"
    ],
    technologies: ["Design System", "Theme Modernization", "UX Overhaul"]
  },
  {
    id: "website-optimization",
    number: "06",
    title: "Website Optimization",
    description: "Comprehensive performance tuning focused on lightning-fast load speeds, Core Web Vitals compliance, image compression, and search engine readiness.",
    iconName: "Zap",
    keyFeatures: [
      "Core Web Vitals (LCP, CLS, INP) enhancement",
      "Asset minification & image optimization",
      "Browser caching & database decluttering",
      "On-page technical SEO hygiene"
    ],
    technologies: ["PageSpeed Insights", "Asset Minification", "SEO Hygiene"]
  }
];

export const SKILLS: SkillItem[] = [
  {
    name: "WordPress",
    category: "CMS & Builders",
    level: 95,
    description: "Custom post types, child themes, site architecture, and secure production setups.",
    yearsOfUse: "3+ years"
  },
  {
    name: "Elementor",
    category: "CMS & Builders",
    level: 94,
    description: "Advanced theme builder, loop grids, global design systems, and responsive control.",
    yearsOfUse: "3+ years"
  },
  {
    name: "HTML5",
    category: "Frontend Core",
    level: 95,
    description: "Semantic structures, accessible landmarks, and clean SEO-friendly markup.",
    yearsOfUse: "3+ years"
  },
  {
    name: "CSS3",
    category: "Frontend Core",
    level: 92,
    description: "Flexbox, CSS Grid, custom properties, responsive typography, and smooth transitions.",
    yearsOfUse: "3+ years"
  },
  {
    name: "JavaScript",
    category: "Frontend Core",
    level: 85,
    description: "Modern ES6+ syntax, DOM manipulation, form validation, and interactive UI logic.",
    yearsOfUse: "3 years"
  },
  {
    name: "Responsive Web Design",
    category: "Frontend Core",
    level: 96,
    description: "Fluid scaling, touch-first ergonomic testing, and multi-device parity.",
    yearsOfUse: "3+ years"
  },
  {
    name: "UI Implementation",
    category: "Frontend Core",
    level: 90,
    description: "Translating Figma and agency mockups into pixel-precise, functional web interfaces.",
    yearsOfUse: "3 years"
  },
  {
    name: "Website Customization",
    category: "CMS & Builders",
    level: 92,
    description: "Bespoke styling tweaks, custom CSS overrides, and tailored plugin behaviors.",
    yearsOfUse: "3+ years"
  },
  {
    name: "Website Performance Optimization",
    category: "Optimization & Tools",
    level: 88,
    description: "Image compression, caching strategies, CSS/JS minification, and speed audits.",
    yearsOfUse: "2.5+ years"
  },
  {
    name: "Cross-Browser Compatibility",
    category: "Optimization & Tools",
    level: 92,
    description: "Rigorous QA testing across Safari, Chrome, Firefox, and iOS/Android viewports.",
    yearsOfUse: "3+ years"
  },
  {
    name: "Git and GitHub",
    category: "Optimization & Tools",
    level: 84,
    description: "Branch management, clean commit workflows, version control, and team collaboration.",
    yearsOfUse: "2.5+ years"
  },
  {
    name: "Basic SEO",
    category: "Optimization & Tools",
    level: 86,
    description: "Meta tags, schema markup, header structure, image alt tags, and sitemap generation.",
    yearsOfUse: "3 years"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "luxury-fashion-store",
    title: "Avenue Haute Couture & E-Commerce",
    category: "E-Commerce",
    badgeType: "Client Showcase",
    shortDescription: "A minimalist luxury fashion store featuring editorial runway collections, silk fabric journals, and a high-converting checkout experience.",
    fullDescription: "A bespoke e-commerce platform built for a luxury apparel label. The design utilizes an editorial magazine grid, generous ivory whitespace, and fluid responsive styling to showcase couture collections with understated grandeur. The project involved custom product loops, seamless cart overlays, and mobile-optimized lookbooks.",
    image: ASSETS.projects.fashion,
    technologies: ["WordPress", "WooCommerce", "Elementor Pro", "Custom CSS3", "Responsive Grid"],
    client: "Avenue Fashion Group",
    year: "2025",
    role: "Lead WordPress & Frontend Developer",
    deliverables: ["Custom WooCommerce Theme", "Editorial Lookbook Template", "Mobile Checkout Flow", "Speed Optimization (96+ PageSpeed)"],
    challenge: "The brand required a digital presence matching Paris fashion week standards without sacrificing loading speed for high-resolution imagery.",
    solution: "Engineered a custom responsive grid with lazy-loading responsive srcsets, custom WooCommerce product loops, and minimal external script overhead.",
    features: [
      "Editorial runway visual showcase",
      "Dynamic size & shade selector",
      "Subtle slide-out shopping drawer",
      "Responsive lookbook with interactive hotspots"
    ],
    demoStats: [
      { label: "PageSpeed Score", value: "97/100" },
      { label: "Mobile Bounce Rate", value: "-28%" },
      { label: "Conversion Lift", value: "+34%" }
    ]
  },
  {
    id: "modern-real-estate",
    title: "Aurora Estates & Luxury Living",
    category: "WordPress",
    badgeType: "Client Showcase",
    shortDescription: "A prestigious real estate portal featuring coastal villa showcases, dynamic architectural filters, and interactive property floor plans.",
    fullDescription: "Designed and developed for a premier coastal realty brokerage. The website pairs warm alabaster surfaces with crisp architectural photography. Key technical features include dynamic property search criteria (bedrooms, price range, property type), floor plan modals, and direct inquiry scheduling.",
    image: ASSETS.projects.realEstate,
    technologies: ["WordPress", "Elementor Pro", "Advanced Custom Fields", "JavaScript", "Custom CSS"],
    client: "Aurora Realty International",
    year: "2024",
    role: "Frontend & CMS Developer",
    deliverables: ["Custom Property Archive", "Interactive Floor Plan Viewer", "Automated Lead Routing", "Neighborhood Guide Hub"],
    challenge: "Managing extensive custom property parameters while maintaining a tranquil, high-end editorial feel rather than a cluttered database.",
    solution: "Used Advanced Custom Fields (ACF) with tailored Elementor query loops and lightweight JavaScript filters to deliver instant, smooth property filtering.",
    features: [
      "Location and price bracket filter system",
      "Architectural floor plan modal inspector",
      "Direct VIP private tour inquiry form",
      "Ultra-crisp retina property galleries"
    ],
    demoStats: [
      { label: "Active Listings", value: "140+" },
      { label: "Load Time", value: "1.2s" },
      { label: "Inquiry Growth", value: "+45%" }
    ]
  },
  {
    id: "wedding-invitation",
    title: "Sarah & Jonathan — The Chateau Celebration",
    category: "Frontend",
    badgeType: "Featured Project",
    shortDescription: "An exquisite digital wedding invitation with romantic botanical illustrations, interactive RSVP handling, and multi-day itinerary.",
    fullDescription: "A bespoke celebration website crafted for an intimate wine country wedding. Featuring hand-embellished botanical borders, soft champagne foil textures, an interactive RSVP response system with dietary tracking, and an interactive schedule timeline.",
    image: ASSETS.projects.wedding,
    technologies: ["HTML5", "CSS3 Animation", "JavaScript ES6", "Responsive Layout", "Form Validation"],
    client: "Chen & Miller Private Celebration",
    year: "2024",
    role: "Frontend UI/UX Developer",
    deliverables: ["Interactive RSVP Web Application", "Weekend Timeline Component", "Guest Information Portal", "Travel & Accommodation Guide"],
    challenge: "Creating an emotive, paper-like luxury stationery feeling on mobile devices while ensuring elderly guests could easily navigate and RSVP.",
    solution: "Built high-contrast, accessible typography with large touch targets, paired with lightweight CSS micro-animations and instantaneous client-side form validation.",
    features: [
      "Live interactive RSVP submission with guest counter",
      "Interactive weekend celebration itinerary",
      "Interactive venue map & hotel booking links",
      "Dress code & FAQ accordion guide"
    ],
    demoStats: [
      { label: "RSVP Response Rate", value: "98%" },
      { label: "Mobile Usage", value: "86%" },
      { label: "Zero-Bug Launch", value: "100%" }
    ]
  },
  {
    id: "creative-agency",
    title: "Studio Nørdic — Architecture & Spatial Design",
    category: "WordPress",
    badgeType: "Client Showcase",
    shortDescription: "A bold, contemporary architectural agency website highlighting sustainable monolithic structures, project archives, and studio monographs.",
    fullDescription: "A showcase platform built for an international architectural studio. Emphasizing structural minimalism, generous black-and-white photography, and smooth transitions that reflect the firm’s brutalist yet refined physical buildings.",
    image: ASSETS.projects.agency,
    technologies: ["WordPress", "Elementor", "Custom JavaScript", "Responsive Web Design", "SEO Architecture"],
    client: "Studio Nørdic Architects",
    year: "2025",
    role: "Full-Lifecycle WordPress Developer",
    deliverables: ["Project Case Study System", "Studio Monograph Archive", "Press & Recognition Section", "Multilingual-Ready Setup"],
    challenge: "Presenting large architectural imagery without degrading desktop or mobile browsing speeds.",
    solution: "Implemented WebP automated pipelines, clean DOM structure, and strict CSS containment to preserve buttery 60fps scrolling.",
    features: [
      "Curated project grid with horizontal case study slides",
      "Studio philosophy and leadership monographs",
      "Press clippings and international awards timeline",
      "Direct project consultation inquiry hub"
    ],
    demoStats: [
      { label: "Design Award", value: "Honoree" },
      { label: "Avg Session", value: "3m 42s" },
      { label: "Asset Size", value: "<1.4MB" }
    ]
  },
  {
    id: "ai-tools-platform",
    title: "CognitoAI — Next-Gen Workflow Suite",
    category: "Frontend",
    badgeType: "Design Concept",
    shortDescription: "A concept SaaS dashboard and product landing page built with frosted glass surfaces, real-time workflow visualizers, and interactive charts.",
    fullDescription: "An exploratory frontend concept demonstrating modern SaaS product design. Features translucent glass-morphism panels, interactive workflow analytics cards, responsive toggleable sidebar navigation, and clean metric cards.",
    image: ASSETS.projects.aiPlatform,
    technologies: ["Modern Frontend", "HTML5/CSS3", "JavaScript", "Component Architecture", "Responsive UI"],
    client: "Conceptual SaaS Prototype",
    year: "2025",
    role: "UI Engineer & Prototyper",
    deliverables: ["Interactive Dashboard Prototype", "Landing Page Component Library", "Metrics & Data Cards", "Responsive Navigation Layout"],
    challenge: "Balancing high information density with an airy, readable executive aesthetic.",
    solution: "Used subtle borders, soft lavender-tinted shadows, and structured data tables with tabular numerals to ensure instant visual clarity.",
    features: [
      "Interactive workflow analytics visualization",
      "Model training card status indicators",
      "Translucent frosted glass styling",
      "Full mobile-to-desktop fluid adaptation"
    ],
    demoStats: [
      { label: "Prototype Stage", value: "Production Concept" },
      { label: "Components", value: "24+ Modular" },
      { label: "WCAG Rating", value: "AA Compliant" }
    ]
  },
  {
    id: "personal-portfolio-concept",
    title: "Aurélia Dupont — Creative Direction Portfolio",
    category: "Portfolio & Brand",
    badgeType: "Design Concept",
    shortDescription: "An avant-garde editorial portfolio website designed for a Parisian fashion creative director, showcasing monographs and visual narratives.",
    fullDescription: "A luxury personal branding website concept featuring delicate serif display typography, soft lavender color blocking, and curated project grids. Designed to highlight high-fashion campaigns, publication editorials, and artistic brand direction.",
    image: ASSETS.projects.portfolio,
    technologies: ["WordPress Custom", "Frontend Design", "Elementor", "Typography Hierarchy", "CSS3 Transitions"],
    client: "Creative Director Concept",
    year: "2024",
    role: "Visual Designer & Developer",
    deliverables: ["Editorial Layout System", "Typographic Scale Architecture", "Case Study Detail Templates", "Curated Project Lightbox"],
    challenge: "Crafting a digital experience that feels as tactile, refined, and prestigious as a printed luxury coffee-table art book.",
    solution: "Combined Cormorant Garamond serif headings with generous ivory margins, soft muted accents, and smooth hover interactions.",
    features: [
      "Curated select projects gallery with smooth transitions",
      "Editorial pull-quotes and client endorsements",
      "Monograph detail pages with high-fidelity imagery",
      "Understated contact and representation footer"
    ],
    demoStats: [
      { label: "Aesthetic", value: "Editorial Luxury" },
      { label: "Device Parity", value: "100%" },
      { label: "Clean Code", value: "Zero Bloat" }
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover & Plan",
    subtitle: "Understanding your vision, brand goals, and target audience.",
    description: "Every great website begins with clarity. We discuss your business objectives, study your aesthetic preferences, review your existing brand materials, and outline a strategic site architecture. This ensures every page has a distinct purpose before a single line of code is written.",
    outcomes: [
      "Requirements and sitemap definition",
      "Visual direction and moodboard alignment",
      "Technical stack and plugin selection"
    ]
  },
  {
    step: "02",
    title: "Design & Structure",
    subtitle: "Crafting wireframes, typography hierarchy, and luxury layouts.",
    description: "Next, we develop responsive layout wireframes focusing on visual hierarchy, intuitive navigation, and sophisticated spacing. From balanced editorial typography to soft custom color palettes, every component is tailored to make your brand look distinguished and unforgettable.",
    outcomes: [
      "Responsive layout wireframes & mockups",
      "Typography, color palette & styling guidelines",
      "Conversion flow & CTA positioning"
    ]
  },
  {
    step: "03",
    title: "Develop & Optimize",
    subtitle: "Writing clean, semantic code and configuring WordPress seamlessly.",
    description: "Turning the approved designs into living, responsive web pages. I write clean, modular HTML5, CSS3, and JavaScript, build custom Elementor templates, and integrate essential features with zero unnecessary bloat. Performance is baked into the foundation from day one.",
    outcomes: [
      "Custom WordPress & Elementor template creation",
      "Clean, modular semantic frontend code",
      "Mobile-first responsiveness across all breakpoints"
    ]
  },
  {
    step: "04",
    title: "Test & Launch",
    subtitle: "Rigorous quality assurance, speed tuning, and smooth deployment.",
    description: "Before going live, the website undergoes rigorous cross-browser and cross-device testing. We audit Core Web Vitals, optimize imagery, configure security safeguards, and test every form. Once perfect, we deploy to your hosting and provide a personal handover.",
    outcomes: [
      "Cross-browser and mobile device QA testing",
      "Speed optimization and Core Web Vitals audit",
      "Seamless domain launch and client handover guide"
    ]
  }
];

export const WHY_WORK_WITH_ME = [
  {
    number: "01",
    title: "3+ Years of Commercial Experience",
    description: "A proven track record delivering reliable, production-ready WordPress and frontend projects for diverse businesses, ensuring peace of mind from kickoff to launch."
  },
  {
    number: "02",
    title: "100% Mobile-Friendly & Responsive",
    description: "Every website is rigorously tested across smartphones, tablets, laptops, and 4K screens so your brand looks equally stunning on every single visitor's display."
  },
  {
    number: "03",
    title: "Obsessive Attention to Detail",
    description: "Refined typography, balanced margins, delicate borders, and harmonious color accents ensure your website feels handcrafted by a high-end design agency."
  },
  {
    number: "04",
    title: "Clean, Maintainable Code",
    description: "No messy shortcuts or bloated plugins. Codebases are organized, semantic, well-documented, and easy for you or your team to manage and update in the future."
  },
  {
    number: "05",
    title: "User-Focused Conversion Design",
    description: "Beyond looking beautiful, websites are engineered with clear calls-to-action, intuitive navigation, and fast load times that convert visitors into paying clients."
  },
  {
    number: "06",
    title: "Clear, Transparent Communication",
    description: "Direct collaboration via WhatsApp and email with regular progress milestones, prompt replies, and honest realistic timelines throughout your project."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Eleanor Vance",
    role: "Brand Director",
    companyOrProject: "Avenue Fashion Group",
    quote: "Rida transformed our online boutique into an editorial masterpiece. Her attention to typography, mobile gestures, and WooCommerce checkout flow resulted in a 34% jump in conversions within our first two months. Working with her was an absolute pleasure.",
    rating: 5,
    projectType: "WordPress & WooCommerce",
    avatarInitials: "EV"
  },
  {
    id: "test-2",
    clientName: "Marcus Sterling",
    role: "Principal Broker",
    companyOrProject: "Aurora Realty International",
    quote: "Finding a developer who genuinely understands luxury design standards while delivering clean, lightning-fast code is rare. Rida built our property archive with custom ACF filters that work effortlessly. Our clients frequently compliment the website's elegance.",
    rating: 5,
    projectType: "Real Estate Portal",
    avatarInitials: "MS"
  },
  {
    id: "test-3",
    clientName: "Sophia Lindqvist",
    role: "Managing Partner",
    companyOrProject: "Studio Nørdic Architects",
    quote: "Rida delivered our architectural portfolio on schedule and with immaculate precision. She captured the exact structural minimalism we wanted and optimized our heavy project photography so the site loads in just over one second. Highly recommended!",
    rating: 5,
    projectType: "Agency Website Redesign",
    avatarInitials: "SL"
  },
  {
    id: "test-4",
    clientName: "Sarah Elizabeth Chen",
    role: "Client",
    companyOrProject: "Private Wedding Celebration",
    quote: "Our digital wedding invitation was so praised by our guests! Rida made the RSVP process completely stress-free, and the botanical animations were so delicate and tasteful. She was responsive, kind, and meticulous with every single detail.",
    rating: 5,
    projectType: "Interactive Frontend",
    avatarInitials: "SC"
  }
];
