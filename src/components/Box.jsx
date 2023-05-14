import React from "react";
import "../assets/css/box.css";

const Box = (props) => {
  return (
    <div>
      <div
        className="box-wrapper"
        style={{ backgroundColor: props.boxColor }}
      ></div>
      {/* <button
        onClick={() => {
          props.boxColor = "yellow";
        }}
      >
        Change prop color
      </button> */}
    </div>
  );
};

export default Box;
