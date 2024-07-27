import styled from 'styled-components';

export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #444;
`;

export const TaskCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
`;

export const TaskInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

