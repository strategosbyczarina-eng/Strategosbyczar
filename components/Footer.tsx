import React from 'react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="font-mono text-xs tracking-widest uppercase opacity-40">
          Czarina Agoncillo / 2024
        </div>
        <div className="flex gap-12">
          <a href="#" className="nav-link">LinkedIn</a>
          <a href="#" className="nav-link">GitHub</a>
          <a href="mailto:contact@czarinaagoncillo.com" className="nav-link">Email</a>
        </div>
      </div>
    </footer>
  );
}
