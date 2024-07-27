import styled from 'styled-components';

export const TaskListContainer = styled.div`
  padding: 20px;
  background-color: #1d1e22;
  color: #fff;
  font-family: Arial, sans-serif;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListTitle = styled.h1`
  font-size: 36px;
  margin: 0;
`;

export const TaskInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

export const TaskCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
`;

export const TaskInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  background: transparent;
  border: 1px solid #444;
  color: #fff;
  border-radius: 5px;

  &::placeholder {
    color: #777;
  }
`;

