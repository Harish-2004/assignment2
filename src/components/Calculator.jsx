import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <div className="input">{input}</div>
      <div className="result">{result}</div>
      <div className="buttons grid w-100">
        <button className="btn p-3 m-3" onClick={() => handleButtonClick('7')}>7</button>
        <button className="btn p-3 m-3" onClick={() => handleButtonClick('8')}>8</button>
        <button className="btn p-3 m-3" onClick={() => handleButtonClick('9')}>9</button>
        <button className="btn p-3 m-3" onClick={() => handleButtonClick('/')}>/</button>
        <button className="btn p-3 m-3" onClick={() => handleButtonClick('4')}>4</button>
        <button className="btn p-3 m-3" onClick={() => handleButtonClick('5')}>5</button>
        <button className="btn p-3 m-3" onClick={() => handleButtonClick('6')}>6</button>
        <button className="btn p-3 m-3" onClick={() => handleButtonClick('*')}>*</button>
        <button className="btn p-3 m-3" onClick={() => handleButtonClick('1')}>1</button>
        <button className="btn p-3 m-3" onClick={() => handleButtonClick('2')}>2</button>
        <button className="btn p-3 m-3" onClick={() => handleButtonClick('3')}>3</button>
        <button className="btn p-3 m-3" onClick={() => handleButtonClick('-')}>-</button>
        <button className="btn p-3 m-3" onClick={() => handleButtonClick('0')}>0</button>
        <button className="btn p-3 m-3" onClick={() => handleButtonClick('.')}>.</button>
        <button className="btn p-3 m-3" onClick={() => handleButtonClick('=')}>=</button>
        <button className="btn p-3 m-3" onClick={() => handleButtonClick('+')}>+</button>
        <button className="btn p-3 m-3" onClick={() => handleButtonClick('C')}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
