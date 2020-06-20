import React from 'react';
import Naviagation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const ParticlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className = 'particles'
      params={ParticlesOptions} 
      /> 
        <Naviagation />
        <Logo />
        <Rank />
        <ImageLinkForm />
      {/*
           
            <FaceRecogmition />*/}
    </div>
  );
}

export default App;
