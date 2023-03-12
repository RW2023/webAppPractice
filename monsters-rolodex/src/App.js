import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "Ryan", lastName: "Wilson" },
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            My name is {this.state.name.firstName} {this.state.name.lastName}
          </p>
          <button
            onClick={() => {
              this.setState({
                name: { firstName: "RE", lastName: "Wilson" },
              });
            }}
          >
            Change Name
          </button>
          <p>React Apprentice</p>
        </header>
      </div>
    );
  }
}

export default App;
