import React, { useState } from 'react';
import { MessageSquare, Copy, Check, Sparkles, Terminal } from 'lucide-react';
import { StepPrompt, Language } from '../types';
import { getTranslation } from '../i18n/translations';

interface PromptCardProps {
  promptCard: StepPrompt;
  language: Language;
  onRunSandbox: (promptText: string) => void;
}

export const PromptCard: React.FC<PromptCardProps> = ({
  promptCard,
  language,
  onRunSandbox,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(promptCard.promptText[language]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50/80 via-teal-50/30 to-white p-5 shadow-xs">
      
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-emerald-200/60">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow-xs">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              {promptCard.title[language]}
            </h4>
            <span className="text-[11px] font-semibold text-emerald-700">
              💡 ChatGPT Recommended Prompt
            </span>
          </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
            copied
              ? 'bg-emerald-700 text-white shadow-2xs'
              : 'bg-white hover:bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-2xs'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>{getTranslation(language, 'promptCopied')}</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>{getTranslation(language, 'copyPrompt')}</span>
            </>
          )}
        </button>
      </div>

      {/* Main Prompt Text */}
      <div className="bg-white/90 p-4 rounded-lg border border-emerald-200/80 font-sans text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-wrap shadow-inner select-all">
        {promptCard.promptText[language]}
      </div>

      {/* Parameter Tags & Explanation */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-2">
        <div className="flex flex-wrap items-center gap-1.5">
          {promptCard.parameters?.map((param, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-100 text-emerald-800 border border-emerald-200"
            >
              #{param}
            </span>
          ))}
        </div>

        {/* Test in Sandbox Button */}
        <button
          onClick={() => onRunSandbox(promptCard.promptText[language])}
          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer ml-auto"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{getTranslation(language, 'runSandbox')}</span>
        </button>
      </div>

      {/* Explanation */}
      <p className="mt-3 text-[11px] text-slate-500 leading-snug">
        📌 {promptCard.explanation[language]}
      </p>

    </div>
  );
};
