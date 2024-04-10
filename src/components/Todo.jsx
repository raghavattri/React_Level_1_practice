import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput('');
    }
  };

 
  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((val, index) => index !== indexToRemove));
  };
  

//   const removeTask = (indexToRemove) => {
//     const updatedTasks = tasks.map((task, index) => {
//       if (index !== indexToRemove) {
//         return task;
//       }
//       return null; // For the task to be removed, we return null
//     }).filter(task => task !== null); // Filter out the null values
//     setTasks(updatedTasks);
//   };
  

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>Add Task</button>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{' '}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
