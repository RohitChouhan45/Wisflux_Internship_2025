import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: input, completed: false }
    ]);
    setInput('');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTask} className="todo-form">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new task"
          className="todo-input"
        />
        <button type="submit" className="add-btn">Add</button>
      </form>
      <ul className="todo-list">
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span onClick={() => handleToggleComplete(task.id)}>
              {task.text}
            </span>
            <button onClick={() => handleDeleteTask(task.id)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
