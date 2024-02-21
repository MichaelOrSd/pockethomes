import React from 'react';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Values from './components/Vaules.jsx';
import Overview from './components/Overview.jsx';
import Petition from './components/Petition.jsx';
import ImageSlider from './components/ImageSlider.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Values />
      <Overview />
      <ImageSlider />
      <Petition />
    </div>
  );
}

export default App;
