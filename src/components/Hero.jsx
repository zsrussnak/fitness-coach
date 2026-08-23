import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden">
      {/* Background Image - darkening overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark/70 via-dark/50 to-dark"></div>
        <img 
          src="/images/hero.jpg" 
          alt="Fitness Background" 
          className="object-cover object-center w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 flex flex-col items-center px-6 mx-auto mt-20 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-0.5 w-8 bg-primary block"></span>
            <span className="text-sm font-bold tracking-wider uppercase text-primary">Power Your Life</span>
            <span className="h-0.5 w-8 bg-primary block"></span>
        </div>
        
        <h1 className="max-w-4xl mx-auto mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
          It’s Time to Build a Stronger, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Healthier You</span>
        </h1>
        
        <p className="max-w-2xl mx-auto mb-10 text-base leading-relaxed text-gray-300 md:text-lg">
          Personal coaching, smart training programs, and sustainable results — tailored to your lifestyle and goals.
        </p>
        
        <button className="flex items-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all transform rounded-md bg-primary hover:bg-orange-600 hover:scale-105">
          Start Your Transformation <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
