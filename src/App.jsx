import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoBar from './components/InfoBar';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
// import Gallery from './components/Gallery';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <InfoBar />
      <About />
      <Stats />
      <Services />
      <Process />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
