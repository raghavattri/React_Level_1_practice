import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const newResult = eval(input).toString();
        setResult(newResult);
        setInput(newResult); 
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input+value);
    }
  };

  return (
    <div className="calculator">
      <input
        className="calculator-screen"
        type="text"
        value={input || result}
        disabled
      />
      <div className="calculator-buttons">
        {[...Array(10).keys(), '+', '-', '*', '/', '.'].map((value) => (
          <button key={value} onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
