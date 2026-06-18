import React, { useState, useEffect } from "react";
import { Upload, User, Sparkles } from "lucide-react";

interface ProfileImageProps {
  imagePath: string;
}

export default function ProfileImage({ imagePath }: ProfileImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(imagePath);
  const [loadError, setLoadError] = useState<boolean>(false);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [showUploadMsg, setShowUploadMsg] = useState<boolean>(false);

  // When props change, reset states
  useEffect(() => {
    setImgSrc(imagePath);
    setLoadError(false);
  }, [imagePath]);

  // Handle local file selection for testing/preview in real time
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewSrc(objectUrl);
      setLoadError(false);
      setShowUploadMsg(true);
      setTimeout(() => setShowUploadMsg(false), 5000); // hide instruction msg after 5s
    }
  };

  const currentSrc = previewSrc || imgSrc;

  return (
    <div className="relative group select-none">
      {/* Outer Glow container */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-2xl blur-[40px] opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

      {/* Main glass-card container */}
      <div 
        id="profile-card"
        className="relative w-64 h-64 md:w-96 md:h-96 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10 p-2 transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:border-purple-500/30 shadow-2xl overflow-hidden flex flex-col items-center justify-center"
      >
        {!loadError ? (
          <img
            src={currentSrc}
            alt="Haidy Saied Tawfik Profile"
            className="w-full h-full object-cover rounded-xl transition duration-500 filter"
            onError={() => {
              setLoadError(true);
            }}
          />
        ) : (
          /* High-quality vector developer placeholder when no image is uploaded */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-900/80 to-slate-950/90 rounded-xl p-6 text-center border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            
            {/* Ambient background decoration */}
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>

            {/* Glowing Icon Shield */}
            <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full bg-slate-800/40 border border-purple-500/30 flex items-center justify-center mb-4 md:mb-6 shadow-[0_0_15px_rgba(139,92,246,0.15)] glow-animation">
              <User className="w-10 h-10 md:w-14 md:h-14 text-purple-400 stroke-[1.5]" />
              <div className="absolute -bottom-1 -right-1 p-1 bg-purple-500/10 border border-purple-500/30 rounded-full">
                <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              </div>
            </div>

            <h4 className="text-normal font-sans font-medium text-purple-200 tracking-wide">
              HAIDY SAIED TAWFIK
            </h4>
            <span className="text-xs font-mono text-purple-400/80 mt-1 uppercase tracking-wider">
              QA Automation & AI Quality
            </span>

            <p className="text-xs text-slate-400 max-w-[200px] md:max-w-[240px] mt-3 leading-relaxed">
              Default placeholder. Upload a photo below or update <code className="text-purple-300 font-mono text-[10px] bg-slate-950 px-1 py-0.5 rounded">/public/images/profile.jpg</code> to replace.
            </p>
          </div>
        )}

        {/* Upload Button Overlay */}
        <label 
          htmlFor="profile-upload" 
          className="absolute bottom-4 right-4 flex items-center justify-center p-3 rounded-full bg-slate-950/80 hover:bg-purple-600 border border-white/20 text-white cursor-pointer hover:scale-115 active:scale-95 transition-all duration-300 shadow-lg group/btn z-30"
          title="Upload or Preview Profile Photo"
        >
          <Upload className="w-5 h-5 text-white/90 group-hover/btn:rotate-6 transition-transform" />
          <input
            id="profile-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      {/* Floating alert for preview simulation */}
      {showUploadMsg && (
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-slate-900 border border-purple-500/40 text-purple-200 text-xs py-2 px-4 rounded-lg shadow-xl w-72 text-center animate-bounce z-40">
          ✨ Live Preview! Remember to place your image in <code className="text-white font-mono bg-slate-950 px-1 py-0.5 rounded">/public/images/profile.jpg</code> for permanent storage.
        </div>
      )}
    </div>
  );
}
