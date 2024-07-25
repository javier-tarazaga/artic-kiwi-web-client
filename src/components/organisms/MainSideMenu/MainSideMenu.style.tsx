import styled from 'styled-components';

export const MenuContainer = styled.div`
  background-color: #353339;
  padding: 15px;
  height: 100%;
  color: white;
  font-family: Arial, sans-serif;
`;

export const MenuHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  & > div {
    margin-left: 10px;
    font-weight: bold;
  }

  .expand-icon {
    margin-left: auto;
    cursor: pointer;
  }
`;

export const MenuItemContainer = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  color: ${props => (props.active ? '#fff' : '#b0b0b0')};

  & > div {
    margin-left: 10px;
  }

  &:hover {
    background-color: #383C3F;
  }
`;

export const ListsHeader = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #b0b0b0;
`;

export const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  color: #b0b0b0;

  & > div {
    margin-left: 10px;
  }

  &:hover {
    color: white;
  }
`;
