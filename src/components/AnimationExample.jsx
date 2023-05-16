import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const AnimationExample = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const boxAnimation = useSpring({
    opacity: isAnimating ? 1 : 0,
    transform: isAnimating ? "translateY(0)" : "translateY(-100%)",
  });

  return (
    <div>
      <button onClick={() => setIsAnimating(!isAnimating)}>
        {isAnimating ? "Dừng Animation" : "Bắt đầu Animation"}
      </button>
      <animated.div
        style={{
          ...boxAnimation,
          width: "200px",
          height: "200px",
          backgroundColor: "red",
        }}
      />
    </div>
  );
};

export default AnimationExample;
