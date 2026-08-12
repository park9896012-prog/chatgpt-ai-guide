import React, { useState } from 'react';
import { Code, Copy, Check, Play, FileCode } from 'lucide-react';
import { CodeSnippet, Language } from '../types';
import { getTranslation } from '../i18n/translations';

interface CodeBlockProps {
  snippet: CodeSnippet;
  language: Language;
  onRunCode?: (code: string, lang: string) => void;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  snippet,
  language,
  onRunCode,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = snippet.code.split('\n');

  return (
    <div className="my-6 rounded-xl border border-slate-700 bg-slate-900 text-slate-100 overflow-hidden shadow-md">
      
      {/* Code Header Bar */}
      <div className="bg-slate-800 px-4 py-2.5 border-b border-slate-700/80 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <FileCode className="w-4 h-4 text-emerald-400" />
          <span className="font-mono text-xs font-semibold text-slate-200">
            {snippet.filename}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-700 text-slate-300 font-medium uppercase">
            {snippet.language}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {snippet.executable !== false && onRunCode && (
            <button
              onClick={() => onRunCode(snippet.code, snippet.language)}
              className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs rounded transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>{language === 'ko' ? '코드 실행' : 'Run Code'}</span>
            </button>
          )}

          <button
            onClick={handleCopy}
            className="px-2.5 py-1 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium rounded transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                <span className="text-emerald-400">{getTranslation(language, 'codeCopied')}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{getTranslation(language, 'copyCode')}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Area with Line Numbers */}
      <div className="p-4 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed custom-scrollbar">
        <table className="border-collapse w-full">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-slate-800/50">
                <td className="pr-4 text-right text-slate-600 select-none text-[11px] w-8">
                  {idx + 1}
                </td>
                <td className="text-slate-200 whitespace-pre">
                  {line}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Description Footer */}
      {snippet.description && (
        <div className="bg-slate-800/80 px-4 py-2 border-t border-slate-700/80 text-xs text-slate-400">
          💡 {snippet.description[language]}
        </div>
      )}
    </div>
  );
};
