import React from 'react';
import { ShieldCheck, Zap, Fingerprint } from 'lucide-react';

export default function Strategos() {
  return (
    <section id="strategos" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-mono text-accent text-xs tracking-[0.5em] uppercase mb-6">Flagship Product</h2>
            <h3 className="text-5xl font-light tracking-tight mb-8">Strategos</h3>
            <p className="text-text-muted text-lg leading-relaxed mb-12 max-w-md">
              A high-end threat analysis system. Scan links, files, and URLs for malware and deceptive patterns before execution.
            </p>
            <ul className="space-y-6">
              {[
                { icon: ShieldCheck, text: "Phishing & Fraud Detection" },
                { icon: Zap, text: "Payload Heuristic Analysis" },
                { icon: Fingerprint, text: "Pattern Recognition" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-mono tracking-widest uppercase">
                  <item.icon className="w-5 h-5 text-accent" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-background border border-white/10 p-8 font-mono text-[11px] leading-relaxed overflow-hidden opacity-50">
             <div className="text-accent mb-4">$ strategos --analyze --source="suspicious_link.bin"</div>
             <div className="text-white/40">IDENTIFYING TARGET: RAW_DATA_STREAM</div>
             <div className="text-white/40">HEURISTIC_SCAN: INITIALIZING...</div>
             <div className="text-accent mt-2">THREAT_DETECTED: Deceptive Pattern Matched [ID: 99x]</div>
             <div className="text-white/20 mt-4">****************************************</div>
             <div className="text-white/20">BLOCKING EXECUTION...</div>
          </div>
        </div>
      </div>
    </section>
  );
}
