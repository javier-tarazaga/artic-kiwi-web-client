import React from 'react';
import MainSideMenu from 'components/organisms/MainSideMenu';
import TaskList from 'components/organisms/TaskList';
import { MainScreenContainer, SideMenu, TaskListContainer } from './MainPage.style';

const MainScreen: React.FC = () => {
  return (
    <MainScreenContainer>
      <SideMenu>
        <MainSideMenu />
      </SideMenu>
      <TaskListContainer>
        <TaskList />
      </TaskListContainer>
    </MainScreenContainer>
  );
};

export default MainScreen;
