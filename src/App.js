import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageURLInput from "./components/ImageURLInput/ImageURLInput";
// Particles from "react-particles-js";
import Rank from './components/Rank/Rank';
import Particle from "./components/Particles/Particle";
const App = () => {
    return (
      <div> 
        <Particle/>
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageURLInput/>
      </div>
    );
};

export default App;