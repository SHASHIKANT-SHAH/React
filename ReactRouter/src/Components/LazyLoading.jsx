import React, { lazy, Suspense, useState } from 'react';

// 1. Use React.lazy() to dynamically import the components.
// The code for these components will be split into separate chunks.
const LazySmallData = lazy(() => import('./SmallDataComponent'));
const LazyBigData = lazy(() => import('./BigDataComponent'));

function LazyLoading() {
  const [showSmall, setShowSmall] = useState(false);
  const [showBig, setShowBig] = useState(false);

  return (
    <div>
      <h1>React Lazy Loading Example</h1>

      <button onClick={() => setShowSmall(true)} disabled={showSmall}>
        Load Small Component
      </button>
      &nbsp;
      <button onClick={() => setShowBig(true)} disabled={showBig}>
        Load Big Component
      </button>

      <hr />

      {/* 2. Wrap the lazily-loaded component with <Suspense> */}
      {showSmall && (
        <Suspense fallback={<div>Loading Small Component...</div>}>
          <LazySmallData />
        </Suspense>
      )}

      {showBig && (
        <Suspense fallback={<div>Loading Big Component...</div>}>
          <LazyBigData />
        </Suspense>
      )}

      {!showSmall && !showBig && <p>Click a button to load the component!</p>}
    </div>
  );
}

export default LazyLoading;