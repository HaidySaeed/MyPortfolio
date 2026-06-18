import React, { useState } from "react";
import { Terminal, Cpu, Code, Settings, Sparkles, Layers } from "lucide-react";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  title: string;
}

export default function ProjectImage({ src, alt, className = "", title }: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    // Generate a sleek, high-fidelity developer placeholder
    const getIcon = () => {
      const lower = title.toLowerCase();
      if (lower.includes("hub") || lower.includes("qa")) {
        return <Terminal className="w-10 h-10 text-purple-400 stroke-[1.5]" />;
      }
      if (lower.includes("ai") || lower.includes("generator") || lower.includes("n8n")) {
        return <Sparkles className="w-10 h-10 text-purple-400 stroke-[1.5]" />;
      }
      if (lower.includes("playwright") || lower.includes("framework") || lower.includes("pom")) {
        return <Code className="w-10 h-10 text-purple-400 stroke-[1.5]" />;
      }
      if (lower.includes("eshop") || lower.includes("vodafone")) {
        return <Layers className="w-10 h-10 text-purple-400 stroke-[1.5]" />;
      }
      return <Settings className="w-10 h-10 text-purple-400 stroke-[1.5]" />;
    };

    return (
      <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-[#07192f] to-[#041221] border border-white/5 relative p-4 text-center select-none ${className}`}>
        {/* Subtle grid mesh overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40"></div>
        
        {/* Ambient background glow elements */}
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>

        <div className="relative mb-3 p-3 bg-slate-800/40 rounded-xl border border-white/10 shadow-lg shrink-0">
          {getIcon()}
        </div>
        <h4 className="text-xs font-sans font-semibold text-slate-200 uppercase tracking-wider line-clamp-1 px-2">
          {title}
        </h4>
        <p className="text-[9px] font-mono text-purple-400/80 mt-1 uppercase tracking-widest shrink-0">
          Placeholder Asset
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
    />
  );
}
