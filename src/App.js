import React, { Component } from 'react';

import Main from './components/MainComponent';
import './App.css';

import { BorwserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BorwserRouter>
      <div className="App">
        
        <Main />
      </div>
      </BorwserRouter>
      </Provider>
    );
  }
}

export default App;
