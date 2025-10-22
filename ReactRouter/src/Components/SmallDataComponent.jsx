import React from 'react';

const SmallDataComponent = () => {
  const data = ['Item 1', 'Item 2', 'Item 3']; 

  return (
    <div style={{ padding: '10px', border: '1px solid green', margin: '10px' }}>
      <h3>Small Data Component (Quick to load)</h3>
      <p>Data Count: {data.length}</p>
      <ul>
        {data.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

export default SmallDataComponent;