import React from 'react';
import GridLayout, { Layout } from 'react-grid-layout';
import MainSideMenu from 'components/organisms/MainSideMenu';
import TaskList from 'components/organisms/TaskList';

const MainScreen: React.FC = () => {
  const layout: Layout[] = [
    { i: 'menu', x: 0, y: 0, w: 1, h: 2, minW: 1, maxW: 1 },
    { i: 'tasks', x: 1, y: 0, w: 1, h: 2, minW: 1, maxW: 1 },
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={2}
      rowHeight={150}
      width={1200}
      isResizable
      isDraggable
    >
      <div key="menu" className="pane">
        <MainSideMenu />
      </div>
      <div key="tasks" className="pane">
        <TaskList />
      </div>
    </GridLayout>
  );
};

export default MainScreen;
