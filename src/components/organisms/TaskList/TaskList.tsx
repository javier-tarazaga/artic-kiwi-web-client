import React from 'react';
import Task from '@components/molecules/Task';
import { TaskListContainer } from './TaskList.style';
import { addTaskToList, currentList, error, isLoading, isTaskListLoading } from '@signals/list/listSignals';

function TaskList() {
  const handleCreateTask = () => {
    addTaskToList(currentList.value!.id, 'New Task');
  };

  if (isLoading.value) {
    return <p>Loading lists...</p>;
  }

  if (!currentList.value?.tasks) {
    return <p>No tasks available.</p>;
  }

  return (
    <TaskListContainer>      
      {error.value && <p>Error: {error.value}</p>}
      <h1>{currentList.value!.title}</h1>
      <div>
        <p>See what's due today and review any overdue tasks</p>
        <button onClick={handleCreateTask}>New task</button>
      </div>
      {
        currentList.value!.tasks.map((task) => 
          <Task
            key={task.id}
            title={task.title}
          />
        )
      }
      {isTaskListLoading.value && <p>Loading...</p>}
    </TaskListContainer>
  );
}

export default TaskList;
