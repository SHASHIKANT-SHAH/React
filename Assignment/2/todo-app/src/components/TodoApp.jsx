import React, { useState } from "react";
import "./TodoApp.css";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (task.trim() === "") {
      alert("\u26A0\uFE0F Please enter a task before adding!");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    alert("\u2705 Task added successfully!");
    setTask("");
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="todo-input"
        />
        <button className="add-btn" onClick={handleAddTodo}>
          Add Task
        </button>
      </div>

      <ul className="todo-list">
        {todos.length === 0 ? (
          <p className="no-tasks">No tasks yet. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span className="todo-text">
                {todo.completed ? "Completed" : ""}
              </span>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
              />
              <span
                className={`todo-text ${todo.completed ? "completed" : ""}`}
              >
                {todo.title}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoApp;
