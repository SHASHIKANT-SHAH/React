import React from 'react';

 export default function ChildComponent(props) {
  return (
    <button onClick={() => props.onIncrement(5)}>
      Increment By 5
    </button>
  );
}
