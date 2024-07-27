import React, { useEffect } from 'react';
import { MenuContainer, MenuHeaderContainer, MenuItemContainer } from './MainSideMenu.style';
import Icon from '@components/atoms/Icon';
import { fetchLists, lists, selectedList } from '@signals/list/listSignals';
import SideMenuListSection from './SideMenuListSection';

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

const MainSideMenu: React.FC = () => {
  const listSignal = lists;
  // const loadingSignal = isLoading; // Access the loading signal
  // const errorSignal = error; // Access the error signal

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <MenuContainer>
      <MenuHeader iconName="chevron-down" title="Acme Corp" />
      <SideMenuListSection 
        lists={listSignal.value}
        selectedListId={selectedList.value?.id}
      />
    </MenuContainer>
  );
};

export default MainSideMenu;
