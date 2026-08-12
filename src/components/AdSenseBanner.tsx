import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../i18n/translations';

interface AdSenseBannerProps {
  language: Language;
  slotId?: string;
  format?: 'horizontal' | 'rectangle';
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  language,
  slotId = 'default-ad-slot',
  format = 'horizontal',
}) => {
  return (
    <div className="my-8 p-4 rounded-xl border border-slate-200 bg-slate-50 text-center shadow-2xs">
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-200/80 text-[11px] text-slate-400 font-mono">
        <span className="flex items-center gap-1">
          <Info className="w-3.5 h-3.5 text-slate-400" />
          {language === 'ko' ? '스폰서 광고 [Google AdSense]' : 'Advertisement [Google AdSense]'}
        </span>
        <span className="flex items-center gap-1 text-emerald-700 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          Publisher Policy Compliant
        </span>
      </div>

      {/* Ad Unit Display Placeholder Container */}
      <div
        className={`w-full mx-auto flex items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white/80 p-6 ${
          format === 'horizontal' ? 'min-h-[90px]' : 'min-h-[250px] max-w-[300px]'
        }`}
      >
        <div className="text-center space-y-1">
          <p className="text-xs font-semibold text-slate-500">
            {language === 'ko' ? '반응형 애드센스 광고 영역' : 'Responsive Google AdSense Display Unit'}
          </p>
          <p className="text-[10px] text-slate-400 font-mono">
            Slot ID: {slotId} • AdSense Ready
          </p>
        </div>
      </div>

      <p className="mt-2 text-[10px] text-slate-400">
        {getTranslation(language, 'adsenseCompliant')}
      </p>
    </div>
  );
};
