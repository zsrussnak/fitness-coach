import React from 'react';

const Stats = () => {
  const stats = [
    { number: '750+', label: 'Success Stories' },
    { number: '10+', label: 'Years of experience' },
    { number: '70+', label: 'Active Clients' },
    { number: '100%', label: 'Commitment to Res' },
  ];

  return (
    <div className="bg-black py-16 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-800/50">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-gray-400 text-sm tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
