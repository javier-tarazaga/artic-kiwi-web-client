import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListsHeader = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #b0b0b0;
`;

export const ListItemContainer = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  color: #b0b0b0;
  background-color: ${props => props.$isSelected ? '#48464e' : 'transparent'};

  & > div {
    margin-left: 10px;
  }

  &:hover {
    color: white;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AddListButton = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  color: #b0b0b0;

  &:hover {
    color: white;
  }
`;
