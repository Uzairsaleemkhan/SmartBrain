import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageURLInput from "./components/ImageURLInput/ImageURLInput";
import Particles from "react-particles-js";
import Rank from './components/Rank/Rank';


const particlesOptions={
  particles:{
    number:{
      value:30,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
}
class App extends React.Component{

render(){
  return (
    <div>
    <Particles className="particles" params={particlesOptions}>
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageURLInput/>
    </Particles>

    </div>
  )
}
}

export default App;

