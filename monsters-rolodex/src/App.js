import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "Ryan",
      lastName: "Wilson",}
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
          <button onClick={() =>{
            this.setState()
            return
            // console.log(this.state);
          }}>Change Name</button>
           <p>React Apprentice</p>
        </header>
      </div>
    );
  }
}

export default App;


