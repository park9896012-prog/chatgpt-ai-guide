import React, { useState } from 'react';
import { X, Play, RefreshCw, Copy, Check, Sparkles, Terminal, Image, Search, Code, Cpu, ShieldCheck } from 'lucide-react';
import { Language, ScreenshotSpec } from '../types';
import { getTranslation } from '../i18n/translations';

interface PromptSandboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
  mockType?: ScreenshotSpec['mockType'];
  language: Language;
}

export const PromptSandboxModal: React.FC<PromptSandboxModalProps> = ({
  isOpen,
  onClose,
  initialPrompt = '',
  mockType = 'dalle',
  language,
}) => {
  if (!isOpen) return null;

  const [promptText, setPromptText] = useState(
    initialPrompt ||
      (language === 'ko'
        ? '모던한 3D 아이소메트릭 민트색 에코 텀블러 마스코트 캐릭터를 그려줘.'
        : 'Create a modern 3D isometric mint green tumbler mascot character.')
  );
  const [activeMockType, setActiveMockType] = useState<ScreenshotSpec['mockType']>(mockType);
  const [isGenerating, setIsGenerating] = useState(false);
  const [outputResult, setOutputResult] = useState<string | null>(null);

  // Simulated Outputs based on mockType
  const runSimulation = () => {
    setIsGenerating(true);
    setOutputResult(null);

    setTimeout(() => {
      setIsGenerating(false);
      if (activeMockType === 'dalle') {
        setOutputResult('DALLE_3_IMAGE_SIMULATION');
      } else if (activeMockType === 'research') {
        setOutputResult('RESEARCH_SIMULATION');
      } else if (activeMockType === 'openai') {
        setOutputResult('OPENAI_SIMULATION');
      } else if (activeMockType === 'github') {
        setOutputResult('GITHUB_SIMULATION');
      } else if (activeMockType === 'canva') {
        setOutputResult('CANVA_SIMULATION');
      } else if (activeMockType === 'web') {
        setOutputResult('WEB_SIMULATION');
      } else if (activeMockType === 'mobile') {
        setOutputResult('MOBILE_SIMULATION');
      } else if (activeMockType === 'pyqt') {
        setOutputResult('PYQT_SIMULATION');
      } else if (activeMockType === 'rust') {
        setOutputResult('RUST_SIMULATION');
      } else {
        setOutputResult('GENERIC_SIMULATION');
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
      <div className="bg-slate-900 text-slate-100 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-slate-700 shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white">
              {language === 'ko' ? 'ChatGPT & Vibe Sandbox 샌드박스' : 'ChatGPT & Vibe Interactive Sandbox'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          
          {/* Preset Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar text-xs">
            <span className="text-slate-400 font-semibold shrink-0">
              {language === 'ko' ? '모듈 선택:' : 'Module Mode:'}
            </span>
            {(['dalle', 'research', 'openai', 'github', 'canva', 'web', 'mobile', 'pyqt', 'rust'] as const).map(
              (type) => (
                <button
                  key={type}
                  onClick={() => {
                    setActiveMockType(type);
                    setOutputResult(null);
                  }}
                  className={`px-3 py-1.5 rounded-lg font-mono uppercase font-semibold shrink-0 cursor-pointer transition-colors ${
                    activeMockType === type
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {type}
                </button>
              )
            )}
          </div>

          {/* Prompt Input Area */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
              <span>{language === 'ko' ? '테스트 프롬프트 입력:' : 'Test Prompt Input:'}</span>
              <span className="text-[11px] text-emerald-400">GPT-4o & Vibe Engine Enabled</span>
            </label>
            <textarea
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              rows={4}
              className="w-full p-4 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 font-sans text-xs sm:text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              placeholder="프롬프트 내용을 입력하세요..."
            />
          </div>

          {/* Run Button */}
          <div className="flex justify-end">
            <button
              onClick={runSimulation}
              disabled={isGenerating}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>{language === 'ko' ? '결과 생성을 진행하는 중...' : 'Generating Output...'}</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>{language === 'ko' ? '샌드박스 시뮬레이션 실행' : 'Run Sandbox Simulation'}</span>
                </>
              )}
            </button>
          </div>

          {/* Interactive Output Preview Area */}
          {outputResult && (
            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4" />
                  Simulated Response Output [{activeMockType.toUpperCase()}]
                </span>
                <span className="text-[10px] text-slate-500">Status: 200 OK (1.2s)</span>
              </div>

              {/* Specialized Renderers */}
              {activeMockType === 'dalle' && (
                <div className="p-6 bg-slate-900 rounded-lg border border-slate-800 text-center space-y-3">
                  <div className="w-48 h-48 bg-emerald-950/60 border-2 border-dashed border-emerald-500/40 rounded-2xl mx-auto flex items-center justify-center">
                    <div className="text-center p-4">
                      <Image className="w-12 h-12 text-emerald-400 mx-auto mb-2" />
                      <p className="text-xs font-semibold text-emerald-300">
                        DALL·E 3 3D Tumbler Mascot
                      </p>
                      <span className="text-[10px] text-slate-400">1024x1024 PNG • Pastel Studio</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300">
                    ✅ 이미지 생성 완료! Inpainting 수정이 가능합니다.
                  </p>
                </div>
              )}

              {activeMockType === 'web' && (
                <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 text-left space-y-2">
                  <div className="p-3 bg-slate-950 rounded text-xs font-mono text-emerald-300">
                    &lt;h1 class="text-2xl font-bold text-emerald-400"&gt;VibeDeveloper Portfolio&lt;/h1&gt;<br/>
                    ✓ LocalStorage Guestbook initialized<br/>
                    ✓ Live Server Ready at http://localhost:3000
                  </div>
                </div>
              )}

              {activeMockType === 'pyqt' && (
                <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-300 space-y-2">
                  <p className="font-bold text-emerald-400">🔒 PyQt6 Password Vault Window Executed</p>
                  <p>Generated Password: <span className="font-mono text-cyan-300 font-bold">K9#mX$8pL!2vQ@7z</span></p>
                  <p className="text-[11px] text-slate-500">Executable extracted to: /dist/PasswordVault.exe</p>
                </div>
              )}

              {activeMockType === 'rust' && (
                <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-300 space-y-2">
                  <p className="font-bold text-emerald-400">⚡ Rust Native Eframe Monitor Active</p>
                  <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[38%]" />
                  </div>
                  <p className="text-[11px] text-slate-400">CPU Usage: 38.4% | Memory: 6.2 GB / 16.0 GB</p>
                </div>
              )}

              {['research', 'openai', 'github', 'canva', 'mobile'].includes(activeMockType) && (
                <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 text-xs font-mono text-slate-200 leading-relaxed whitespace-pre-wrap">
                  {language === 'ko'
                    ? `🤖 [ChatGPT 응답 생성 완료]\n\n입력하신 프롬프트가 성공적으로 처리되었습니다.\n- 모듈 규격: ${activeMockType.toUpperCase()}\n- 인용 출처 검증: 통과 [1] [2]\n- 코드 문법 표준화: Complete`
                    : `🤖 [ChatGPT Output Success]\n\nProcessed prompt for ${activeMockType.toUpperCase()} module.\n- Citations validated\n- Code refactored cleanly`}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-800 border-t border-slate-700 flex items-center justify-between text-xs text-slate-400">
          <span>ju9896012@gmail.com</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded font-medium cursor-pointer"
          >
            {getTranslation(language, 'close')}
          </button>
        </div>

      </div>
    </div>
  );
};
