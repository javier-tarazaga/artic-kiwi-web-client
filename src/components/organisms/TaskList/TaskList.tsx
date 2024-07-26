import React from 'react';
import Task from 'components/molecules/Task';
import { TaskListContainer } from './TaskList.style';
import { addTaskToList, currentList, error, isTaskListLoading } from 'signals/list/listSignals';

function TaskList() {  
  const taskList = currentList;
  const loading = isTaskListLoading;
  const taskError = error;

  const handleCreateTask = () => {
    addTaskToList(taskList.value!.id,'New Task');
  };

  return (
    <TaskListContainer>
      {loading.value && <p>Loading...</p>}
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
