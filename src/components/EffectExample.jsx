import React, { useEffect, useState } from "react";

const EffectExample = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  useEffect(() => {
    console.log("Không có dependency array");
  });

  useEffect(() => {
    console.log("Dependency array rỗng");
  }, []);

  useEffect(() => {
    console.log("Dependency array phụ thuộc vào countA");
  }, [countA]);

  useEffect(() => {
    console.log("Dependency array phụ thuộc vào countA và countB");
  }, [countA, countB]);

  const handleIncreaseCountA = () => {
    setCountA(countA + 1);
  };

  const handleIncreaseCountB = () => {
    setCountB(countB + 1);
  };

  return (
    <div className="effect-example">
      <div className="count-text-wrapper">
        <h1>Count A: {countA}</h1>
        <h1>Count B: {countB}</h1>
      </div>
      <div>
        <button onClick={handleIncreaseCountA}>Increase Count A</button>
        <button onClick={handleIncreaseCountB}>Increase Count B</button>
      </div>
    </div>
  );
};

export default EffectExample;
