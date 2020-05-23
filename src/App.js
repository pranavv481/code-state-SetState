import React, { Component } from 'react';
import './App.css';

import Message from "../src/components/Message";
import Counter from "../src/components/Counter";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Message />
        <Counter />

      </div>
    );
  }
}

export default App;
