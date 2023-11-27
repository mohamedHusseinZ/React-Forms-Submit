// App.js
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import CategoryFilter from './components/CategoryFilter';
import NewTaskForm from './components/NewTaskForm';
import './App.css';
const App = () => {
  // Sample data
  const TASKS = [
    { id: 1, text: 'Task 1', category: 'Work' },
    { id: 2, text: 'Task 2', category: 'Personal' },
    // Add more tasks as needed
  ];

  const CATEGORIES = ['All', 'Work', 'Personal'];

  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task List App</h1>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryFilter={handleCategoryFilter}
      />
      <TaskList tasks={tasks} selectedCategory={selectedCategory} onDelete={handleTaskDelete} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
};

export default App;
