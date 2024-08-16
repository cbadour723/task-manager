// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ currentTask, onSave }) => {
  const [task, setTask] = useState({ title: '', description: '' });

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask);
    }
  }, [currentTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
    setTask({ title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{currentTask ? 'Edit Task' : 'Add Task'}</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">{currentTask ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TaskForm;
