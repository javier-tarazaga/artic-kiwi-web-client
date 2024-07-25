import React from 'react';
import { TaskContainer } from './Task.style';

interface TaskProps {
  title: string
}

function Task({ title }: TaskProps) {
  return (
    <TaskContainer>
      <div>{title}</div>
    </TaskContainer>
  )
}

export default Task;