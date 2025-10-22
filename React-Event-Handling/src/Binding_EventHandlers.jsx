import React, { useState } from 'react';

function Binding_EventHandlers() {
  // 1. Initialize state using the useState Hook
  const [message, setMessage] = useState('Hello');

  // 2. Define the handler using an arrow function (no binding needed!)
  const handleClick = () => {
    setMessage('Goodbye'); 
  };

  return (
    <button onClick={handleClick}>
      {message} 
    </button>
  );
}

 export default Binding_EventHandlers;