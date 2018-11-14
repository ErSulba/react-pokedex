import React, { Component } from 'react';
import './App.scss';
import Pokedex from './componets/pokemon/Pokemon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokedex/>
      </div>
    );
  }
}

export default App;
