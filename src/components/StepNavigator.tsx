import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { Step, Language } from '../types';

interface StepNavigatorProps {
  steps: Step[];
  currentStepId: string;
  onSelectStep: (stepId: string) => void;
  completedSteps: Record<string, boolean>;
  moduleId: string;
  language: Language;
}

export const StepNavigator: React.FC<StepNavigatorProps> = ({
  steps,
  currentStepId,
  onSelectStep,
  completedSteps,
  moduleId,
  language,
}) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs mb-8">
      <div className="flex items-center justify-between overflow-x-auto pb-1 custom-scrollbar">
        {steps.map((step, idx) => {
          const isActive = currentStepId === step.id;
          const isCompleted = !!completedSteps[`${moduleId}-${step.id}`];

          return (
            <React.Fragment key={step.id}>
              <button
                onClick={() => onSelectStep(step.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-xs font-semibold'
                    : isCompleted
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isActive
                      ? 'bg-white text-emerald-700'
                      : isCompleted
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-300 text-slate-700'
                  }`}
                >
                  {isCompleted ? <Check className="w-3 h-3 stroke-[3]" /> : step.stepNumber}
                </span>
                <span className="truncate max-w-[140px] sm:max-w-[200px]">
                  Step {step.stepNumber}
                </span>
              </button>

              {idx < steps.length - 1 && (
                <ChevronRight className="w-4 h-4 text-slate-300 shrink-0 mx-1 hidden sm:block" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
