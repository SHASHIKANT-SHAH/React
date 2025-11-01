import React, { useState } from "react";
import "./Counter.css";

const FunctionCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="counter-container">
      <h2>Function Component Counter</h2>
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default FunctionCounter;
