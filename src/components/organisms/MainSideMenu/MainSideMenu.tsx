import React from 'react';
import { MenuContainer, MenuHeaderContainer, MenuItemContainer, ListsHeader, ListItemContainer } from './MainSideMenu.style';
import Icon from 'components/atoms/Icon';

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
  return (
    <MenuContainer>
      <MenuHeader iconName="chevron-down" title="Acme Corp" />
      <ListsHeader>Lists</ListsHeader>
      <ListItem iconName="running" title="Acme '24 F/W" />
      <ListItem iconName="camera" title="Team Photo Shoot" />
      <ListItem iconName="book" title="Campaign Story" />
    </MenuContainer>
  );
};

export default MainSideMenu;
