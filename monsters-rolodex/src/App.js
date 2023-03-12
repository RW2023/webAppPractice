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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            My name is {this.state.name.firstName} {this.state.name.lastName}
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: { firstName: "RE", lastName: "Wilson" },
                    tagline: "",
                  };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
          <p>{this.state.tagline}</p>
        </header>
      </div>
    );
  }
}

export default App;
