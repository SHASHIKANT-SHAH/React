import React from "react";
import TodoApp from "./components/TodoApp";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">To-Do Application</h1>
      <TodoApp />
    </div>
  );
}

export default App;
