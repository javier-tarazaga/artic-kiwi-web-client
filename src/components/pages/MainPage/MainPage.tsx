import React from 'react';
import {
  MainContainer,
  LeftPanel,
  MiddlePanel,
} from './MainPage.style';
import MainSideMenu from 'components/organisms/MainSideMenu';
import TaskList from 'components/organisms/TaskList';

const MainPage: React.FC = () => {
  const isRightPanelVisible = true; // Set this based on your logic

  return (
    <MainContainer>
      <LeftPanel>
        <MainSideMenu />
      </LeftPanel>
      <MiddlePanel isRightPanelVisible={isRightPanelVisible}>
        <TaskList />
      </MiddlePanel>
      {/* {isRightPanelVisible && (
        <RightPanel isRightPanelVisible={isRightPanelVisible}>
          <TaskDetails />
        </RightPanel>
      )} */}
    </MainContainer>
  );
};

export default MainPage;
