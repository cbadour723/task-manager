// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import TaskForm from '../src/components/TaskForm';
import TaskList from '../src/components/TaskList';
import { createTask, deleteTask, getTasks, updateTask } from '../src/services/taskService';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    // Fetch tasks from the backend
    getTasks().then(setTasks);
  }, []);

  const handleSave = (task) => {
    if (currentTask) {
      // Update existing task
      updateTask(currentTask._id, task).then(updatedTask => {
        setTasks(tasks.map(t => (t._id === updatedTask._id ? updatedTask : t)));
        setCurrentTask(null);
      });
    } else {
      // Add new task
      createTask(task).then(newTask => {
        setTasks([...tasks, newTask]);
      });
    }
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
  };

  const handleDelete = (id) => {
    deleteTask(id).then(() => {
      setTasks(tasks.filter(task => task._id !== id));
    });
  };

  return (
    <div>
      <TaskForm currentTask={currentTask} onSave={handleSave} />
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
