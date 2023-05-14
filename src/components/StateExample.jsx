import React, { useState } from "react";
import "../assets/css/stateExample.css";

const StateExample = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="state-example-wrapper">
      <h1>State Example</h1>
      <h2 className="counter-text">Counter: {counter}</h2>
      <button className="state-change-btn" onClick={handleDecrease}>
        Decrease
      </button>
      <button className="state-change-btn" onClick={handleIncrease}>
        Increase
      </button>
    </div>
  );
};

export default StateExample;
