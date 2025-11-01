import React from "react";
import ClassCounter from "./components/ClassCounter";
import FunctionCounter from "./components/FunctionCounter";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">Assignment-2 Counter Application</h1>
      <div className="counter-row">
        <div className="counter-box">
          <ClassCounter />
        </div>
        <div className="counter-box">
          <FunctionCounter />
        </div>
      </div>
    </div>
  );
}

export default App;
