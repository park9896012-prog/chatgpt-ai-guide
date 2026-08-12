import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, Circle, ArrowLeft, ArrowRight, Sparkles, BookOpen, Clock, 
  Target, ShieldCheck, Mail, Share2, Award, CheckCircle2, ChevronRight, Menu 
} from 'lucide-react';

import { courseModules } from './data/coursesData';
import { Language, LessonModule, Step, ScreenshotSpec } from './types';
import { getTranslation } from './i18n/translations';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { OnThisPageTOC } from './components/OnThisPageTOC';
import { StepNavigator } from './components/StepNavigator';
import { ImagePlaceholder } from './components/ImagePlaceholder';
import { PromptCard } from './components/PromptCard';
import { CodeBlock } from './components/CodeBlock';
import { PromptSandboxModal } from './components/PromptSandboxModal';
import { AdSenseBanner } from './components/AdSenseBanner';
import { ComplianceModals } from './components/ComplianceModals';
import { SearchBarModal } from './components/SearchBarModal';

export default function App() {
  // 1. Language State (Auto-detect + LocalStorage)
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('chatgpt_guide_lang');
    if (saved === 'ko' || saved === 'en') return saved;
    return navigator.language.startsWith('ko') ? 'ko' : 'en';
  });

  // Save language preference
  const toggleLanguage = () => {
    const nextLang = language === 'ko' ? 'en' : 'ko';
    setLanguage(nextLang);
    localStorage.setItem('chatgpt_guide_lang', nextLang);
  };

  // 2. Navigation State
  const [currentModuleId, setCurrentModuleId] = useState<string>(() => {
    return localStorage.getItem('chatgpt_guide_last_module') || '1.1';
  });
  const [currentStepId, setCurrentStepId] = useState<string>('step-1');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);

  // 3. User Progress LocalStorage State
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem('chatgpt_guide_completed_steps') || '{}');
    } catch {
      return {};
    }
  });

  // 4. Modals State
  const [complianceModal, setComplianceModal] = useState<'privacy' | 'terms' | 'contact' | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [sandboxState, setSandboxState] = useState<{
    isOpen: boolean;
    promptText?: string;
    mockType?: ScreenshotSpec['mockType'];
  }>({ isOpen: false });

  // Sync Current Module with LocalStorage
  useEffect(() => {
    localStorage.setItem('chatgpt_guide_last_module', currentModuleId);
    setCurrentStepId('step-1'); // Reset to step-1 on module change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentModuleId]);

  // Update Page Meta Title based on Language
  useEffect(() => {
    const activeModule = courseModules.find((m) => m.id === currentModuleId);
    if (activeModule) {
      document.title = `${activeModule.title[language]} | ${getTranslation(language, 'siteTitle')}`;
    }
  }, [currentModuleId, language]);

  // Calculate Progress Metrics
  const currentModule = courseModules.find((m) => m.id === currentModuleId) || courseModules[0];
  const allStepsCount = courseModules.reduce((acc, m) => acc + m.steps.length, 0);
  const completedStepsCount = Object.keys(completedSteps).filter((k) => completedSteps[k]).length;
  const overallProgressPercent = Math.round((completedStepsCount / allStepsCount) * 100) || 0;

  // Completed Modules map
  const completedModules: Record<string, boolean> = {};
  courseModules.forEach((m) => {
    const allStepDone = m.steps.every((s) => completedSteps[`${m.id}-${s.id}`]);
    if (allStepDone && m.steps.length > 0) {
      completedModules[m.id] = true;
    }
  });

  // Toggle Step Completion
  const toggleStepComplete = (moduleId: string, stepId: string) => {
    const key = `${moduleId}-${stepId}`;
    const nextState = { ...completedSteps, [key]: !completedSteps[key] };
    setCompletedSteps(nextState);
    localStorage.setItem('chatgpt_guide_completed_steps', JSON.stringify(nextState));
  };

  // Find Current Step Object
  const activeStep = currentModule.steps.find((s) => s.id === currentStepId) || currentModule.steps[0];
  const activeStepIdx = currentModule.steps.findIndex((s) => s.id === activeStep.id);

  // Next / Previous Navigation Handlers
  const handleNextStep = () => {
    if (activeStepIdx < currentModule.steps.length - 1) {
      setCurrentStepId(currentModule.steps[activeStepIdx + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Jump to next module
      const currentModuleIdx = courseModules.findIndex((m) => m.id === currentModuleId);
      if (currentModuleIdx < courseModules.length - 1) {
        setCurrentModuleId(courseModules[currentModuleIdx + 1].id);
      }
    }
  };

  const handlePrevStep = () => {
    if (activeStepIdx > 0) {
      setCurrentStepId(currentModule.steps[activeStepIdx - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Jump to previous module
      const currentModuleIdx = courseModules.findIndex((m) => m.id === currentModuleId);
      if (currentModuleIdx > 0) {
        const prevModule = courseModules[currentModuleIdx - 1];
        setCurrentModuleId(prevModule.id);
        setCurrentStepId(prevModule.steps[prevModule.steps.length - 1].id);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      
      {/* 1. Sticky Header Navbar */}
      <Header
        language={language}
        onLanguageToggle={toggleLanguage}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenPrivacy={() => setComplianceModal('privacy')}
        onOpenTerms={() => setComplianceModal('terms')}
        onOpenContact={() => setComplianceModal('contact')}
        completedCount={completedStepsCount}
        totalCount={allStepsCount}
        progressPercent={overallProgressPercent}
      />

      {/* 2. Main GitBook / Notion Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex items-start">
        
        {/* Left Sidebar Navigation */}
        <Sidebar
          modules={courseModules}
          currentModuleId={currentModuleId}
          onSelectModule={(id) => setCurrentModuleId(id)}
          completedModules={completedModules}
          language={language}
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Center Main Content Area */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 py-8">
          
          {/* Mobile Table of Contents Bar Trigger */}
          <div className="md:hidden mb-4 flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="flex items-center gap-2 text-xs font-semibold text-slate-700"
            >
              <Menu className="w-4 h-4 text-emerald-600" />
              <span>{currentModule.title[language]}</span>
            </button>
            <span className="text-[10px] font-mono text-slate-400">
              Module {currentModule.id}
            </span>
          </div>

          {/* Module Header Overview Card */}
          <div id="module-header" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs mb-8 space-y-4">
            
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentModule.partTitle[language]}</span>
              </span>

              <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {currentModule.estimatedMinutes} {getTranslation(language, 'minutes')}
                </span>
                <span>•</span>
                <span className="font-mono font-bold text-slate-700">Module {currentModule.id}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {currentModule.title[language]}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {currentModule.subtitle[language]}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              {currentModule.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-mono font-medium border border-slate-200"
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* Learning Goals Box */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Target className="w-4 h-4 text-emerald-600" />
                <span>{getTranslation(language, 'learningGoals')}</span>
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {currentModule.learningGoals[language].map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* AdSense Responsive Banner Top */}
          <AdSenseBanner language={language} slotId={`top-ad-module-${currentModule.id}`} />

          {/* Step Navigator Bar */}
          <StepNavigator
            steps={currentModule.steps}
            currentStepId={currentStepId}
            onSelectStep={(stepId) => setCurrentStepId(stepId)}
            completedSteps={completedSteps}
            moduleId={currentModule.id}
            language={language}
          />

          {/* Active Step Content Article */}
          <article className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
            
            {/* Step Title Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-emerald-700 uppercase">
                  Step {activeStep.stepNumber} of {currentModule.steps.length}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {activeStep.title[language]}
                </h2>
              </div>

              {/* Interactive Step Completion Checkbox */}
              <button
                onClick={() => toggleStepComplete(currentModule.id, activeStep.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                  completedSteps[`${currentModule.id}-${activeStep.id}`]
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {completedSteps[`${currentModule.id}-${activeStep.id}`] ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>{getTranslation(language, 'stepCompleted')}</span>
                  </>
                ) : (
                  <>
                    <Circle className="w-4 h-4 text-slate-400" />
                    <span>{getTranslation(language, 'markStepComplete')}</span>
                  </>
                )}
              </button>
            </div>

            {/* Markdown Body Text */}
            <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
              {activeStep.contentMarkdown[language]}
            </div>

            {/* Screenshot Placeholder Component */}
            {activeStep.screenshotSpec && (
              <ImagePlaceholder
                spec={activeStep.screenshotSpec}
                language={language}
                onOpenLivePrototype={(mockType) =>
                  setSandboxState({
                    isOpen: true,
                    mockType,
                    promptText: activeStep.promptCard?.promptText[language],
                  })
                }
              />
            )}

            {/* Prompt Card Component */}
            {activeStep.promptCard && (
              <PromptCard
                promptCard={activeStep.promptCard}
                language={language}
                onRunSandbox={(text) =>
                  setSandboxState({
                    isOpen: true,
                    promptText: text,
                    mockType: activeStep.screenshotSpec?.mockType,
                  })
                }
              />
            )}

            {/* Code Block Component */}
            {activeStep.codeSnippet && (
              <CodeBlock
                snippet={activeStep.codeSnippet}
                language={language}
                onRunCode={(code, lang) =>
                  setSandboxState({
                    isOpen: true,
                    promptText: code,
                    mockType: activeStep.screenshotSpec?.mockType || 'web',
                  })
                }
              />
            )}

            {/* Practical Tips Box */}
            {activeStep.tips && (
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs sm:text-sm space-y-2">
                <h4 className="font-bold flex items-center gap-1.5 text-amber-900">
                  <span>💡</span> {getTranslation(language, 'tipsTitle')}
                </h4>
                <ul className="list-disc list-inside space-y-1 text-amber-800 leading-snug">
                  {activeStep.tips[language].map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Navigation Controls Bottom */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
              <button
                onClick={handlePrevStep}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{getTranslation(language, 'prevStep')}</span>
              </button>

              <button
                onClick={handleNextStep}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <span>{getTranslation(language, 'nextStep')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </article>

          {/* AdSense Responsive Banner Bottom */}
          <AdSenseBanner language={language} slotId={`bottom-ad-module-${currentModule.id}`} />

          {/* Footer Contact & Legal Disclaimer */}
          <footer className="mt-12 pt-8 border-t border-slate-200/80 text-center space-y-3 text-xs text-slate-500">
            <div className="flex flex-wrap items-center justify-center gap-4 text-slate-600">
              <button
                onClick={() => setComplianceModal('privacy')}
                className="hover:underline hover:text-emerald-700"
              >
                {getTranslation(language, 'privacyPolicy')}
              </button>
              <span>•</span>
              <button
                onClick={() => setComplianceModal('terms')}
                className="hover:underline hover:text-emerald-700"
              >
                {getTranslation(language, 'termsOfService')}
              </button>
              <span>•</span>
              <button
                onClick={() => setComplianceModal('contact')}
                className="hover:underline hover:text-emerald-700"
              >
                {getTranslation(language, 'contactSupport')}
              </button>
            </div>

            <p className="font-mono text-slate-400">
              Contact: <a href="mailto:ju9896012@gmail.com" className="text-emerald-700 font-semibold hover:underline">ju9896012@gmail.com</a>
            </p>

            <p className="text-[11px] text-slate-400">
              © {new Date().getFullYear()} ChatGPT 활용 (ChatGPT Hands-On Guide). {getTranslation(language, 'allRightsReserved')}
            </p>
          </footer>

        </main>

        {/* Right Sidebar Table of Contents */}
        <OnThisPageTOC
          steps={currentModule.steps}
          activeStepId={activeStep.id}
          onSelectStep={(stepId) => setCurrentStepId(stepId)}
          completedSteps={completedSteps}
          moduleId={currentModule.id}
          language={language}
        />

      </div>

      {/* Modals */}
      <ComplianceModals
        type={complianceModal}
        onClose={() => setComplianceModal(null)}
        language={language}
      />

      <SearchBarModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        modules={courseModules}
        onSelectModuleStep={(mId, sId) => {
          setCurrentModuleId(mId);
          setCurrentStepId(sId);
        }}
        language={language}
      />

      <PromptSandboxModal
        isOpen={sandboxState.isOpen}
        onClose={() => setSandboxState({ isOpen: false })}
        initialPrompt={sandboxState.promptText}
        mockType={sandboxState.mockType}
        language={language}
      />

    </div>
  );
}
