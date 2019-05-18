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
    if(!this.state.lat && this.state.err){
      return <div> Error: {this.state.err } </div>
    }
    if(this.state.lat && !this.state.err){
      return <div>Latitude: {this.state.lat} </div>
    }
    if(!this.state.lat && !this.state.err){
      return <div>Loading...</div>
    }
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
