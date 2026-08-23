import React from 'react';
import { User, Dumbbell, BicepsFlexed } from 'lucide-react';

const InfoBar = () => {
  return (
    <div className="container mx-auto px-6 relative z-30 -mt-16 md:-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 shadow-2xl">
        {/* Item 1 */}
        <div className="bg-dark-light p-8 flex items-center gap-6 group hover:bg-zinc-800 transition-colors">
          <div className="bg-zinc-700/50 p-4 rounded-full flex-shrink-0 group-hover:bg-zinc-700 transition-colors border-2 border-transparent group-hover:border-primary/20">
             <User size={32} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Personalized Coaching</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Custom workout plans designed around your body, goals, and schedule.</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="bg-primary p-8 flex items-center gap-6">
          <div className="bg-white/20 p-4 rounded-full flex-shrink-0 border-2 border-white/20">
            <Dumbbell size={32} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Proven Training Methods</h3>
            <p className="text-white/90 text-sm leading-relaxed">
              Science-based programs focused on strength, performance, and long-term progress.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="bg-dark-light p-8 flex items-center gap-6 group hover:bg-zinc-800 transition-colors">
          <div className="bg-zinc-700/50 p-4 rounded-full flex-shrink-0 group-hover:bg-zinc-700 transition-colors border-2 border-transparent group-hover:border-primary/20">
             <BicepsFlexed size={32} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Real Results</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Helping clients gain confidence, strength, and consistency — inside and outside the gym.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
