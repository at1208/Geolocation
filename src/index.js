import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
constructor(props){
  super(props)

  this.state ={
    lat: null, err: ''
  }
   navigator.geolocation.getCurrentPosition(
  (position)=> this.setState({ lat: position.coords.latitude }),
  (err) => this.setState({ err: err.message }))
}


  render(){
    return(
      <div>
    Latitude: {this.state.lat} <br />
    Error: {}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
