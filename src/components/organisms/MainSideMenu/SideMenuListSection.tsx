import React from 'react';
import { ListsHeader, ListItemContainer, AddListButton, AddListButtonText, ListContainer, HeaderContainer } from './SideMenuListSection.style';
import Icon from '@components/atoms/Icon';
import { List } from '@signals/list/models';
import { createList } from '@signals/list/listSignals';

interface ListItemProps {
  title: string;
  iconName?: string;
}

const ListItem: React.FC<ListItemProps> = ({ iconName, title }) => {
  return (
    <ListItemContainer>
      {iconName && <Icon name={iconName} />}
      <div>{title}</div>
    </ListItemContainer>
  );
};

interface SideMenuListSectionProps {
  lists: List[]
}

const SideMenuListSection: React.FC<SideMenuListSectionProps> = ({ lists }) => {
  
  const handleAddList = () => {
    createList("Untitled list");
  };

  return (
    <>
      <HeaderContainer>
        <ListsHeader>Lists</ListsHeader>
        <AddListButton onClick={handleAddList}>
          <Icon name="add" />
        </AddListButton>
      </HeaderContainer>
      <ListContainer>
        {lists.map((list) => (
          <ListItem key={list.id} iconName="list-icon" title={list.title} />
        ))}
      </ListContainer>
    </>
  );
};

export default SideMenuListSection;
