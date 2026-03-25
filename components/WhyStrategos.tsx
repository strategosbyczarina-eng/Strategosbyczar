import React from 'react';

export default function WhyStrategos() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto border-l border-white/10">
      <div className="pl-12">
        <h2 className="font-mono text-accent text-xs tracking-[0.5em] uppercase mb-12">Context</h2>
        <h3 className="text-3xl font-light mb-12 italic">"Protection should begin before execution."</h3>
        <div className="space-y-8 text-lg text-text-muted leading-relaxed font-light">
          <p>
            I built Strategos after experiencing a system failure firsthand. A malware-injected file entered through email because it was not properly evaluated before moving through the workflow.
          </p>
          <p>
            What followed was not isolated damage. A device was compromised, the database became unstable, and the website itself began behaving like a phishing surface.
          </p>
          <p>
            The issue was the absence of a controlled layer of analysis before trust was granted. Strategos was built to close that gap. Clarity should exist before action.
          </p>
        </div>
      </div>
    </section>
  );
}
