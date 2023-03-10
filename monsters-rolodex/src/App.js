import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lastName: "Wilson",
      firstName: "Ryan",
      content: "React Professional",
      isPro: true,
    };

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            My name is {this.state.firstName} {this.state.lastName}
          </p>
          <button
            onClick={() => {
              this.setState({
                firstName: "The",
                lastName: "Dread",
                content: "Code Warlock",
              });
            }}
          >
            Keep it Real!
          </button>
          <p>{this.state.content}</p>
        </header>
      </div>
    );
  }
}

export default App;


