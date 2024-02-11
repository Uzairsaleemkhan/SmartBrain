import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageURLInput from "./components/ImageURLInput/ImageURLInput";
// Particles from "react-particles-js";
import Rank from './components/Rank/Rank';
import Particle from "./components/Particles/Particle";
import ImageBody from "./components/ImageBody/ImageBody";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
const initialState={
  input:'',
  boxes:[],
  imageURL:'',
  route:'register',
  isSignedIn:false,
  user:{
    name:'',
    email:'',
    entries:0,
    joined: '',
    id:''
  }
}
class App extends React.Component{
  constructor(){
    super();
    this.state= initialState
  }
  loadUser=(user)=>{
    this.setState({user:{
      name:user.name,
      email:user.email,
      entries:user.entries,
      joined:user.joined,
      id:user.id
    }})
  }

  onInputChange=(e)=>{
    this.setState({input:e.target.value});
  }
  onRouteChange=(route)=>{
    if(route==='home') this.setState({isSignedIn:true,route})
    if(route==='signin'||route==='register'){
      this.setState({...initialState,route,isSignedIn:false});
    }
  }





  onSubmit=()=>{ 
    this.setState({imageURL:this.state.input})
    fetch('https://smartbrain-backend-3bps.onrender.com/detectimage',{
      method:'post',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        input:this.state.input
      })
    })
    .then( response => {
      console.log(response.body)
      return  response.json()
    })
    .then(response =>
      {
          if(response){
            fetch('https://smartbrain-backend-3bps.onrender.com/image',{
              method:'put',
              headers:{
                'Content-Type':'application/json',
              },
              body:JSON.stringify({
                id:this.state.user.id
              })
            })
            .then(res=>res.json())
            .then(data=>this.setState({user:{entries:data,name:this.state.user.name,email:this.state.user.email,joined:this.state.user.joined,id:this.state.user.id}}))
            .catch(err=>console.log('error updating entries'))
          return response;

          }

        }
   )
.then(result => {
    const regions = result.outputs[0].data.regions;
    this.setState({
      boxes:regions.map((region)=>{
        const boundingBox= region.region_info.bounding_box;
        const topRow = boundingBox.top_row.toFixed(3);
        const leftCol = boundingBox.left_col.toFixed(3);
        const bottomRow = boundingBox.bottom_row.toFixed(3);
        const rightCol = boundingBox.right_col.toFixed(3);
        return{
          topRow,leftCol,bottomRow,rightCol
        }
      })
    })
})
.catch(error => {console.log('error', error)
this.setState({boxes:[]
})
}
);
  }
componentDidMount(){
  fetch('https://smartbrain-backend-3bps.onrender.com/test');
}
render(){
  return (
    <div> 
      <Particle/>
      <Navigation  isSignedIn={this.state.isSignedIn}  onRouteChange={this.onRouteChange}/>
    {
      this.state.route==='signin'?(
      <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
      ):
      this.state.route==='home'?(
        <>
      <Logo/>
      <Rank entries={this.state.user.entries} name={this.state.user.name} />
      <ImageURLInput text={this.state.input} onSubmit={this.onSubmit} onInputChange={this.onInputChange}  />
      <ImageBody imageURL={this.state.imageURL} data={this.state.boxes}  />
        </>
      ):this.state.route==='register'?(
        <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
      ):''
    }
    </div>
  );

}
}


export default App;
