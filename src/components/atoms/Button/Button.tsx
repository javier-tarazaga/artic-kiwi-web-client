import { ButtonTypeMap, ExtendButtonBase } from '@mui/material';
import MButton, { ButtonProps as MButtonProps } from '@mui/material/Button';
import React from 'react';

interface CustomButtonProps {
  children: JSX.Element | string;
  color?: MButtonProps['color'];
}

type ButtonProps = CustomButtonProps & Partial<ExtendButtonBase<ButtonTypeMap<{}, 'button'>>>;

export default function Button({
  children,
  color
}: ButtonProps) {
    return (
      <MButton
        color={color}
      >
        {children}
      </MButton>
    )
}