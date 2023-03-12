import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Ryan",
      lastName: "Wilson",
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
          <button onClick={() =>{
            this.setState(()=>{});
          }}>Change Name</button>
           <p>React Apprentice</p>
        </header>
      </div>
    );
  }
}

export default App;


