import React, { useRef, useState } from "react";
import "../assets/css/refExample.css";

const RefExample = () => {
  const countRef = useRef(0);
  const countObj = {
    current: 0,
  };

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    countRef.current++;
    countObj.current++;
    setCount(count + 1);
  };

  console.log("count", count);
  console.log("countRef", countRef);
  console.log("countObj", countObj);

  return (
    <button className="increaseBtn" onClick={increaseCount}>
      Rerender
    </button>
  );
};

export default RefExample;
