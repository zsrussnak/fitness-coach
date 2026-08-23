import React from 'react';

const Process = () => {
  const steps = [
    { number: '01', title: 'Assessment', text: 'We define your goals and current fitness level' },
    { number: '02', title: 'Program Design', text: 'A custom plan built around your needs' },
    { number: '03', title: 'Training & Support', text: 'Consistent coaching and guidance' },
    { number: '04', title: 'Progress Tracking', text: 'Measurable results and adjustments' },
  ];

  return (
    <section className="py-24 bg-dark relative">
      <div className="container mx-auto px-6">
         <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Your Journey To Success</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-zinc-800 -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-dark-light border-4 border-zinc-800 rounded-full flex items-center justify-center text-3xl font-bold text-primary mb-6 shadow-xl relative group">
                {step.number}
                <div className="absolute inset-0 rounded-full border-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm px-4">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
