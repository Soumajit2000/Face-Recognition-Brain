import React , {Component} from 'react';
import Clarifai from 'clarifai';
import Naviagation from './Components/Navigation/Navigation';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const app = new Clarifai.App({
  apiKey: '0b584ef956344247abc0b9f0acc00e83'
 });

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

class App extends Component {
  constructor(){
    super();
    this.state = {
      input : '',
      imageUrl : '',
       box : {},
    }
  }

  calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    leftCol : clarifaiFace.left_col * width,
    topRow :  clarifaiFace.top_row * height,
    rightCol :  width - (clarifaiFace.right_col * width),
    bottomRow :  height - (clarifaiFace.bottom_row * height),
  }
}

  displayFaceBox = (box) => {
      console.log(box)
      this.setState({box: box})
    }
    
  onInputChange = (event) => {
        this.setState({input: event.target.value});
      }

  onButtonSubmit = () => {
    this.setState({imageUrl : this.state.input});
       app.models.predict('c0c0ac362b03416da06ab3fa36fb58e3',this.state.input)
          .then(response => this.displayFaceBox(this.calculateFaceLocation(response))) 
          .catch(err => console.log(err));
  }

    render() 
    {
      return (  
        <div className="App">
          <Particles className = 'particles'
          params={ParticlesOptions} 
          /> 
            <Naviagation />
            <Logo />
            <Rank />
            <ImageLinkForm 
            onInputChange = {this.onInputChange} 
            onButtonSubmit = {this.onButtonSubmit} 
            />
            <FaceRecognition box = {this.state.box} imageUrl = {this.state.imageUrl} />
        </div>
      );
    }
  }


export default App;
