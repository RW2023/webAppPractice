import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "Ryan", lastName: "Wilson" },
      content: "React Professional",
      buttonText: "Keep it Real!",
      isPro: true,
    };
  }

  handleClick = () => {
    if (!this.prevState) {
      this.prevState = { ...this.state };
    }
    this.setState(
      (prevState) => ({
        name: prevState.isPro
          ? { firstName: "The", lastName: "Dred" }
          : { firstName: "Ryan", lastName: "Wilson" },
        content: prevState.isPro ? "React Code Warlock!" : "React Professional",
        buttonText: prevState.isPro ? "Back to Pro!" : "ProMode",
        isPro: !prevState.isPro,


      }),
      () => {
        if (this.state.buttonText === "ProMode") {
          this.setState(this.prevState);
          delete this.prevState;
        }
      }
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            My name is {this.state.name.firstName} {this.state.name.lastName}{" "}
          </p>
          <button onClick={this.handleClick}>{this.state.buttonText}</button>

          <p>{this.state.content}</p>
        </header>
      </div>
    );
  }
}

export default App;
