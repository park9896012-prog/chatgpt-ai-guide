import React from 'react';
import { Image, Search, Code, Github, Layout, Globe, Smartphone, Monitor, Cpu, CheckCircle, Clock, BookOpen, ChevronRight, Menu, X } from 'lucide-react';
import { LessonModule, Language } from '../types';
import { getTranslation } from '../i18n/translations';

interface SidebarProps {
  modules: LessonModule[];
  currentModuleId: string;
  onSelectModule: (id: string) => void;
  completedModules: Record<string, boolean>;
  language: Language;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Image: <Image className="w-4 h-4" />,
  Search: <Search className="w-4 h-4" />,
  Code: <Code className="w-4 h-4" />,
  Github: <Github className="w-4 h-4" />,
  Layout: <Layout className="w-4 h-4" />,
  Globe: <Globe className="w-4 h-4" />,
  Smartphone: <Smartphone className="w-4 h-4" />,
  Monitor: <Monitor className="w-4 h-4" />,
  Cpu: <Cpu className="w-4 h-4" />,
};

export const Sidebar: React.FC<SidebarProps> = ({
  modules,
  currentModuleId,
  onSelectModule,
  completedModules,
  language,
  isOpenMobile,
  onCloseMobile,
}) => {
  const part1Modules = modules.filter((m) => m.partId === 'part-1');
  const part2Modules = modules.filter((m) => m.partId === 'part-2');

  const renderModuleItem = (module: LessonModule) => {
    const isSelected = module.id === currentModuleId;
    const isCompleted = !!completedModules[module.id];

    return (
      <button
        key={module.id}
        onClick={() => {
          onSelectModule(module.id);
          onCloseMobile();
        }}
        className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between gap-3 text-sm transition-all group cursor-pointer ${
          isSelected
            ? 'bg-emerald-50 text-emerald-900 font-semibold border-l-4 border-emerald-600 shadow-2xs'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <span
            className={`p-1.5 rounded-md transition-colors ${
              isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
            }`}
          >
            {iconMap[module.iconName] || <BookOpen className="w-4 h-4" />}
          </span>
          <span className="truncate">{module.title[language]}</span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {isCompleted ? (
            <CheckCircle className="w-4 h-4 text-emerald-600" />
          ) : (
            <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-600">
              {module.estimatedMinutes}{getTranslation(language, 'minutes')}
            </span>
          )}
        </div>
      </button>
    );
  };

  const sidebarContent = (
    <div className="flex flex-col h-full bg-slate-50/80 border-r border-slate-200 p-4">
      
      {/* Sidebar Header */}
      <div className="pb-4 border-b border-slate-200/80 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-600" />
          <h2 className="font-bold text-slate-900 text-sm tracking-wide uppercase">
            {language === 'ko' ? '학습 목차' : 'Table of Contents'}
          </h2>
        </div>
        <button
          onClick={onCloseMobile}
          className="md:hidden p-1.5 text-slate-400 hover:text-slate-600 rounded-md"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto space-y-6 pr-1 custom-scrollbar">
        
        {/* Part 1 */}
        <div>
          <div className="px-2 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>{getTranslation(language, 'part1Title')}</span>
          </div>
          <div className="space-y-1">
            {part1Modules.map(renderModuleItem)}
          </div>
        </div>

        {/* Part 2 */}
        <div>
          <div className="px-2 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>{getTranslation(language, 'part2Title')}</span>
          </div>
          <div className="space-y-1">
            {part2Modules.map(renderModuleItem)}
          </div>
        </div>

      </div>

      {/* Footer Info Box */}
      <div className="pt-4 border-t border-slate-200/80 text-xs text-slate-500 space-y-2">
        <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
          <p className="font-semibold text-slate-800 mb-1">
            {getTranslation(language, 'gitHubExportReady')}
          </p>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            {language === 'ko'
              ? '모든 코드는 GitHub 리포지토리 및 실무 프로젝트에 즉시 적용 가능한 모듈식 구조입니다.'
              : 'All code blocks are modular and ready for instant export to GitHub repositories.'}
          </p>
        </div>
      </div>

    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-72 shrink-0 h-[calc(100vh-4rem)] sticky top-16">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs" onClick={onCloseMobile} />
          <div className="relative w-80 max-w-[80vw] bg-white h-full z-10 shadow-xl">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};
