import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Footer = () => {
  return (
    <FooterWrapper>
      <Text>Footer content</Text>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.View`
  background: #222;
`;

export { Footer };
