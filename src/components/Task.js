import React from 'react';

const Task = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <li>
      <span>{task.text}</span> - <span>{task.category}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Task;