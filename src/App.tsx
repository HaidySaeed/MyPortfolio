import { useState, useEffect } from "react";
import { 
  Download, 
  Linkedin, 
  ArrowRight, 
  Phone, 
  Mail, 
  Menu, 
  X, 
  CheckCircle, 
  BadgeCheck, 
  Terminal, 
  Cpu, 
  GraduationCap, 
  Award, 
  Copy, 
  Check, 
  ExternalLink,
  ChevronRight,
  Briefcase
} from "lucide-react";

import portfolioRaw from "./data/portfolio.json";
import { PortfolioData } from "./types";
import ProfileImage from "./components/ProfileImage";
import GlowCanvas from "./components/GlowCanvas";
import ProjectImage from "./components/ProjectImage";

// ============================================================================
// ASSET MANAGEMENT INSTRUCTIONS FOR NEW PROJECT IMAGES & PROFILE PHOTOS:
// ============================================================================
// To add new portfolio project screenshots or profile images in the future:
// 1. Move or copy your image file into the '/public/images/' folder.
// 2. Ensure standard naming conventions (e.g., 'your-new-project-screenshot.png').
// 3. Update the 'image' property inside '/src/data/portfolio.json' (e.g., '/images/your-new-project-screenshot.png').
// 4. Update the matching key in PROJECTS_DETAILS list inside '/src/pages/ProjectDetails.tsx'.
// ============================================================================

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";

const data = portfolioRaw as PortfolioData;

