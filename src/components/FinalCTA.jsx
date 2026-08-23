import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-dark relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary rounded-full blur-[100px]"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
          Ready to Start Your Fitness Journey?
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Let’s build a stronger, healthier version of you — step by step.
        </p>
        <button className="bg-primary text-white font-bold py-4 px-10 rounded text-lg hover:bg-orange-600 transition-all transform hover:scale-105 flex items-center gap-2 mx-auto shadow-lg shadow-primary/25">
          Get Started Today <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
