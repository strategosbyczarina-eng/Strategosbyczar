import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24">
      <div className="grid lg:grid-cols-2 gap-12 w-full max-w-screen-2xl mx-auto">
        <div className="flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-light tracking-tighter leading-none mb-2">
              Czarina<br />Agoncillo
            </h1>
            <p className="font-mono text-accent text-sm md:text-base tracking-[0.4em] uppercase">
              Developer / SEO Specialist / Author
            </p>
          </div>
          <p className="text-xl md:text-2xl font-light text-text-muted max-w-lg mb-12 leading-relaxed">
            I build systems that detect, protect, and make digital decisions clearer.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#strategos" className="btn-primary">View Strategos</a>
            <a href="mailto:contact@czarinaagoncillo.com" className="btn-accent">Contact</a>
          </div>
        </div>
        <div className="relative hidden lg:block h-[80vh]">
          {/* Portrait Placeholder - Large Vertical dominant image */}
          <div className="absolute inset-0 bg-secondary grayscale border border-white/5 overflow-hidden">
             <div className="w-full h-full flex items-center justify-center text-white/10 font-mono italic">
               [Portrait_Czarina_Agoncillo]
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
