import React from 'react';

export default function Glossary() {
  const terms = [
    { t: "AEO", d: "Answer Engine Optimization. Structuring data for AI systems like Perplexity." },
    { t: "GEO", d: "Generative Engine Optimization. Optimizing for generative search models." },
    { t: "Pre-Execution Protection", d: "Evaluating risk before a file or link is opened by a user." }
  ];
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-mono text-accent text-xs tracking-[0.5em] uppercase mb-16">Glossary</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {terms.map((item, i) => (
            <div key={i} className="space-y-4">
              <h4 className="font-mono text-sm tracking-widest uppercase text-white">{item.t}</h4>
              <p className="text-sm text-text-muted font-light leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
