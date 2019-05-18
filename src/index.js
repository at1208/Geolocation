import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/seasonDisplay';
import Spinner from './components/spinner'

class App extends Component {

state ={ lat: null, err: ''}

componentDidMount(){
  navigator.geolocation.getCurrentPosition(
 (position)=> this.setState({ lat: position.coords.latitude }),
 (err) => this.setState({ err: err.message }))
}

  render(){
    if(!this.state.lat && this.state.err){
      return <div> Error: {this.state.err } </div>
    }
    if(this.state.lat && !this.state.err){
      return <div><SeasonDisplay lati={this.state.lat}/></div>
    }
    if(!this.state.lat && !this.state.err){
      return <div><Spinner /></div>
    }
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
