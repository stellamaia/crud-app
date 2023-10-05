// TaskList.js
import React from 'react';
import { useData } from './DataContext';

const TaskList = () => {
  const { tasks } = useData();

  return (
    <div>
      <h2>Tarefas</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
