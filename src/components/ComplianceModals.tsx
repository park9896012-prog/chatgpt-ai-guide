import React from 'react';
import { X, ShieldCheck, FileText, Mail, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../i18n/translations';

interface ComplianceModalsProps {
  type: 'privacy' | 'terms' | 'contact' | null;
  onClose: () => void;
  language: Language;
}

export const ComplianceModals: React.FC<ComplianceModalsProps> = ({
  type,
  onClose,
  language,
}) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col border border-slate-200 shadow-2xl overflow-hidden text-slate-800">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {type === 'privacy' && <ShieldCheck className="w-5 h-5 text-emerald-600" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-emerald-600" />}
            {type === 'contact' && <Mail className="w-5 h-5 text-emerald-600" />}
            <h3 className="text-base font-bold text-slate-900">
              {type === 'privacy' && getTranslation(language, 'privacyPolicy')}
              {type === 'terms' && getTranslation(language, 'termsOfService')}
              {type === 'contact' && getTranslation(language, 'contactSupport')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 text-xs sm:text-sm leading-relaxed text-slate-600 custom-scrollbar">
          
          {/* Privacy Policy */}
          {type === 'privacy' && (
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm">개인정보처리방침 (Privacy Policy)</h4>
              <p>
                본 웹사이트(&apos;ChatGPT 활용 가이드&apos;)는 방문자의 개인정보 보호를 중요하게 생각하며 관련 법률을 준수합니다.
              </p>

              <h5 className="font-semibold text-slate-800">1. 수집하는 데이터 및 이용 목적</h5>
              <p>
                사용자가 직접 입력하는 학습 완료 체크리스트 데이터는 외부 서버로 전송되지 않으며, 방문자의 브라우저 로컬 스토리지(LocalStorage)에만 안전하게 저장됩니다.
              </p>

              <h5 className="font-semibold text-slate-800">3. 문의처</h5>
              <p>
                개인정보 보호 정책에 관한 문의사항은 관리자 이메일(<strong className="text-emerald-700">ju9896012@gmail.com</strong>)로 연락해 주시기 바랍니다.
              </p>
            </div>
          )}

          {/* Terms of Service */}
          {type === 'terms' && (
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm">이용약관 (Terms of Service)</h4>
              <p>
                본 사이트에서 제공되는 모든 튜토리얼, 프롬프트 예시, 소스코드는 교육 목적으로 자유롭게 활용하실 수 있습니다.
              </p>

              <h5 className="font-semibold text-slate-800">1. 저작권 안내</h5>
              <p>
                본 웹사이트 내의 원본 가이드 콘텐츠 및 코드는 저작권 침해 요소가 없는 가이드용 자료입니다. 자유롭게 실습 및 개발 프로젝트에 적용하실 수 있습니다.
              </p>

              <h5 className="font-semibold text-slate-800">2. 면책 조항</h5>
              <p>
                본 사이트에서 제공되는 코드 및 프롬프트 결과물은 사용자 환경에 따라 차이가 있을 수 있으며, 실제 서비스 배포 시 보안 검증 및 사전 테스트를 권장합니다.
              </p>
            </div>
          )}

          {/* Contact & Support */}
          {type === 'contact' && (
            <div className="space-y-4 text-center py-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  {language === 'ko' ? '개발자 및 관리자 문의' : 'Contact Developer & Admin'}
                </h4>
                <p className="text-xs text-slate-500">
                  {language === 'ko'
                    ? '사이트 이용, 피드백, 교육 컨텐츠 제휴 문의는 아래 이메일로 보내주세요.'
                    : 'For inquiries regarding usage, course content, or feedback, please email us below.'}
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 max-w-md mx-auto">
                <span className="text-xs text-slate-500 font-medium block mb-1">
                  {getTranslation(language, 'contactEmailLabel')}
                </span>
                <a
                  href="mailto:ju9896012@gmail.com"
                  className="text-base font-bold font-mono text-emerald-700 hover:underline inline-flex items-center gap-2"
                >
                  ju9896012@gmail.com
                </a>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-medium text-xs rounded-lg transition-colors cursor-pointer"
          >
            {getTranslation(language, 'close')}
          </button>
        </div>

      </div>
    </div>
  );
};
