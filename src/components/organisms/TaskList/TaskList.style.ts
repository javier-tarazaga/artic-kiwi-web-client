import styled from 'styled-components';

export const TaskListContainer = styled.div`
  padding: 20px;
  color: white;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .task-list-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    p {
      color: #b0b0b0;
    }

    .new-task-button {
      background-color: #3a3a3a;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      border-radius: 4px;

      &:hover {
        background-color: #505050;
      }
    }
  }
`;
