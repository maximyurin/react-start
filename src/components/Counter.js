import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      <header>
        <h3 className="person-header">Counter</h3>
      </header>
      <h3 className="counter-number">Current number is {count} </h3>
      <button className="counter-btn" onClick={() => setCount(count + 1)}>
        Увеличить
      </button>
      <button className="counter-btn" onClick={() => setCount(count - 1)}>
        Уменьшить
      </button>
    </div>
  );
}

export default Counter;
