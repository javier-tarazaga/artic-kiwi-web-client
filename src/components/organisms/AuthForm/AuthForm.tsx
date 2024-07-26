import styled from 'styled-components';
import Theme from '@styles/themes';

export const AuthFormItem = styled.div`
  margin-bottom: 10px;
  padding-bottom: 8px;
  text-align: 'left';
`;

export const AuthFormFooter = styled.div`
  color: ${Theme.textBody};
  display: flex;
  flex-direction: column;
`;

export const AuthFormFooterRow = styled.div`
  color: ${Theme.textBody};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RequiredInfo = styled.div`
  color: ${Theme.textBody};
`;

export const AuthFormTitle = styled.div`
  color: ${Theme.textBody};
  font-size: 24px;
  font-weight: 500;
  text-transform: capitalize;
  margin-right: 32px;
`;

export const AuthFormDescription = styled.div`
  color: ${Theme.textDescription};
  font-size: 14px;
  margin-right: 32px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
