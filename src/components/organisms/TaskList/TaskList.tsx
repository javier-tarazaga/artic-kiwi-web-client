import React from 'react';
import Task from '@components/molecules/Task';
import { TaskListContainer, TaskInputContainer, TaskCheckbox, TaskInput, ListTitle, ListHeader } from './TaskList.style';
import { addTaskToList, selectedList, error, isLoading, isTaskListLoading, updateListTask } from '@signals/list/listSignals';
import { signal } from '@preact/signals';

const newTaskTitle = signal('');

function TaskList() {  
  const handleCreateTask = () => {
    if (newTaskTitle.value.trim() !== '') {
      addTaskToList(selectedList.value!.id, newTaskTitle.value);
      newTaskTitle.value = ''; // Clear the input after adding the task
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    newTaskTitle.value = event.target.value;
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleCreateTask();
    }
  };

  const handleToggleTaskCompletion = (taskId: string) => {
    const task = selectedList.value!.tasks.find(t => t.id === taskId);
    if (task) {
      const updatedTask = { ...task, completed: !task.completed };
      updateListTask(selectedList.value!.id, updatedTask);
    }
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
      <ListHeader>
        <ListTitle>{selectedList.value!.title}</ListTitle>
      </ListHeader>
      {selectedList.value!.tasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          completed={task.completed}
          onToggle={() => handleToggleTaskCompletion(task.id)}
        />
      ))}
      <TaskInputContainer>
        <TaskCheckbox />
        <TaskInput
          placeholder="Add a task, or type '/' to choose a different content type"
          value={newTaskTitle.value}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
      </TaskInputContainer>
      {isTaskListLoading.value && <p>Loading...</p>}
    </TaskListContainer>
  );
}

export default TaskList;

