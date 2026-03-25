import React from 'react';

export default function Services() {
  const list = [
    "Technical SEO Architecture",
    "AEO / GEO Strategy",
    "Web Systems Development",
    "Internal Process Automation"
  ];
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <h2 className="text-5xl font-light tracking-tight">Capabilities</h2>
          <div className="grid gap-8">
            {list.map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="font-mono text-xs text-white/40 italic">0{i+1}</span>
                <span className="text-xl font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
