import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "Ryan", lastName: "Wilson" },
      tagline: "React Apprentice",
    };
  }

  render() {
    return (
      <div className="App"></div>
    );
  }
}

export default App;
