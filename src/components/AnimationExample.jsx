import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const AnimationExample = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  // hook `useSpring` để tạo ra một SpringValues để truyền vào `animated` component.
  // Khi component mounted, các thuộc tính trong SpringValues sẽ được áp dụng
  const boxAnimation = useSpring({
    opacity: isAnimating ? 1 : 0,
    transform: isAnimating ? "translateY(0)" : "translateY(-100%)",
  });

  // Ở đây chúng ta dùng state `isAnimating` để diều khiên trạng thái của animation
  // và 1 button để toggle giá trị của `isAnimating`

  return (
    <div>
      <button onClick={() => setIsAnimating(!isAnimating)}>
        {isAnimating ? "Dừng Animation" : "Bắt đầu Animation"}
      </button>
      <animated.div
        style={{
          ...boxAnimation, // truyền SpringValues cho `animate` component
          width: "200px",
          height: "200px",
          backgroundColor: "red",
        }}
      />
    </div>
  );
};

export default AnimationExample;
