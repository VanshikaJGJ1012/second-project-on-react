import React, { Component } from 'react';

import Main from './components/MainComponent';
import './App.css';

import { BorwserRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BorwserRouter>
      <div className="App">
        
        <Main />
      </div>
      </BorwserRouter>
    );
  }
}

export default App;
