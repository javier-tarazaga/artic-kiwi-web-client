import React from 'react';
import Task from 'components/molecules/Task';
import { useAppSelector } from 'store/hooks';
import { TaskListContainer } from './TaskList.style';

function TaskList() {
  const taskList = useAppSelector((state) => state.tasks.currentTaskList);

  return (
    <TaskListContainer>
      <h1>Today</h1>
      <div className="task-list-meta">
        <p>See what's due today and review any overdue tasks</p>
        <button className="new-task-button">New task</button>
      </div>
      {
        taskList.map((task) => 
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
