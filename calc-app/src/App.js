import React, { useState } from "react";

import "./styles.css";

function App() {
  const [result, setResult] = useState("");

  function handleClick(e) {
    setResult(result.concat(e.target.id));
  }
  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }
  return (
    <>
      <div className="calculator">
        <div className="row top">
          <div className="box clear" onClick={clear}>
            C
          </div>

          <div className="screen">{result}</div>
        </div>
        <div className="row">
          <div className="box" id="9" onClick={handleClick}>
            9
          </div>
          <div className="box" id="8" onClick={handleClick}>
            8
          </div>
          <div className="box" id="7" onClick={handleClick}>
            7
          </div>
          <div className="box" id="/" onClick={handleClick}>
            /
          </div>
        </div>
        <div className="row">
          <div className="box" id="6" onClick={handleClick}>
            6
          </div>
          <div className="box" id="5" onClick={handleClick}>
            5
          </div>
          <div className="box" id="4" onClick={handleClick}>
            4
          </div>
          <div className="box" id="*" onClick={handleClick}>
            x
          </div>
        </div>
        <div className="row">
          <div className="box" id="(" onClick={handleClick}>
            (
          </div>
          <div className="box" id=")" onClick={handleClick}>
            )
          </div>
          <div className="box" id="**" onClick={handleClick}>
            ^2
          </div>
          <div className="box" id="%" onClick={handleClick}>
            %
          </div>
        </div>
        <div className="row">
          <div className="box" id="3" onClick={handleClick}>
            3
          </div>
          <div className="box" id="2" onClick={handleClick}>
            2
          </div>
          <div className="box" id="1" onClick={handleClick}>
            1
          </div>
          <div className="box" id="-" onClick={handleClick}>
            -
          </div>
        </div>
        <div className="row">
          <div className="box" id="0" onClick={handleClick}>
            0
          </div>
          <div className="box" id="." onClick={handleClick}>
            .
          </div>
          <div className="box" id="+" onClick={handleClick}>
            +
          </div>
          <div className="box" id="=" onClick={calculate}>
            =
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
