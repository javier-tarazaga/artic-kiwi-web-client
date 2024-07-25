import React from 'react';
import SplitPane from 'react-split-pane';
import Tasks from 'features/tasks';
import Menu from '../menu/Menu';
import './MainScreen.style.css';

function LoginScreen() {
  return (
    <SplitPane split="vertical" defaultSize={300}>
      <Menu />
      <Tasks />
    </SplitPane>
  );
}

export default LoginScreen;