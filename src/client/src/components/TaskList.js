// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onEdit={() => onEdit(task)}
            onDelete={() => onDelete(task._id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
