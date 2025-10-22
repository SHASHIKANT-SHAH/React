import React from 'react';

const generateBigData = () => {
  return Array.from({ length: 1000000 }, (_, i) => `Large Item ${i + 1}`);
};

const BigDataComponent = () => {
  const bigData = generateBigData(); 

  return (
    <div style={{ padding: '10px', border: '1px solid red', margin: '10px' }}>
      <h3>Big Data Component (Slower to render)</h3>
      <p>Data Count: {bigData.length}</p>
      <details>
        <summary>View All Data (1000000 items)</summary>
        <ul>
          {bigData.map((item, index) => (
            <li key={index} style={{ fontSize: '10px' }}>{item}</li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default BigDataComponent;