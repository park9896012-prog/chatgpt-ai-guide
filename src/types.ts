export type Language = 'ko' | 'en';

export interface CodeSnippet {
  filename: string;
  language: string;
  code: string;
  description?: {
    ko: string;
    en: string;
  };
  executable?: boolean;
}

export interface StepPrompt {
  title: {
    ko: string;
    en: string;
  };
  promptText: {
    ko: string;
    en: string;
  };
  parameters?: string[];
  explanation: {
    ko: string;
    en: string;
  };
}

export interface ScreenshotSpec {
  title: {
    ko: string;
    en: string;
  };
  description: {
    ko: string;
    en: string;
  };
  mockType: 'dalle' | 'research' | 'openai' | 'github' | 'canva' | 'web' | 'mobile' | 'pyqt' | 'rust';
  caption?: {
    ko: string;
    en: string;
  };
}

export interface Step {
  id: string; // e.g. 'step-1'
  stepNumber: number;
  title: {
    ko: string;
    en: string;
  };
  summary: {
    ko: string;
    en: string;
  };
  contentMarkdown: {
    ko: string;
    en: string;
  };
  screenshotSpec?: ScreenshotSpec;
  promptCard?: StepPrompt;
  codeSnippet?: CodeSnippet;
  tips?: {
    ko: string[];
    en: string[];
  };
}

export interface LessonModule {
  id: string; // e.g. '1.1'
  partId: 'part-1' | 'part-2';
  partTitle: {
    ko: string;
    en: string;
  };
  title: {
    ko: string;
    en: string;
  };
  subtitle: {
    ko: string;
    en: string;
  };
  description: {
    ko: string;
    en: string;
  };
  iconName: string;
  estimatedMinutes: number;
  techStack: string[];
  learningGoals: {
    ko: string[];
    en: string[];
  };
  steps: Step[];
}

export interface UserProgress {
  completedSteps: Record<string, boolean>; // e.g. '1.1-step-1': true
  completedModules: Record<string, boolean>; // e.g. '1.1': true
  lastVisitedModuleId: string;
}
