import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'Thiago'
    };
  }

  render() {
    return (
      <div>
        <h1>Ola {this.state.string} seu gostoso.</h1>
        <button onClick={() => this.setState({ string: 'Arcanine' })}>
          Change
        </button>
      </div>
    );
  }
}

export default App;
