import React, { Component, createElement } from 'react';
import logo from './logo.svg';
import Websocket from 'react-websocket';
import './App.css';



class App extends Component {
  state = {
    socket: null,
    count: 0, 
    term: ""
  };

  handleData(data) {
    let result = JSON.parse(data);
    console.log(result[0]);
    this.setState({term: result[0]["terms"]});
    this.setState({count: this.state.count + 1});
  }

  render() {
      return (
        <div>
          Count: <strong>{this.state.count}</strong>
          <br/>
          Search Term: <strong>{this.state.term}</strong>
          <Websocket url='ws://138.197.129.181:4571/rtsearches'
              onMessage={this.handleData.bind(this)}/>
        </div>
      );
  }
}

export default App;
