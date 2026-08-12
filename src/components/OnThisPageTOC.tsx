import React from 'react';
import { List, CheckCircle, Circle, Award, Code2, MessageSquare } from 'lucide-react';
import { Step, Language } from '../types';
import { getTranslation } from '../i18n/translations';

interface OnThisPageTOCProps {
  steps: Step[];
  activeStepId: string;
  onSelectStep: (stepId: string) => void;
  completedSteps: Record<string, boolean>;
  moduleId: string;
  language: Language;
}

export const OnThisPageTOC: React.FC<OnThisPageTOCProps> = ({
  steps,
  activeStepId,
  onSelectStep,
  completedSteps,
  moduleId,
  language,
}) => {
  return (
    <aside className="hidden lg:block w-64 shrink-0 h-[calc(100vh-4rem)] sticky top-16 p-4 border-l border-slate-200/80 bg-slate-50/50">
      <div className="flex items-center gap-2 mb-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
        <List className="w-4 h-4 text-slate-500" />
        <span>{getTranslation(language, 'onThisPage')}</span>
      </div>

      <nav className="space-y-2 text-xs">
        {/* Module Header Jump */}
        <a
          href="#module-header"
          className="block py-1 px-2 rounded font-semibold text-slate-700 hover:text-emerald-600 hover:bg-slate-100 transition-colors"
        >
          {getTranslation(language, 'learningGoals')}
        </a>

        {/* Steps Jump */}
        <div className="pt-2 border-t border-slate-200/60 space-y-1">
          {steps.map((step) => {
            const isCompleted = !!completedSteps[`${moduleId}-${step.id}`];
            const isActive = activeStepId === step.id;

            return (
              <button
                key={step.id}
                onClick={() => onSelectStep(step.id)}
                className={`w-full text-left py-1.5 px-2 rounded flex items-center justify-between transition-colors cursor-pointer ${
                  isActive
                    ? 'text-emerald-700 font-semibold bg-emerald-50 border-l-2 border-emerald-600'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className="truncate pr-1">
                  Step {step.stepNumber}. {step.title[language].split('.')[1] || step.title[language]}
                </span>
                {isCompleted ? (
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                ) : (
                  <Circle className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* AdSense Placement Info Note */}
        <div className="mt-8 pt-4 border-t border-slate-200/80">
          <div className="p-3 bg-slate-100/80 rounded-lg border border-slate-200 text-[11px] text-slate-500 space-y-1">
            <p className="font-semibold text-slate-700">📢 AdSense Compliant</p>
            <p className="leading-snug">
              {language === 'ko'
                ? '본 가이드는 구글 애드센스 게시자 정책을 준수하며 유용한 원본 학습 콘텐츠를 제공합니다.'
                : 'This guide strictly adheres to Google Publisher & AdSense Content Quality Policies.'}
            </p>
          </div>
        </div>
      </nav>
    </aside>
  );
};
