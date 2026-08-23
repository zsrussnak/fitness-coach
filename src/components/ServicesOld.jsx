import React from 'react';
import { ArrowRight, Dumbbell, Globe, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Personal Training',
      text: 'One-on-one coaching sessions focused on proper technique, strength development, and long-term progress.',
      icon: <Dumbbell size={40} className="text-primary mb-6" />,
      delay: '0'
    },
    {
      title: 'Online Coaching',
      text: 'Train anywhere with structured programs, regular check-ins, and ongoing support.',
      icon: <Globe size={40} className="text-primary mb-6" />,
      delay: '100'
    },
    {
      title: 'Group Training',
      text: 'High-energy group sessions designed to build strength, conditioning, and motivation together.',
      icon: <Users size={40} className="text-primary mb-6" />,
      delay: '200'
    }
  ];

  return (
    <section id="programs" className="py-24 bg-dark-light">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Training Programs</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Coaching Built Around Your Goals</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose from a range of training options designed to match your experience level and lifestyle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800 p-10 rounded-2xl hover:border-primary transition-all duration-300 hover:transform hover:-translate-y-2 group shadow-xl">
              <div className="bg-zinc-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                 {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed h-24">{service.text}</p>
              
              <button className="text-white font-bold flex items-center gap-2 group-hover:text-primary transition-colors">
                Learn More <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
