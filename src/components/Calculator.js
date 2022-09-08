/* eslint-disable */

import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate'

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    const {total, next, operation } = this.state;
    const result = calculate({total, next, operation}, buttonName)
    this.setState(result);

  } 

  render() {
    return (
      <div className="container">
        <div className="input-number">{(this.state.next === null) ? this.state.total : this.state.next}</div> 
        {/* <input className="input-number" type="number" value={(this.state.next === null) ? this.state.total : this.state.next} /> */}
        <div className="calc-box">
          <button type="button" className="calc-button" value="AC" onClick={(e)=> this.handleClick(e.target.value)}>AC</button>
          <button type="button" className="calc-button"value="+/-"  onClick={(e)=> this.handleClick(e.target.value)}>+/-</button>
          <button type="button" className="calc-button"value="%" onClick={(e)=> this.handleClick(e.target.value)}>%</button>
          <button type="button" className="calc-button pad" value="÷" onClick={(e)=> this.handleClick(e.target.value)}>÷</button>
          <button type="button" className="calc-button"value="7" onClick={(e)=> this.handleClick(e.target.value)}>7</button>
          <button type="button" className="calc-button" value="8" onClick={(e)=> this.handleClick(e.target.value)}>8</button>
          <button type="button" className="calc-button" value="9" onClick={(e)=> this.handleClick(e.target.value)}>9</button>
          <button type="button" className="calc-button pad" value="x" onClick={(e)=> this.handleClick(e.target.value)}>x</button>
          <button type="button" className="calc-button" value="4" onClick={(e)=> this.handleClick(e.target.value)}>4</button>
          <button type="button" className="calc-button" value="5" onClick={(e)=> this.handleClick(e.target.value)}>5</button>
          <button type="button" className="calc-button" value="6" onClick={(e)=> this.handleClick(e.target.value)}>6</button>
          <button type="button" className="calc-button pad" value="-" onClick={(e)=> this.handleClick(e.target.value)}>-</button>
          <button type="button" className="calc-button" value="1" onClick={(e)=> this.handleClick(e.target.value)}>1</button>
          <button type="button" className="calc-button" value="2" onClick={(e)=> this.handleClick(e.target.value)}>2</button>
          <button type="button" className="calc-button" value="3" onClick={(e)=> this.handleClick(e.target.value)}>3</button>
          <button type="button" className="calc-button pad" value="+" onClick={(e)=> this.handleClick(e.target.value)}>+</button>
          <button type="button" className="calc-button" value="0" onClick={(e)=> this.handleClick(e.target.value)}>0</button>
          <button type="button" className="calc-button" value="." onClick={(e)=> this.handleClick(e.target.value)}>.</button>
          <button type="button" className="calc-button pad" value="=" onClick={(e)=> this.handleClick(e.target.value)}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
