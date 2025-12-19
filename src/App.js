import React from 'react';
import Navbar from './components/Navbar.jsx';
import IntroSection from './components/IntroSection.jsx';
import Hero from './components/Hero.jsx';
import Champions from './components/Champions.jsx';
import News from './components/News.jsx';
import GameModes from './components/GameModes.jsx';
import DestroyBase from './components/DestroyBase.jsx';
import ClearLane from './components/ClearLane.jsx';
import JungleArea from './components/JungleArea.jsx';
import ChooseLane from './components/ChooseLane.jsx';
import PowerUp from './components/PowerUp.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <IntroSection />
      <Navbar />
      <div className="Banner">
        <Hero />
        <div className="content">
          <Champions />
          <News />
        </div>
      </div>
      <GameModes />
      <DestroyBase />
      <ClearLane />
      <JungleArea />
      <ChooseLane />
      <PowerUp />
      <IntroSection showLogo={false} buttonText="Chơi Ngay" />
      <Footer />
    </div>
  );
}

export default App;

