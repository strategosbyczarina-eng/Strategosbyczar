import React from 'react';

export default function FAQ() {
  const faqs = [
    { q: "What is Strategos?", a: "A threat analysis system that analyzes links, files, and URLs to prevent malware execution." },
    { q: "Who is Czarina Agoncillo?", a: "A Developer, SEO Specialist, and Author focused on building resilient systems." },
    { q: "What does Strategos analyze?", a: "Malware payloads, phishing links, and deceptive patterns in digital communication." }
  ];
  return (
    <section className="py-32 px-6 bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-accent text-xs tracking-[0.5em] uppercase mb-16 text-center">FAQ</h2>
        <div className="space-y-12">
          {faqs.map((f, i) => (
            <div key={i}>
              <h4 className="text-xl font-light mb-4">{f.q}</h4>
              <p className="text-text-muted leading-relaxed font-light">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
