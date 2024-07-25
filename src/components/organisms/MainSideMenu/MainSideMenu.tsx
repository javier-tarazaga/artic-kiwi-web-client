import React from 'react';
import { MenuContainer } from './MainSideMenu.style';
import Icon from 'components/atoms/Icon';

interface MenuItemProps {
  title: string;
  children?: any;
  iconName?: string;
}

function MenuItem({ iconName, title, children }: MenuItemProps) {
  return (
    <div>
      { iconName && <Icon name={iconName} /> }
      <div>{title}</div>
      { children }
    </div>
  )
}

function MenuHeader({ title }: MenuItemProps) {
  return (
    <div>
      <div>{title}</div>
    </div>
  )
}

function MainSideMenu() {
  return (
    <MenuContainer>
      <div>
        <div>Javier Tarazaga</div>
        <div>Settings</div>
      </div>
      <MenuItem iconName="time" title="My Day" />
      <MenuItem title="Lists">
        <div>
          <p>hola</p>
        </div>
      </MenuItem>
      <div>
        <p></p>
      </div>
    </MenuContainer>
  )
}

export default MainSideMenu;