export function PortfolioHome() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);
  const [hireMeAnimating, setHireMeAnimating] = useState<boolean>(false);

  // Helper to map icon names to Lucide icons
  const renderSkillIcon = (iconName?: string) => {
    switch (iconName) {
      case "check_circle":
        return <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />;
      case "verified":
        return <BadgeCheck className="w-4 h-4 text-purple-400 shrink-0" />;
      case "precision_manufacturing":
        return <Terminal className="w-4 h-4 text-purple-400 shrink-0" />;
      case "psychology":
        return <Cpu className="w-4 h-4 text-purple-400 shrink-0 animate-pulse" />;
      default:
        return null;
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(data.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80; // height of fixed Header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: "smooth",
      });

      // Bouncing animation feedback if 'contact'
      if (id === "contact") {
        setHireMeAnimating(true);
        setTimeout(() => setHireMeAnimating(false), 2000);
      }
    }
  };

  return (
    <div className="min-h-screen text-brand-light font-sans antialiased relative bg-brand-dark overflow-hidden">
      {/* Dynamic particles & ambient glowing orbs backdrop */}
      <GlowCanvas />

      {/* FIXED NAVIGATION HEADER */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/40 backdrop-blur-xl border-b border-white/10 shadow-sm transition-all duration-300">
        <nav className="flex justify-between items-center px-4 md:px-8 max-w-7xl mx-auto h-16">
          {/* Logo Name & Typo Brand */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-sans text-lg md:text-xl font-bold tracking-tight text-white cursor-pointer hover:opacity-90 flex items-center gap-2 select-none"
          >
            <span className="p-1.5 bg-purple-500/15 border border-purple-500/30 rounded-lg text-purple-400">
              <Terminal className="w-4.5 h-4.5 stroke-[2.5]" />
            </span>
            <span>QA.AI Engineer</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-slate-300 hover:text-white transition-colors font-medium text-sm cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="text-slate-300 hover:text-white transition-colors font-medium text-sm cursor-pointer"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-slate-300 hover:text-white transition-colors font-medium text-sm cursor-pointer"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("experience")}
              className="text-slate-300 hover:text-white transition-colors font-medium text-sm cursor-pointer"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-widest px-6 py-2.5 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.45)] hover:scale-103 transition-all duration-300 active:scale-95 animate-pulse-subtle"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Hamburguer / Contact shortcut symbols */}
          <div className="flex items-center gap-2 md:hidden">
            <a 
              href={`mailto:${data.contact.email}`}
              className="p-2 text-slate-300 hover:text-white transition-colors"
              title="Mail me"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl py-4 px-6 space-y-3 shadow-2xl transition-all duration-300 animate-fade-in-up">
            <button 
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-slate-300 hover:text-white font-medium text-sm"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left py-2 text-slate-300 hover:text-white font-medium text-sm"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left py-2 text-slate-300 hover:text-white font-medium text-sm"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("experience")}
              className="block w-full text-left py-2 text-slate-300 hover:text-white font-medium text-sm"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-xl block text-center"
            >
              Hire Me
            </button>
          </div>
        )}
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10 space-y-24 md:space-y-36">
        
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center py-6 md:py-12">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="md:col-span-7 space-y-6 md:space-y-8 text-center md:text-left">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-[11px] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-purple-400 shadow-sm animate-ping"></span>
                  Ready to secure releases
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight select-none">
                  {data.personal.name}
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-purple-300 tracking-wide mt-2">
                  {data.personal.title} <span className="text-slate-400 mx-1.5">|</span> {data.personal.subtitle}
                </p>
              </div>

              <p className="text-slate-400 max-w-xl text-base sm:text-lg leading-relaxed select-text font-normal">
                {data.personal.description}
              </p>

              {/* Dynamic CTAs */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <a 
                  href={data.personal.downloadCvUrl} 
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(139,92,246,0.3)] hover:scale-103 transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
                <a 
                  href={data.personal.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-500/10 font-semibold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 active:scale-95 cursor-pointer bg-slate-900/20 backdrop-blur-sm"
                >
                  <Linkedin className="w-4 h-4 text-purple-400" />
                  LinkedIn
                </a>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="flex items-center gap-2 text-purple-300 hover:text-purple-200 font-bold tracking-wide transition-all group pt-2 px-1 cursor-pointer"
                >
                  Contact Me 
                  <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Interactive Image Component */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <ProfileImage imagePath={data.personal.profileImagePath} />
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        {data.stats && data.stats.length > 0 && (
          <section id="stats" className="py-2.5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto bg-slate-900/35 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-8 shadow-xl">
              {data.stats.map((stat, idx) => (
                <div key={idx} className="text-center md:text-left p-3 relative group">
                  <div className="text-3xl md:text-4xl font-extrabold text-purple-300 mb-1 group-hover:scale-105 transition-transform duration-300 cursor-default">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 tracking-wider">
                    {stat.label}
                  </div>
                  {/* Visual grid segment bounds */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute right-0 top-1/4 h-1/2 w-[1px] bg-white/10"></div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ABOUT SECTION (THE PROFESSIONAL PERSONA) */}
        <section id="about" className="scroll-mt-6 hover-grid-glow">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Title / Persona intro */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-purple-500/10 rounded-xl text-purple-400 border border-purple-500/20">
                  <Terminal className="w-5 h-5" />
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  {data.about.title}
                </h2>
              </div>
              <p className="text-purple-200/90 text-base md:text-lg leading-relaxed font-medium">
                {data.about.tagline}
              </p>
            </div>

            {/* Card presentation */}
            <div className="lg:col-span-7 glass-panel p-6 md:p-8 rounded-2xl space-y-6 relative overflow-hidden group shadow-lg border border-white/15">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700"></div>
              {data.about.paragraphs.map((para, idx) => (
                <p key={idx} className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL ARSENAL (SKILLS) */}
        <section id="skills" className="scroll-mt-6">
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">Technical Arsenal</h2>
              <p className="text-sm text-slate-400">Specially engineered toolkit optimized for robust test design and continuous AI checking.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {data.skills.map((skillGroup, groupIdx) => (
                <div 
                  key={groupIdx} 
                  className="bg-slate-900/35 border border-white/5 p-6 rounded-2xl flex flex-col justify-start space-y-4 shadow-xl hover:border-white/10 transition-colors"
                >
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 border-b border-white/5 pb-2">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {skillGroup.items.map((item, itemIdx) => {
                      const isHighlighted = item.highlight;
                      return (
                        <div 
                          key={itemIdx}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-default transition-all duration-300 shadow-sm ${
                            isHighlighted 
                              ? "bg-purple-500/15 border border-purple-500/40 text-purple-200 shadow-[0_0_10px_rgba(139,92,246,0.15)] hover:bg-purple-500/25" 
                              : "bg-slate-800/40 border border-white/5 text-slate-300 hover:bg-slate-800/70"
                          }`}
                        >
                          {item.icon && renderSkillIcon(item.icon)}
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION (INNOVATIVE SOLUTIONS) */}
        <section id="projects" className="scroll-mt-6">
          <div className="space-y-12">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white">Innovative Solutions</h2>
                <p className="text-sm text-purple-400/90 mt-1">Quality engineering through the lens of continuous validation.</p>
              </div>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="hidden md:flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-purple-300 transition-colors group cursor-pointer"
              >
                Let's Build One <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {data.projects.map((project, idx) => (
                <div 
                  key={idx} 
                  className={`glass-panel rounded-2xl overflow-hidden flex flex-col justify-between group shadow-lg transition-transform duration-300 hover:scale-[1.01] ${
                    project.isFeatured ? "border-purple-500/30" : "border-white/5"
                  }`}
                >
                  {/* Photo area */}
                  <div className="h-48 relative overflow-hidden bg-slate-950">
                    <ProjectImage 
                      src={project.image} 
                      alt={project.title}
                      title={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    {project.isFeatured && (
                      <div className="absolute top-4 right-4 bg-purple-600 text-white text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shadow-md animate-pulse">
                        Featured AI
                      </div>
                    )}
                  </div>

                  {/* Body description */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tagIdx) => (
                          <span 
                            key={tagIdx} 
                            className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400 capitalize"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-auto">
                      <button 
                        onClick={() => {
                          const titleLower = project.title.toLowerCase();
                          let slug = "playwright-framework";
                          if (titleLower.includes("hub")) {
                            slug = "qa-automation-hub";
                          } else if (titleLower.includes("gen") || titleLower.includes("ai")) {
                            slug = "ai-test-generator";
                          } else if (titleLower.includes("vodafone") || titleLower.includes("eshop")) {
                            slug = "vodafone-eshop-framework";
                          } else if (titleLower.includes("octo")) {
                            slug = "octo-mobile-app";
                          } else if (titleLower.includes("playwright")) {
                            slug = "playwright-framework";
                          }
                          navigate(`/projects/${slug}`);
                        }}
                        className={`w-full py-2 px-4 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-1.5 active:scale-97 cursor-pointer ${
                          project.isFeatured 
                            ? "bg-purple-600 text-white hover:bg-purple-500 shadow-md shadow-purple-500/10" 
                            : "bg-slate-800/60 border border-white/10 text-slate-300 hover:bg-slate-800 hover:text-white"
                        }`}
                      >
                        {project.buttonText}
                        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION (THE JOURNEY) */}
        <section id="experience" className="scroll-mt-6">
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white">The Journey</h2>
              <p className="text-sm text-slate-400">Chronological summary of verified professional QA and quality leadership accomplishments.</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 px-4">
              {data.experience.map((job, idx) => (
                <div 
                  key={idx} 
                  className="glass-panel p-6 md:p-8 rounded-2xl relative transition-all duration-300 hover:border-purple-500/20 group shadow-lg flex flex-col gap-4 overflow-hidden"
                >
                  {/* Subtle top highlighter gradient for the active latest position */}
                  {idx === 0 && (
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  )}

                  {/* Header: Role, Company, and Duration */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-white/5 pb-4">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-lg md:text-xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
                          {job.role}
                        </span>
                        {idx === 0 && (
                          <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider">
                            Latest
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-300">
                        <Briefcase className="w-4 h-4 text-purple-400" />
                        <span>{job.company}</span>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <span className="inline-block px-3 py-1 bg-slate-800/60 border border-white/5 rounded-full text-xs font-mono text-purple-300 tracking-wide">
                        {job.period}
                      </span>
                    </div>
                  </div>

                  {/* Brief introduction summary */}
                  {job.description && (
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed italic">
                      {job.description}
                    </p>
                  )}

                  {/* Structured Bullet Points */}
                  {job.bullets && job.bullets.length > 0 && (
                    <ul className="space-y-2.5 my-2">
                      {job.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-start text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <span className="text-purple-400 font-bold text-lg leading-none mr-2.5 select-none">›</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Dedicated job skill taxonomy badges */}
                  {job.skills && job.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {job.skills.map((skill, skillIdx) => (
                        <span 
                          key={skillIdx} 
                          className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-slate-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education" className="grid lg:grid-cols-2 gap-12 scroll-mt-6">
          {/* Education Block (Left) */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="p-1.5 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400">
                <GraduationCap className="w-5 h-5" />
              </span>
              Education
            </h3>
            <div className="glass-panel p-6 rounded-2xl hover:border-purple-500/15 transition-all">
              <h4 className="text-normal font-bold text-white">{data.education.degree}</h4>
              <p className="text-purple-400 font-bold text-sm mt-1">{data.education.institution}</p>
              <div className="h-[1px] bg-white/5 my-4"></div>
              <p className="text-xs sm:text-sm text-slate-400 font-mono italic leading-relaxed">
                {data.education.major}
              </p>
            </div>
          </div>

          {/* Certifications Block (Right) */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="p-1.5 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400">
                <Award className="w-5 h-5" />
              </span>
              Certifications
            </h3>
            <div className="space-y-3">
              {(data.certifications || data["certifications and Courses"] || []).map((cert, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/5 hover:border-white/10 bg-slate-900/35 backdrop-blur-md transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 transition-all flex items-center justify-center shrink-0">
                    <Award className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white group-hover:text-purple-300 transition-colors text-sm sm:text-base">
                      {cert.title}
                    </h5>
                    <p className="text-xs text-slate-400 mt-1 select-text">
                      {cert.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT CTA SECTION */}
        <section 
          id="contact" 
          className={`scroll-mt-6 rounded-3xl relative overflow-hidden transition-all duration-700 p-8 sm:p-12 lg:p-16 ${
            hireMeAnimating 
              ? "bg-purple-900/30 border border-purple-400/40 shadow-2xl scale-[1.02] shadow-purple-500/20" 
              : "bg-slate-900/45 border border-white/5 shadow-xl"
          }`}
        >
          {/* Subtle back ambient overlay */}
          <div className="absolute inset-0 bg-radial-gradient from-purple-500/5 via-transparent to-transparent opacity-60 pointer-events-none"></div>

          <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight select-none">
                {data.contact.ctaTitle}
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed select-text">
                {data.contact.ctaText}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 max-w-xl mx-auto">
              {/* Mail Button copy */}
              <div className="w-full sm:w-auto relative group">
                <button
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto inline-flex items-center gap-3 bg-slate-950/80 hover:bg-slate-950 text-purple-300 hover:text-white px-6 py-4 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all text-xs font-semibold cursor-pointer shadow-lg tracking-wider font-mono justify-center"
                >
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{data.contact.email}</span>
                  <span className="p-1 bg-white/5 border border-white/10 rounded ml-1 group-hover:bg-purple-500/10">
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400" />}
                  </span>
                </button>
                {copiedEmail && (
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-[10px] py-1 px-2.5 rounded shadow z-10 font-sans tracking-wide">
                    Copied to Clipboard!
                  </div>
                )}
              </div>

              {/* Phone Button copy */}
              <div className="w-full sm:w-auto relative group">
                <button
                  onClick={handleCopyPhone}
                  className="w-full sm:w-auto inline-flex items-center gap-3 bg-slate-950/80 hover:bg-slate-950 text-purple-300 hover:text-white px-6 py-4 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all text-xs font-semibold cursor-pointer shadow-lg tracking-wider font-mono justify-center"
                >
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>{data.contact.phone}</span>
                  <span className="p-1 bg-white/5 border border-white/10 rounded ml-1 group-hover:bg-purple-500/10">
                    {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400" />}
                  </span>
                </button>
                {copiedPhone && (
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-[10px] py-1 px-2.5 rounded shadow z-10 font-sans tracking-wide">
                    Copied to Clipboard!
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full py-10 bg-slate-950/60 backdrop-blur-md border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 select-none">
            <span className="p-1 px-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-400 font-bold font-mono text-xs">
              QA.AI
            </span>
            <span className="text-slate-400 text-xs font-mono">
              © {new Date().getFullYear()} Senior QA Automation & AI Quality Engineer.
            </span>
          </div>
          
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
            <a 
              href={data.personal.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-xs font-mono text-slate-400 hover:text-purple-300 transition-colors uppercase tracking-wider"
            >
              LinkedIn
            </a>
            <a 
              href={data.personal.gitHubUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-400 hover:text-purple-300 transition-colors uppercase tracking-wider"
            >
              GitHub
            </a>
            <a 
              href={data.personal.twitterUrl} 
              className="text-xs font-mono text-slate-400 hover:text-purple-300 transition-colors uppercase tracking-wider"
            >
              Twitter
            </a>
            <a 
              href={`mailto:${data.contact.email}`} 
              className="text-xs font-mono text-slate-400 hover:text-purple-300 transition-colors uppercase tracking-wider"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
