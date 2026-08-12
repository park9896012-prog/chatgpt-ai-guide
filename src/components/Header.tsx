import React from 'react';
import { Search, Globe, Mail, Shield, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../i18n/translations';

interface HeaderProps {
  language: Language;
  onLanguageToggle: () => void;
  onOpenSearch: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenContact: () => void;
  completedCount: number;
  totalCount: number;
  progressPercent: number;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageToggle,
  onOpenSearch,
  onOpenPrivacy,
  onOpenTerms,
  onOpenContact,
  completedCount,
  totalCount,
  progressPercent,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left: Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-sm shadow-emerald-500/20">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-slate-900 tracking-tight">
                {getTranslation(language, 'siteTitle')}
              </h1>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                {getTranslation(language, 'vibeCodingBadge')}
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden md:block">
              {getTranslation(language, 'siteSubTitle')}
            </p>
          </div>
        </div>

        {/* Center: Search & Progress Bar */}
        <div className="flex-1 max-w-md hidden md:flex items-center gap-4">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-150 border border-slate-200 text-sm text-slate-500 transition-colors cursor-pointer group"
          >
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
              <span>{getTranslation(language, 'searchPlaceholder')}</span>
            </span>
            <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-400 bg-white rounded border border-slate-200">
              Ctrl K
            </kbd>
          </button>
        </div>

        {/* Right: Actions (Language, Progress, Contact) */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Mobile Search Button */}
          <button
            onClick={onOpenSearch}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            title="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Course Progress Indicator */}
          <div className="hidden xl:flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            <div className="flex flex-col text-right">
              <span className="text-[11px] text-slate-500 font-medium">
                {getTranslation(language, 'overallProgress')}
              </span>
              <span className="text-xs font-bold text-slate-800">
                {completedCount} / {totalCount} ({progressPercent}%)
              </span>
            </div>
            <div className="w-12 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Legal Links */}
          <div className="hidden lg:flex items-center gap-1 border-l border-slate-200 pl-3">
            <button
              onClick={onOpenPrivacy}
              className="px-2 py-1 text-xs text-slate-600 hover:text-emerald-600 hover:underline transition-colors"
            >
              {getTranslation(language, 'privacyPolicy')}
            </button>
            <span className="text-slate-300">•</span>
            <button
              onClick={onOpenTerms}
              className="px-2 py-1 text-xs text-slate-600 hover:text-emerald-600 hover:underline transition-colors"
            >
              {getTranslation(language, 'termsOfService')}
            </button>
          </div>

          {/* Contact Email Button */}
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200/80"
            title="Contact Author"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">ju9896012@gmail.com</span>
          </button>

          {/* Language Toggle Button */}
          <button
            onClick={onLanguageToggle}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors cursor-pointer shadow-2xs"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{language === 'ko' ? 'EN' : '한'}</span>
          </button>

        </div>
      </div>
    </header>
  );
};
