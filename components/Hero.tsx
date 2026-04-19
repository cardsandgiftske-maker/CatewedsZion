import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--olive-medium)] py-20">
      {/* Floral Background Pattern (inspired by image) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        {/* Top Right Flowers */}
        <div className="absolute -top-20 -right-20 w-80 h-80 text-[var(--cream-soft)] rotate-12">
          <svg viewBox="0 0 200 200" fill="currentColor">
            <path d="M100,50 C120,20 180,20 180,70 C180,110 100,160 100,180 C100,160 20,110 20,70 C20,20 80,20 100,50" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
          </svg>
        </div>
        {/* Bottom Left Flowers */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 text-[var(--cream-soft)] -rotate-12">
          <svg viewBox="0 0 200 200" fill="currentColor">
            <circle cx="100" cy="100" r="80" opacity="0.1" />
            <path d="M100,20 C110,50 140,60 180,60 C140,70 110,80 100,110 C90,80 60,70 20,60 C60,60 90,50 100,20" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center text-[var(--cream-soft)] px-4 max-w-4xl mx-auto">
        <div className="animate-fade-up-long">
          {/* Logo/Seal Area */}
          <div className="mb-12 flex flex-col items-center">
            <div className="relative mb-4">
               <p className="font-serif uppercase tracking-[0.2em] text-[10px] opacity-80 decoration-1 underline-offset-8">Save the Date</p>
               <h3 className="font-serif text-3xl mt-2 tracking-widest">16/05/2026</h3>
            </div>
            <div className="w-24 h-24 border-2 border-[var(--cream-soft)] rounded-full flex items-center justify-center mb-10">
               <span className="font-script text-5xl">CZ</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="font-sans tracking-[0.2em] text-[11px] md:text-xs uppercase mb-12 max-w-lg mx-auto leading-loose opacity-90 font-bold border-t border-b border-[var(--cream-soft)]/30 py-4">
            Grounded in faith, covered by grace,<br/>
            you are invited to the pre-wedding of
          </p>
          
          <div className="mb-16">
            <h1 className="font-script text-7xl md:text-9xl mb-4 drop-shadow-lg">
              Catherine
            </h1>
            <div className="flex items-center justify-center gap-4 my-2">
               <div className="w-8 h-[1px] bg-[var(--cream-soft)]/50"></div>
               <span className="font-serif italic text-4xl">&</span>
               <div className="w-8 h-[1px] bg-[var(--cream-soft)]/50"></div>
            </div>
            <h1 className="font-script text-7xl md:text-9xl mb-8 drop-shadow-lg">
              Zion
            </h1>
          </div>

          {/* Date and Time Box */}
          <div className="inline-block border-y-2 border-[var(--cream-soft)] py-6 px-10 md:px-20 mb-16 relative">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
               <div className="flex flex-col items-center">
                  <span className="font-sans uppercase tracking-widest text-xs font-bold">Saturday</span>
               </div>
               <div className="flex flex-col items-center border-x border-[var(--cream-soft)]/30 px-8">
                  <span className="font-sans uppercase tracking-[0.1em] text-xs font-bold mb-1">May</span>
                  <span className="font-serif text-5xl font-bold">16</span>
                  <span className="font-sans uppercase tracking-[0.1em] text-xs font-bold mt-1">2026</span>
               </div>
               <div className="flex flex-col items-center">
                  <span className="font-sans uppercase tracking-widest text-xs font-bold">From 10 AM</span>
               </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl tracking-wide">Buyai Village</h2>
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] opacity-80 font-bold">
              (Kwa Charles Musalanu)
            </p>
          </div>
        </div>
      </div>

      {/* Bible Verse Banner (inspired by the cream strip in the image) */}
      <div className="absolute bottom-0 left-0 w-full bg-[var(--cream-soft)] py-8 px-4 text-center text-[var(--olive-dark)]">
         <div className="max-w-2xl mx-auto">
            <p className="font-serif italic text-lg leading-relaxed mb-2">
              "Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God."
            </p>
            <p className="font-sans text-xs uppercase tracking-widest font-bold">— Ruth 1:16</p>
         </div>
      </div>
    </section>
  );
};
