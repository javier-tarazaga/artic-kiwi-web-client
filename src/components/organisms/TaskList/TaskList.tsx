import React from 'react';
import Task from '@components/molecules/Task';
import { TaskListContainer } from './TaskList.style';
import { addTaskToList, selectedList, error, isLoading, isTaskListLoading } from '@signals/list/listSignals';

function TaskList() {
  const handleCreateTask = () => {
    addTaskToList(selectedList.value!.id, 'New Task');
  };

  if (isLoading.value) {
    return <p>Loading lists...</p>;
  }

  if (!selectedList.value?.tasks) {
    return <p>No tasks available.</p>;
  }

  return (
    <TaskListContainer>      
      {error.value && <p>Error: {error.value}</p>}
      <h1>{selectedList.value!.title}</h1>
      <div>
        <p>See what's due today and review any overdue tasks</p>
        <button onClick={handleCreateTask}>New task</button>
      </div>
      {
        selectedList.value!.tasks.map((task) => 
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
