import React from 'react';
import styled from 'styled-components/macro';
import Theme from 'styles/themes';

const FooterWrapper = styled.div``;

const FooterLinkText = styled.div`
  color: ${Theme.link};
  text-align: right;

  :hover {
    color: ${Theme.linkHover};
    cursor: pointer;
  }
`;

interface FooterTextProps {
  text: string;
  onClick?: () => void;
}

export const FooterText = ({ text, onClick }: FooterTextProps) => (
  <FooterWrapper>
    <FooterLinkText onClick={onClick}>{text}</FooterLinkText>
  </FooterWrapper>
);