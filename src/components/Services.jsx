import React from 'react';

const Services = () => {
    // Reusing images for demonstration
    const images = [
        { src: `${import.meta.env.BASE_URL}images/biceps_curl.jpg`, title: "Body Building", subtitle: "Litora torquent per conubia nostra" },
        { src: `${import.meta.env.BASE_URL}images/fitness_class.jpg`, title: "Fitness Class", subtitle: "Litora torquent per conubia nostra" },
        { src: `${import.meta.env.BASE_URL}images/group_training.jpg`, title: "Group Training", subtitle: "Litora torquent per conubia nostra" },
    ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
            <div>
                 <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Training Programs</span>
                 <h2 className="text-3xl md:text-5xl font-bold text-white max-w-lg">Coaching <br /> Built Around <br /> Your Goals</h2>
            </div>
             <p className="text-gray-400 text-sm max-w-md hidden md:block">
                Choose from a range of training options designed to match your experience level and lifestyle.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg h-96 cursor-pointer">
                    <img src={item.src} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{item.subtitle}</p>
                        <button className="bg-primary text-white px-6 py-2 rounded text-sm font-bold self-start hover:bg-orange-600 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
