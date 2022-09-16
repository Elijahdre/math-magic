/* eslint-disable */

import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate'

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null, 
  })
  function handleClick(buttonName) {
    const {total, next, operation } =  state;
    const result = calculate({total, next, operation}, buttonName)
     setState(result);

  }   
  return (
    <>
    <h1>Maths Magicians</h1>
    <h3>Let's do some maths!</h3>

    <div className="container">
      <div className="input-number">{( state.next === null) ?  state.total :  state.next}</div> 
      <div className="calc-box">
        <button type="button" className="calc-button" value="AC" onClick={(e)=>  handleClick(e.target.value)}>AC</button>
        <button type="button" className="calc-button"value="+/-"  onClick={(e)=>  handleClick(e.target.value)}>+/-</button>
        <button type="button" className="calc-button"value="%" onClick={(e)=>  handleClick(e.target.value)}>%</button>
        <button type="button" className="calc-button pad" value="÷" onClick={(e)=>  handleClick(e.target.value)}>÷</button>
        <button type="button" className="calc-button"value="7" onClick={(e)=>  handleClick(e.target.value)}>7</button>
        <button type="button" className="calc-button" value="8" onClick={(e)=>  handleClick(e.target.value)}>8</button>
        <button type="button" className="calc-button" value="9" onClick={(e)=>  handleClick(e.target.value)}>9</button>
        <button type="button" className="calc-button pad" value="x" onClick={(e)=>  handleClick(e.target.value)}>x</button>
        <button type="button" className="calc-button" value="4" onClick={(e)=>  handleClick(e.target.value)}>4</button>
        <button type="button" className="calc-button" value="5" onClick={(e)=>  handleClick(e.target.value)}>5</button>
        <button type="button" className="calc-button" value="6" onClick={(e)=>  handleClick(e.target.value)}>6</button>
        <button type="button" className="calc-button pad" value="-" onClick={(e)=>  handleClick(e.target.value)}>-</button>
        <button type="button" className="calc-button" value="1" onClick={(e)=>  handleClick(e.target.value)}>1</button>
        <button type="button" className="calc-button" value="2" onClick={(e)=>  handleClick(e.target.value)}>2</button>
        <button type="button" className="calc-button" value="3" onClick={(e)=>  handleClick(e.target.value)}>3</button>
        <button type="button" className="calc-button pad" value="+" onClick={(e)=>  handleClick(e.target.value)}>+</button>
        <button type="button" className="calc-button" value="0" onClick={(e)=>  handleClick(e.target.value)}>0</button>
        <button type="button" className="calc-button" value="." onClick={(e)=>  handleClick(e.target.value)}>.</button>
        <button type="button" className="calc-button pad" value="=" onClick={(e)=>  handleClick(e.target.value)}>=</button>
      </div>
    </div>
    </>
  );
}

export default Calculator;
