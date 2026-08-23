import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const About = () => {
    // Using one of the uploaded images
    const imageSrc = `${import.meta.env.BASE_URL}images/WhoIAM.png`;

  return (
    <section id="about" className="relative py-20 overflow-hidden md:py-28 bg-dark">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <span className="block mb-2 text-sm font-bold tracking-widest uppercase text-primary">Who I Am</span>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
              Fitness Is More Than Training — It’s a Lifestyle
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-400">
              I help people build strong, functional bodies while improving confidence and daily performance.
              My coaching approach focuses on smart training, proper recovery, and sustainable habits — not quick fixes.
            </p>

            <div className="grid grid-cols-1 gap-4 mb-10 md:grid-cols-2">
              {[
                "Personal Training & Online Coaching",
                "Strength & Body Recomposition",
                "Cardio & Conditioning Programs",
                "Nutrition Guidance & Habit Building"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 text-primary" />
                  <span className="font-medium text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 px-8 py-3 font-bold text-white transition-all bg-transparent border-2 rounded-full border-zinc-700 hover:border-primary hover:bg-primary group">
              Learn More About Me 
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Image Content */}
          <div className="relative lg:w-1/2">
             <div className="relative z-10 overflow-hidden shadow-2xl rounded-2xl border-zinc-800">
                <img 
                    src={imageSrc} 
                    alt="Fitness Coach" 
                    className="object-cover w-full h-auto"
                />
             </div>
             {/* Decorative element */}
             <div className="absolute z-0 w-40 h-40 rounded-full -bottom-10 -right-10 bg-primary/20 blur-3xl"></div>
             <div className="absolute z-0 w-40 h-40 rounded-full -top-10 -left-10 bg-blue-500/10 blur-3xl"></div>

              {/* Floating Badge */}
             <div className="absolute bottom-8 right-[-20px] bg-primary p-6 rounded-lg shadow-xl z-20 hidden md:block">
                 <p className="mb-1 text-3xl font-bold text-white">10+</p>
                 <p className="text-sm font-medium text-white/90">Years Experience</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
