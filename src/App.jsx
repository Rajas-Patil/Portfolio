import React from 'react';
import Hero from './components/Hero';
import VisionaryHero from './components/VisionaryHero';
import FeaturedProjects from './components/FeaturedProjects';
import Experience from './components/Experience';
import TicTacToe from './components/TicTacToe';
import Footer from './components/Footer';

import Reveal from './components/Reveal';

function App() {
  return (
    <div className="App">
      <Hero />

      <div style={{ height: '40px' }}></div>

      <Reveal>
        <VisionaryHero />
      </Reveal>

      <div style={{ height: '80px' }}></div>

      <Reveal>
        <FeaturedProjects />
      </Reveal>

      <Reveal>
        <Experience />
      </Reveal>

      <Reveal>
        <TicTacToe />
      </Reveal>

      <Reveal>
        <Footer />
      </Reveal>
    </div>
  );
}

export default App;
