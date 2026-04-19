import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export const EventDetails: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#FAF3E0]">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-[#6F3400]/10 rounded-full flex items-center justify-center text-[#6F3400] shadow-sm">
            <MapPin size={32} />
          </div>
        </div>
        
        <h2 className="font-serif text-4xl text-center mb-6 text-gray-800">The Location</h2>
        <p className="text-center text-gray-600 mb-12 max-w-lg mx-auto leading-relaxed italic">
          We are delighted to host our pre-wedding ceremony at Buyai Village, at the home of Kwa Charles Musalanu.
        </p>
        
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-[var(--olive-light)]/30">
          <div className="p-8 md:p-12 text-center">
            <h3 className="font-serif text-3xl mb-2 text-gray-800">Buyai Village</h3>
            <p className="text-gray-500 font-sans text-[10px] mb-8 uppercase tracking-widest font-bold">
              Kwa Charles Musalanu
            </p>
            
            <div className="relative h-80 w-full rounded-[2rem] overflow-hidden mb-8 shadow-inner border-4 border-[var(--cream-soft)]">
              <img 
                src="https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=800&q=60" 
                alt="Village Setting" 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <p className="font-serif text-gray-600 italic mb-8">
              We look forward to celebrating this special milestone with you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};