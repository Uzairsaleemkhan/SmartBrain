import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageURLInput from "./components/ImageURLInput/ImageURLInput";
// Particles from "react-particles-js";
import Rank from './components/Rank/Rank';
import Particle from "./components/Particles/Particle";
import ImageBody from "./components/ImageBody/ImageBody";
class App extends React.Component{
  constructor(){
    super();
    this.state={
      input:'',
      boxes:[],
      imageURL:''
    }

  }






  onInputChange=(e)=>{
    this.setState({input:e.target.value});
  }




  onSubmit=()=>{ 
const PAT = '872ed8e7dbbd4d41b80ab5d188290ab6';
const USER_ID = 'q4td8hkkwz66';
const APP_ID = 'face-detection';
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
const IMAGE_URL = this.state.input;

const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL,

                    // "base64": IMAGE_BYTES_STRING
                }
            }
        }
    ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
};

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id
this.setState({imageURL:this.state.input})
this.setState({boxes:[]})
fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
.then(response => response.json())
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

render(){
  return (
    <div> 
    
      <Particle/>
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageURLInput text={this.state.input} onSubmit={this.onSubmit} onInputChange={this.onInputChange}  />
      <ImageBody imageURL={this.state.imageURL} data={this.state.boxes}  />
    </div>
  );

}
}


export default App;