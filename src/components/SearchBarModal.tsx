import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, MessageSquare, Code, ArrowRight } from 'lucide-react';
import { LessonModule, Language } from '../types';
import { getTranslation } from '../i18n/translations';

interface SearchBarModalProps {
  isOpen: boolean;
  onClose: () => void;
  modules: LessonModule[];
  onSelectModuleStep: (moduleId: string, stepId: string) => void;
  language: Language;
}

export const SearchBarModal: React.FC<SearchBarModalProps> = ({
  isOpen,
  onClose,
  modules,
  onSelectModuleStep,
  language,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Search indexing logic
  const searchResults = query.trim()
    ? modules.flatMap((module) =>
        module.steps
          .filter((step) => {
            const q = query.toLowerCase();
            return (
              step.title[language].toLowerCase().includes(q) ||
              step.summary[language].toLowerCase().includes(q) ||
              step.contentMarkdown[language].toLowerCase().includes(q) ||
              step.promptCard?.promptText[language].toLowerCase().includes(q) ||
              step.codeSnippet?.code.toLowerCase().includes(q)
            );
          })
          .map((step) => ({ module, step }))
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl w-full max-w-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[75vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={getTranslation(language, 'searchPlaceholder')}
            autoFocus
            className="flex-1 bg-transparent text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-xs text-slate-400 space-y-2">
              <p>💡 검색어를 입력하시면 실습 단계, 프롬프트, 소스코드를 한눈에 찾을 수 있습니다.</p>
              <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                {['DALL-E', 'Deep Research', 'OpenAI API', 'PyQt6', 'Rust', 'Expo', 'Vercel'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 rounded-md text-xs font-mono border border-slate-200"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="text-center py-10 text-sm text-slate-400">
              {getTranslation(language, 'noSearchResults')}
            </div>
          ) : (
            searchResults.map(({ module, step }) => (
              <button
                key={`${module.id}-${step.id}`}
                onClick={() => {
                  onSelectModuleStep(module.id, step.id);
                  onClose();
                }}
                className="w-full text-left p-3 rounded-xl border border-slate-100 hover:border-emerald-200 bg-slate-50/50 hover:bg-emerald-50/50 transition-colors flex items-center justify-between gap-3 group cursor-pointer"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      Module {module.id}
                    </span>
                    <span className="text-xs text-slate-500 font-medium truncate">
                      {module.title[language]}
                    </span>
                  </div>
                  <h5 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 truncate">
                    Step {step.stepNumber}. {step.title[language]}
                  </h5>
                  <p className="text-xs text-slate-500 line-clamp-1">
                    {step.summary[language]}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0" />
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
          <span>{searchResults.length} {getTranslation(language, 'searchResultTitle')}</span>
          <span>Esc 키를 눌러 닫기</span>
        </div>

      </div>
    </div>
  );
};
