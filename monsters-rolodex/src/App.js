import React, { Component } from "react";


import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
     monster1: {
      name: 'linda'
     },
     monster2:{
      name: 'frank'
     },
     monster3:{
      name: 'jacky'
     }
    };
  }

  render() {
    return (
      <div className="App"></div>
    );
  }
}

export default App;
