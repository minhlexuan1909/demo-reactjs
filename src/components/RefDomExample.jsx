import React, { useRef } from "react";

const RefDomExample = () => {
  // Thường khi dùng ref truy xuất DOM giá trị khởi tạo sẽ là null
  const inputRef = useRef(null);

  const getInputValue = () => {
    console.log("Giá trị của input:", inputRef.current.value);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={getInputValue}>Log Input Value</button>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default RefDomExample;
