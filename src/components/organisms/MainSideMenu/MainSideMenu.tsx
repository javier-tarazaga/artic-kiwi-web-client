import React, { useEffect } from 'react';
import { MenuContainer, MenuHeaderContainer, MenuItemContainer, ListsHeader, ListItemContainer } from './MainSideMenu.style';
import Icon from '@components/atoms/Icon';
import { error, fetchLists, isLoading, lists } from '@signals/list/listSignals';

interface MenuItemProps {
  title: string;
  iconName?: string;
  active?: boolean;
}

interface MenuHeaderProps {
  title: string;
  iconName?: string;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ iconName, title }) => {
  return (
    <MenuHeaderContainer>
      {iconName && <Icon name={iconName} />}
      <div>{title}</div>
      <Icon name="arrow-down" className="expand-icon" />
    </MenuHeaderContainer>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ iconName, title, active }) => {
  return (
    <MenuItemContainer active={active}>
      {iconName && <Icon name={iconName} />}
      <div>{title}</div>
    </MenuItemContainer>
  );
};

const ListItem: React.FC<MenuItemProps> = ({ iconName, title }) => {
  return (
    <ListItemContainer>
      {iconName && <Icon name={iconName} />}
      <div>{title}</div>
    </ListItemContainer>
  );
};

const MainSideMenu: React.FC = () => {
  const listSignal = lists;
  const loadingSignal = isLoading; // Access the loading signal
  const errorSignal = error; // Access the error signal
  
  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <MenuContainer>
      <MenuHeader iconName="chevron-down" title="Acme Corp" />
      <ListsHeader>Lists</ListsHeader>
      {loadingSignal.value && <p>Loading...</p>}
      {errorSignal.value && <p>Error: {errorSignal.value}</p>}
      {listSignal.value.map((list) => (
        <ListItem key={list.id} iconName="list-icon" title={list.title} />
      ))}
    </MenuContainer>
  );
};

export default MainSideMenu;
