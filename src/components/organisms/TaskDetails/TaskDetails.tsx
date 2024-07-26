import React from 'react';
import {
  TaskDetailsContainer,
  TaskHeader,
  TaskTitle,
  TaskMeta,
  TaskActions,
  TaskInput,
  TaskFooter,
  TaskMessageInput
} from './TaskDetails.style';
import Icon from '@components/atoms/Icon';

const TaskDetails: React.FC = () => {
  return (
    <TaskDetailsContainer>
      <TaskHeader>
        <div>
          <Icon name="close" />
          <Icon name="check-circle" className="complete-icon" />
        </div>
        <TaskActions>
          <Icon name="more" className="more-icon" />
        </TaskActions>
      </TaskHeader>
      <TaskTitle>Arena</TaskTitle>
      <TaskMeta>3 months ago</TaskMeta>
      <TaskInput>
        <input type="text" placeholder="Click here to add a task, or type '/' to choose a different content type" />
      </TaskInput>
      <TaskFooter>
        <span>Created by Javier • 75 days ago</span>
        <TaskMessageInput placeholder="Leave a message..." />
      </TaskFooter>
    </TaskDetailsContainer>
  );
};

export default TaskDetails;
