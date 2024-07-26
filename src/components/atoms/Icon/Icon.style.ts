import styled from 'styled-components';
import Theme from '@styles/themes';

interface IProps {
  size: number;
  color?: string;
}

export const StyledIcon = styled.span<IProps>`
  font-size: ${(props) => `${props.size}px`};
  color: ${(props) => props.color || Theme.textBody};
`;