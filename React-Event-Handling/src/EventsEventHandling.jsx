import React from 'react';

export default function EventsEventHandling() {
  // Define the event handler function
  const handleClick = (e) => {
    console.log("Button clicked!");
    e.preventDefault(); 
    alert('The button was clicked!');
  };

  return (
    // Pass the function reference to the event prop
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
