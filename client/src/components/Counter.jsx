import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 data-testid="count">Count: {count}</h2>
      <button data-testid="increment" onClick={() => setCount(count + 1)}>Increment</button>
      <button data-testid="decrement" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter; 