import React from 'react';
import { TaskContainer, TaskCheckbox, TaskInput } from './Task.style';

interface TaskProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
}

const Task: React.FC<TaskProps> = ({ title, completed, onToggle }) => {
  return (
    <TaskContainer>
      <TaskCheckbox checked={completed} onChange={onToggle} />
      <TaskInput type="text" value={title} readOnly />
    </TaskContainer>
  );
};

export default Task;
