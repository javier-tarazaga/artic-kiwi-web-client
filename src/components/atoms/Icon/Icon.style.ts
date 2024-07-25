import styled from 'styled-components/macro';
import Theme from 'styles/themes';

interface IProps {
  size: number;
  color: string;
}

export const StyledIcon = styled.span<IProps>`
  font-size: ${(props: IProps) => `${props.size}px`};
  color: ${(props: IProps) => props.color || Theme.textBody};
`;
