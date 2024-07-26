import React from 'react';
import Task from 'components/molecules/Task';
import { TaskListContainer } from './TaskList.style';
import { addTaskToList, currentList, error, isLoading, isTaskListLoading } from 'signals/list/listSignals';

function TaskList() {  
  const taskList = currentList;
  const taskListLoading = isTaskListLoading;
  const listLoading = isLoading;
  const taskError = error;

  const handleCreateTask = () => {
    addTaskToList(taskList.value!.id,'New Task');
  };

  if (listLoading) {
    return <p>Loading lists...</p>;
  }

  if (!taskList) {
    return <p>No tasks available.</p>;
  }

  return (
    <TaskListContainer>
      {taskListLoading.value && <p>Loading...</p>}
      {taskError.value && <p>Error: {taskError.value}</p>}
      <h1>{taskList.value!.title}</h1>
      <div>
        <p>See what's due today and review any overdue tasks</p>
        <button onClick={handleCreateTask}>New task</button>
      </div>
      {
        taskList.value!.tasks.map((task) => 
          <Task
            key={task.id}
            title={task.title}
          />
        )
      }
    </TaskListContainer>
  );
}

export default TaskList;
