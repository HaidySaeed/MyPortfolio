import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Code, 
  Cloud, 
  Layout, 
  Settings, 
  FlaskConical, 
  Cpu, 
  Layers, 
  TrendingUp, 
  CheckCircle,
  Briefcase,
  AlertCircle,
  Smartphone,
  Server
} from "lucide-react";
import ProjectImage from "../components/ProjectImage";

// ============================================================================
// HOW TO ADD NEW PROJECT CASE STUDY DETAILS AND IMAGES:
// ============================================================================
// 1. Save your custom visual asset inside `/public/images/` path.
// 2. Map the local image URL key under PROJECTS_DETAILS in this file.
// 3. Match the project ID with the route parameters and portfolio.json.
// ============================================================================

interface ContributionItem {
  text: string;
  iconType: "code" | "cloud" | "layout" | "settings" | "test-tube" | "cpu" | "briefcase" | "mobile" | "server";
}

interface ResultItem {
  metric: string;
  label: string;
  description: string;
}

interface ProjectDetailContent {
  id: string;
  title: string;
  tagline: string;
  image: string;
  tags: string[];
  overview: string;
  problem: string;
  solution: string;
  contributions: ContributionItem[];
  results: ResultItem[];
}

const PROJECTS_DETAILS: Record<string, ProjectDetailContent> = {
  "qa-automation-hub": {
    id: "qa-automation-hub",
    title: "QA Automation Hub",
    tagline: "A centralized platform designed to unify divergent regression signals into a single point of quality oversight.",
    image: "/images/QAhub.png",
    tags: ["Playwright", "TypeScript", "Node.js", "Express", "GitHub Actions", "Tailwind CSS"],
    overview: "The QA Automation Hub unifies disparate regression testing inputs into a cohesive diagnostic portal. By standardizing outputs from decentralized Continuous Integration (CI) execution nodes, the platform translates raw logging telemetry directly into actionable quality parameters for teams and product owners.",
    problem: "Release teams dealt with hundreds of uncoordinated, multi-format JSON and XML outcome files distributed across standalone code pipelines. The lack of a unified screen for verifying stable builds created delays in deployments and made identifying actual code regressions vs. transient environmental runner issues costly and manual.",
    solution: "Engineered a low-latency reporter microservice integrated with modern E2E automation runs. Active test suites forward raw results to an Express parsing API via secure webhook triggers. Structured data outputs are normalized and presented securely on an interactive web application that provides real-time system stability flags.",
    contributions: [
      {
        text: "Led the full-stack architecture design, specifying REST endpoint architectures and secure JSON/XML reporting schemas.",
        iconType: "cpu"
      },
      {
        text: "Programmed robust webhook ingestion interfaces and dynamic parallel GitHub Actions pipeline hooks.",
        iconType: "cloud"
      },
      {
        text: "Designed and developed the recruiter-friendly web user interface utilizing reusable components to track system performance trends.",
        iconType: "layout"
      }
    ],
    results: [
      {
        metric: "12 mins",
        label: "Regression Loop Duration",
        description: "Slashed end-to-end regression assessment cycles from over 3 hours down to under 12 minutes."
      },
      {
        metric: "45+",
        label: "Fewer Flaky Pipelines",
        description: "Isolated and resolved persistent intermittent staging race conditions to ensure high reliability indexes."
      },
      {
        metric: "Daily",
        label: "Release Frequency",
        description: "Enabled team leads to run multiple confident production releases and daily updates without manual oversight bottlenecks."
      }
    ]
  },
  "ai-test-generator": {
    id: "ai-test-generator",
    title: "AI-Powered Test Gen using n8n",
    tagline: "An elegant AI-orchestrated testing coordinator utilizing LLMs to accelerate test generation speeds by over 60%.",
    image: "/images/ai-test-generator.png",
    tags: ["n8n", "GPT-4", "Claude", "Prompting", "AI Quality", "Gherkin"],
    overview: "AI-Powered Test Gen is an AI-driven script synthesis coordinator. By analyzing functional Product Requirement Documents (PRDs) and dynamic layout criteria, the assistant automatically builds boilerplate automated E2E test scripts, bridges behavioral constraints, and verifies dynamic parameters.",
    problem: "Translating human-formatted design scopes into standardized automated test definitions and locator maps was an intense, repetitive process. Agile delivery teams frequently spent multiple days per sprint writing Gherkin statements and scripting repetitive actions, leaving critical logical paths unchecked during rapid rollouts.",
    solution: "Developed an elegant n8n orchestration workflow that intercepts changes in feature branches. The automated system feeds functional scopes into specialized LLMs via prompt chains to identify structural components, format robust Gherkin test targets, and write error-free, type-safe Playwright scripts.",
    contributions: [
      {
        text: "Architected n8n multi-step prompt routines to route contexts safely across multiple LLMs.",
        iconType: "settings"
      },
      {
        text: "Formulated optimized, self-correcting prompt instructions to ensure generated scripts strictly adhere to execution templates.",
        iconType: "test-tube"
      },
      {
        text: "Configured target webhooks linking active repository changes to instant automated testing suites.",
        iconType: "cloud"
      }
    ],
    results: [
      {
        metric: "60%",
        label: "QA Setup Savings",
        description: "Removed multiple tedious steps from manual script writing and behavioral test definition mapping."
      },
      {
        metric: "25%",
        label: "Wider Coverage Index",
        description: "Discovered and mapped auxiliary edge cases and secondary user actions during review processes."
      },
      {
        metric: "Auto",
        label: "Direct Git Integration",
        description: "Synthesized test files are committed immediately to the target testing branch for developer validation."
      }
    ]
  },
  "playwright-framework": {
    id: "playwright-framework",
    title: "Playwright POM Framework",
    tagline: "A production-grade, highly scalable Page Object Model architecture designed from scratch for web applications.",
    image: "/images/playrightPro.jpg",
    tags: ["Playwright", "TypeScript", "E2E Testing", "Parallelism", "Page Object Model"],
    overview: "This enterprise testing harness is optimized for cross-browser visual and functional verification. Built using pure TypeScript paradigms, the framework decouples element page definitions from core logic suites to produce bulletproof scripts with zero flake.",
    problem: "Legacy test runner configurations was highly fragile, suffering from timing discrepancies across browser engines, outdated static wait sleeps, and massive processing queues that resulted in false build failure reports.",
    solution: "Architected a type-safe Page Object Model framework. Created dynamic event listeners to replace sleep statements, built centralized configuration schemas, and designed multi-process test executors that scale testing bandwidth cleanly.",
    contributions: [
      {
        text: "Drafted the primary architecture and established modular page templates implementing TypeScript best practices.",
        iconType: "layout"
      },
      {
        text: "Configured elegant dynamic waiting loops and custom smart locators resolving asynchronous visual elements gracefully.",
        iconType: "code"
      },
      {
        text: "Programmed high-performance, high-concurrency test execution matrices on centralized GitHub Action nodes.",
        iconType: "cloud"
      }
    ],
    results: [
      {
        metric: "98%+",
        label: "Execution Stability",
        description: "Completely eliminated random timer crashes and flaky action issues via responsive event waiters."
      },
      {
        metric: "75%",
        label: "Test Runtime Speedup",
        description: "Leveraged multi-browser parallel capabilities to scale pipeline running speed exponentially."
      },
      {
        metric: "Rapid",
        label: "Developer Onboarding",
        description: "Enabled rapid script drafting for junior team members through clean page methods and intuitive schemas."
      }
    ]
  },
  "vodafone-eshop-framework": {
id: "vodafone-eshop-framework",
title: "Vodafone eShop Framework",
tagline: "Automation framework for Vodafone's telecom e-commerce platform using Selenium and Cucumber.",
image: "/images/vodafone.png",
tags: ["Selenium", "Java", "Cucumber", "BDD", "Jenkins"],
overview: "Developed and maintained automation scripts for Vodafone eShop, covering customer journeys such as number selection, checkout, plan purchase, and order management.",
problem: "Regression testing for Vodafone eShop required significant manual effort due to frequent releases and multiple customer purchase flows.",
solution: "Built and enhanced BDD automation suites using Selenium, Java, and Cucumber to automate critical business scenarios and support continuous testing.",
contributions: [
{
text: "Developed and maintained Selenium-Cucumber automation scripts for end-to-end user journeys.",
iconType: "code"
},
{
text: "Contributed to manual testing, defect validation, and regression execution.",
iconType: "test-tube"
},
{
text: "Supported CI/CD pipelines and automated test execution processes.",
iconType: "cloud"
}
],
results: [
{
metric: "100+",
label: "Automated Scenarios",
description: "Covered critical e-commerce customer journeys with automation."
},
{
metric: "Faster",
label: "Regression Cycles",
description: "Reduced manual effort and improved release confidence."
},
{
metric: "Agile",
label: "Release Support",
description: "Supported frequent deployments through automated validation."
}
]
},
"octo-mobile-app": {
id: "octo-mobile-app",
title: "Octo FinTech Platform",
tagline: "End-to-end quality assurance for web, mobile, and API applications in the FinTech domain.",
image: "/images/octo.jpeg",
tags: ["Appium", "Selenium", "RestAssured", "Java", "FinTech"],
overview: "Worked on manual and automation testing for FinTech products across web, mobile, and APIs, ensuring reliability of core business and transaction flows.",
problem: "Testing multiple platforms manually was time-consuming and increased the risk of missing defects during releases.",
solution: "Implemented automation solutions using Selenium, Appium, and RestAssured to validate web, mobile, and API functionality efficiently.",
contributions: [
{
text: "Built and maintained mobile automation scripts using Appium for Android and iOS.",
iconType: "mobile"
},
{
text: "Developed API automation suites using RestAssured and validated backend data.",
iconType: "server"
},
{
text: "Executed manual, regression, and exploratory testing across web and mobile platforms.",
iconType: "test-tube"
}
],
results: [
{
metric: "Web + Mobile",
label: "Cross-Platform Coverage",
description: "Validated business-critical workflows across multiple platforms."
},
{
metric: "API",
label: "Automation Coverage",
description: "Improved reliability through automated API validation."
},
{
metric: "FinTech",
label: "Business Quality",
description: "Supported stable releases for financial products and services."
}
]
}


};

const ContributionIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "code":
      return <Code className="w-5 h-5 text-purple-400 shrink-0" />;
    case "cloud":
      return <Cloud className="w-5 h-5 text-purple-400 shrink-0" />;
    case "layout":
      return <Layout className="w-5 h-5 text-purple-400 shrink-0" />;
    case "settings":
      return <Settings className="w-5 h-5 text-purple-400 shrink-0" />;
    case "test-tube":
      return <FlaskConical className="w-5 h-5 text-purple-400 shrink-0" />;
    case "cpu":
      return <Cpu className="w-5 h-5 text-purple-400 shrink-0" />;
    case "mobile":
      return <Smartphone className="w-5 h-5 text-purple-400 shrink-0" />;
    case "server":
      return <Server className="w-5 h-5 text-purple-400 shrink-0" />;
    default:
      return <Briefcase className="w-5 h-5 text-purple-400 shrink-0" />;
  }
};

export default function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projectId ? PROJECTS_DETAILS[projectId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#051424] flex flex-col items-center justify-center text-center p-6 text-white font-sans">
        <div className="space-y-4 max-w-md">
          <AlertCircle className="w-12 h-12 text-purple-400 mx-auto" />
          <h2 className="text-xl font-bold tracking-tight">Case Study Not Found</h2>
          <p className="text-slate-400 text-sm">
            The project profile you are searching for is currently unmapped or has been relocated in the portfolio router.
          </p>
          <button 
            id="not-found-back-btn"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#051424] text-slate-100 font-sans antialiased pb-16">
      
      {/* HEADER NAVIGATION */}
      <nav id="case-study-nav" className="sticky top-0 z-50 bg-[#051424]/80 backdrop-blur-md border-b border-white/10 h-16">
        <div className="flex justify-between items-center px-4 md:px-8 max-w-5xl mx-auto h-full">
          <button 
            id="header-back-to-portfolio-btn"
            onClick={() => navigate("/")}
            className="flex items-center gap-2 group text-slate-300 hover:text-white transition-colors cursor-pointer text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 text-purple-400 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Portfolio</span>
          </button>
          
          <div className="text-xs font-semibold tracking-wider text-purple-400 uppercase">
            Case Study Portfolio
          </div>
        </div>
      </nav>

      {/* CASE STUDY CONTENT */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 space-y-10">
        
        {/* HERO BANNER */}
        <div className="relative w-full h-48 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-lg">
          <ProjectImage 
            src={project.image} 
            alt={project.title}
            title={project.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051424] via-transparent to-transparent"></div>
        </div>

        {/* HEADER INFORMATION UNDER IMAGE */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none mb-1">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-snug">
              {project.tagline}
            </p>
          </div>

          {/* TECH STACK CHIPS */}
          <div id="tech-stack-section" className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* OVERVIEW & PROBLEM & SOLUTION (Clean Minimal Cards) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* 1. Overview */}
          <div className="bg-slate-900/35 border border-white/5 rounded-xl p-5 space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-purple-400">
              1. Overview
            </h2>
            <p className="text-sm text-slate-300 leading-normal">
              {project.overview}
            </p>
          </div>

          {/* 2. Problem */}
          <div className="bg-slate-900/35 border border-white/5 rounded-xl p-5 space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-red-400">
              2. Problem
            </h2>
            <p className="text-sm text-slate-300 leading-normal">
              {project.problem}
            </p>
          </div>

          {/* 3. Solution */}
          <div className="md:col-span-2 bg-slate-900/35 border border-white/5 rounded-xl p-5 space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
              3. Solution
            </h2>
            <p className="text-sm text-slate-300 leading-normal">
              {project.solution}
            </p>
          </div>

        </section>

        {/* 4. MY CONTRIBUTION & 5. TECH STACK badges section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* 4. Contribution Bullet Points */}
          <div className="bg-slate-900/35 border border-white/5 rounded-xl p-5 space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-purple-400">
              4. My Contribution
            </h2>
            <ul className="space-y-3">
              {project.contributions.map((item, idx) => (
                <li key={idx} className="flex gap-2.5 items-start text-sm text-slate-300">
                  <ContributionIcon type={item.iconType} />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Tech Stack */}
          <div className="bg-slate-900/35 border border-white/5 rounded-xl p-5 space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-purple-400">
              5. Tech Stack
            </h2>
            <p className="text-xs text-slate-400 leading-tight">
              Technologies leveraged during planning, design, execution, and delivery:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-2.5 py-1 rounded bg-[#061e38] border border-white/5 text-xs text-slate-300 hover:border-purple-500/30 transition-all font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </section>

        {/* 6. RESULTS - highlighted metrics */}
        <section className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-purple-400">
            6. Results & Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.results.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/40 hover:bg-slate-900/60 border border-white/5 hover:border-purple-500/20 rounded-xl p-4 space-y-1.5 transition-all text-center sm:text-left"
              >
                <div className="text-3xl font-extrabold text-purple-400 select-none">
                  {item.metric}
                </div>
                <div className="text-xs font-bold text-slate-200 tracking-tight leading-tight">
                  {item.label}
                </div>
                <div className="text-xs text-slate-400 leading-normal">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM BACK BUTTON */}
        <section className="text-center pt-6 border-t border-white/10">
          <button 
            id="footer-back-to-portfolio-btn"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm px-6 py-3 rounded-lg hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio Homepage
          </button>
        </section>

      </main>
    </div>
  );
}
