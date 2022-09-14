/* eslint-disable */

import React from 'react';
import { Routes, Route } from "react-router-dom";
import Calculator from './components/Calculator';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
