import React from 'react';
import Task from '../../molecules/Task';
import { useAppSelector } from 'store/hooks';

function TaskList() {
  const taskList = useAppSelector((state) => state.tasks.currentTaskList);

  return (
    <>
    {
      taskList.map((task) => 
        <Task
          key={task.id}
          title={task.title}
        />
      )
    }
    </>
  );
}

export default TaskList