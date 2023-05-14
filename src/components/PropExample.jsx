import React, { useState } from "react";
import "../assets/css/propExample.css";
import Box from "./Box";

const PropExample = () => {
  const [boxColor, setBoxColor] = useState("green");

  const handleChangeToRed = () => {
    setBoxColor("red");
  };

  const handleChangeToYellow = () => {
    setBoxColor("yellow");
  };

  return (
    <div>
      <h1>Prop Example</h1>
      <div className="box-container">
        {/* <Box boxColor="green" /> */}
        <Box boxColor={boxColor} />
      </div>
      <button className="state-change-btn" onClick={handleChangeToRed}>
        Change to red
      </button>
      <button className="state-change-btn" onClick={handleChangeToYellow}>
        Change to yellow
      </button>
    </div>
  );
};

export default PropExample;
