import React, { Component } from 'react';
import './App.scss';
import Pokemon from './componets/pokemon/Pokemon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokemon/>
      </div>
    );
  }
}

export default App;
