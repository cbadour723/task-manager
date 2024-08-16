// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
