import styled from 'styled-components';

export const TaskDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: white;
  height: 100%;
`;

export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  & > div {
    display: flex;
    align-items: center;

    .complete-icon {
      margin-left: 10px;
      cursor: pointer;
    }
  }
`;

export const TaskActions = styled.div`
  display: flex;
  align-items: center;

  .more-icon {
    cursor: pointer;
  }
`;

export const TaskTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const TaskMeta = styled.div`
  font-size: 14px;
  color: #b0b0b0;
  margin-bottom: 20px;
`;

export const TaskInput = styled.div`
  flex-grow: 1;
  input {
    width: 100%;
    padding: 10px;
    background-color: #383C3F;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    outline: none;
  }
`;

export const TaskFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  font-size: 12px;
  color: #b0b0b0;
`;

export const TaskMessageInput = styled.input`
  width: 100%;
  padding: 10px;
  background-color: #383C3F;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  outline: none;
`;
