import React from 'react';
import { ListsHeader, ListItemContainer, AddListButton, ListContainer, HeaderContainer } from './SideMenuListSection.style';
import Icon from '@components/atoms/Icon';
import { List } from '@signals/list/models';
import { createList } from '@signals/list/listSignals';

interface ListItemProps {
  title: string;
  isSelected: boolean;
  iconName?: string;
}

const ListItem: React.FC<ListItemProps> = ({ iconName, isSelected, title }) => {
  return (
    <ListItemContainer $isSelected={isSelected}>
      {iconName && <Icon name={iconName} />}
      <div>{title}</div>
    </ListItemContainer>
  );
};

interface SideMenuListSectionProps {
  lists: List[],
  selectedListId?: string
}

const SideMenuListSection: React.FC<SideMenuListSectionProps> = ({ lists, selectedListId }) => {
  
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
          <ListItem 
            key={list.id}
            iconName="list-icon"
            title={list.title} 
            isSelected={selectedListId === list.id} />
        ))}
      </ListContainer>
    </>
  );
};

export default SideMenuListSection;
