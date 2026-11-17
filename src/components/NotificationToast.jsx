import React, { useState, useEffect } from 'react';
import { ShieldAlert, X, ArrowRight, Activity } from './icons';

export function NotificationToast() {
  const [visible, setVisible] = useState(false);
  const [toastData, setToastData] = useState({
    title: 'Anomalous API Traffic Pattern Isolated',
    source: 'edge-gateway-us-east',
    sev: 'WARNING',
    tags: ['#EVT-8920', 'L7_WAF', '0.4ms'],
  });

  useEffect(() => {
    // Show toast after 4 seconds to simulate live telemetry detection
    const timer = setTimeout(() => {
      setVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 max-w-sm w-full bg-[#101622] border border-[#243044] rounded-xl shadow-2xl p-4 transition-all duration-300 animate-slide-up">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#F4B860]/10 border border-[#F4B860]/30 flex items-center justify-center shrink-0 text-[#F4B860] mt-0.5">
            <Activity className="w-4 h-4 animate-pulse" />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#F4B860]/20 text-[#F4B860] font-bold">
                {toastData.sev}
              </span>
              <span className="text-[10px] font-mono text-[#929EAE]">
                [SIMULATED_ALERT]
              </span>
            </div>

            <div className="text-xs font-semibold text-[#F4F7FC]">
              {toastData.title}
            </div>

            <div className="text-[10px] font-mono text-[#929EAE]">
              Source: <span className="text-[#3978E8]">{toastData.source}</span>
            </div>

            <div className="flex flex-wrap gap-1 pt-1">
              {toastData.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="text-[9px] font-mono px-1 py-0.2 rounded bg-[#080B12] text-[#929EAE] border border-[#243044]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => setVisible(false)}
          className="text-[#929EAE] hover:text-white p-1 rounded hover:bg-[#161F2D] transition-colors"
          aria-label="Dismiss Alert"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
