import React, { Component } from "react";


import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "aBcDe",
        },
        {
          name: "Frank",
          id: "fGhIj",
        },
        {
          name: "Jacky",
          id: "pQrSt",
        },

        { name: "Andrei",
          id: "p85St",
      },
        
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
