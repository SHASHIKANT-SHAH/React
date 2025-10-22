import React, { useState } from 'react';
import ChildComponent from './ChildComponent'; // Assume Child component is imported

export default function ParentComponent() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = (value) => {
    setCounter(prevCounter => prevCounter + value);
  };

  return (
    <div>
      <p>Current Count: {counter}</p>
      <ChildComponent onIncrement={handleIncrement} />
    </div>
  );
}