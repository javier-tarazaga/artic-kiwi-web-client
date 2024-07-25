import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { StyledIcon } from './Icon.style';

export interface IProps {
  name: string;
  className?: string;
  color?: string;
  complex?: boolean;
  children?: ReactNode;
}

const Icon = ({ className, name, color, complex = false, children }: IProps) => {
  return (
    <StyledIcon className={`${className} icon-${name}`} color={color} size={16}>
      {complex && children}
    </StyledIcon>
  );
};

export default styled(Icon)``;
