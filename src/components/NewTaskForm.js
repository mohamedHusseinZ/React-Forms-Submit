import React, { useState } from 'react';

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [newTask, setNewTask] = useState({ text: '', category: categories[0] });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ ...newTask, id: Date.now() });
    setNewTask({ text: '', category: categories[0] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input type="text" name="text" value={newTask.text} onChange={handleChange} />
      </label>
      <label>
        Category:
        <select name="category" value={newTask.category} onChange={handleChange}>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;