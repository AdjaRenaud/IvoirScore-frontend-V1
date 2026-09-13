import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export const AdBanner: React.FC = () => {
  const { isLight } = useTheme();

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('Google Ads error:', err);
    }
  }, []);

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 mt-8 mb-4 flex justify-center`}>
      <div
        className={`w-full max-w-[970px] min-h-[90px] rounded-xl overflow-hidden flex items-center justify-center border border-dashed relative ${
          isLight ? 'bg-slate-100/50 border-slate-300' : 'bg-white/5 border-white/20'
        }`}
      >
        {/* Placeholder text for development/adblockers */}
        <span className={`absolute text-[10px] uppercase tracking-widest font-mono font-bold ${
          isLight ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Espace Publicitaire
        </span>

        {/* Actual Google Ad Component */}
        <ins
          className="adsbygoogle relative z-10 block"
          style={{ display: 'block', width: '100%', minHeight: '90px' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // TODO: Replace with real client ID
          data-ad-slot="XXXXXXXXXX"               // TODO: Replace with real slot ID
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
};
