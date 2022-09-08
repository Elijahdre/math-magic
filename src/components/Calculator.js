/* eslint-disable */

import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <input className="input-number" type="number" />
        <div className="calc-box">
          <button type="button" className="calc-button">AC</button>
          <button type="button" className="calc-button">+/-</button>
          <button type="button" className="calc-button">%</button>
          <button type="button" className="calc-button pad">÷</button>
          <button type="button" className="calc-button">7</button>
          <button type="button" className="calc-button">8</button>
          <button type="button" className="calc-button">9</button>
          <button type="button" className="calc-button pad">x</button>
          <button type="button" className="calc-button">4</button>
          <button type="button" className="calc-button">5</button>
          <button type="button" className="calc-button">6</button>
          <button type="button" className="calc-button pad">-</button>
          <button type="button" className="calc-button">1</button>
          <button type="button" className="calc-button">2</button>
          <button type="button" className="calc-button">3</button>
          <button type="button" className="calc-button pad">÷</button>
          <button type="button" className="calc-button">0</button>
          <button type="button" className="calc-button">.</button>
          <button type="button" className="calc-button pad">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
