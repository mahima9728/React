import React, { useState } from "react";
import "./Counter.css"; // Import the CSS file

function Counter() {
  const [count, setCount] = useState(10);

  const increment = () => {
    setCount(count + 5);
  };

  const decrement = () => {
    setCount(count - 5);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
