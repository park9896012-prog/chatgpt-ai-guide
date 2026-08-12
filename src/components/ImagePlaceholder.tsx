import React, { useState } from 'react';
import { Image as ImageIcon, ExternalLink, Play, Sparkles, Monitor, Eye, CheckCircle2 } from 'lucide-react';
import { ScreenshotSpec, Language } from '../types';
import { getTranslation } from '../i18n/translations';

interface ImagePlaceholderProps {
  spec: ScreenshotSpec;
  language: Language;
  onOpenLivePrototype?: (mockType: ScreenshotSpec['mockType']) => void;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  spec,
  language,
  onOpenLivePrototype,
}) => {
  const [showSimulatedView, setShowSimulatedView] = useState(false);

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-slate-200 bg-slate-900 text-slate-100 shadow-md">
      {/* Mockup Window Titlebar */}
      <div className="bg-slate-800/90 px-4 py-2.5 border-b border-slate-700/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2 truncate max-w-xs sm:max-w-md">
            Screenshot: {spec.title[language]}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold font-mono uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
            {spec.mockType}
          </span>
        </div>
      </div>

      {/* Main Image Graphic Area */}
      <div className="p-6 sm:p-8 bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col items-center justify-center text-center relative min-h-[220px]">
        
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

        {!showSimulatedView ? (
          <div className="relative z-10 max-w-lg space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
              <ImageIcon className="w-7 h-7" />
            </div>

            <h4 className="text-base font-bold text-white tracking-tight">
              {spec.title[language]}
            </h4>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              {spec.description[language]}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setShowSimulatedView(true)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>
                  {language === 'ko' ? '실제 화면 캡처 미리보기' : 'Preview Screen Capture'}
                </span>
              </button>

              {onOpenLivePrototype && (
                <button
                  onClick={() => onOpenLivePrototype(spec.mockType)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-500/30 font-medium text-xs rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>
                    {getTranslation(language, 'livePrototype')}
                  </span>
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Simulated High-Fidelity UI Screenshot View */
          <div className="relative z-10 w-full max-w-2xl bg-slate-800/90 rounded-lg p-4 border border-slate-700 text-left space-y-3 text-xs">
            <div className="flex items-center justify-between border-b border-slate-700 pb-2">
              <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {spec.title[language]}
              </span>
              <button
                onClick={() => setShowSimulatedView(false)}
                className="text-[11px] text-slate-400 hover:text-white underline cursor-pointer"
              >
                {language === 'ko' ? '가이드로 돌아가기' : 'Back to Guide'}
              </button>
            </div>

            <div className="p-4 bg-slate-950 rounded border border-slate-800 text-slate-300 space-y-2 font-mono text-[11px] leading-relaxed">
              <p className="text-emerald-400 font-bold">
                [UI Screen Simulation - {spec.mockType.toUpperCase()}]
              </p>
              <p>{spec.description[language]}</p>
              <div className="p-2 bg-slate-900 rounded border border-slate-800 text-slate-400">
                ✓ Rendered viewport initialized<br/>
                ✓ Interactive elements loaded<br/>
                ✓ Simulated DALL·E / OpenAI / Web / Desktop UI screenshot verified.
              </div>
            </div>

            {onOpenLivePrototype && (
              <div className="pt-1 flex justify-end">
                <button
                  onClick={() => onOpenLivePrototype(spec.mockType)}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3 h-3" />
                  <span>{getTranslation(language, 'livePrototype')}</span>
                </button>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Caption Footer */}
      {spec.caption && (
        <div className="bg-slate-900 px-4 py-2 text-center text-xs text-slate-400 border-t border-slate-800/80 font-mono">
          {spec.caption[language]}
        </div>
      )}
    </div>
  );
};
