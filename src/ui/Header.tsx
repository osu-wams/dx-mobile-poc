import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import styled from 'styled-components/native';
import Logo from '../../assets/osu-logo.svg';

interface IHeader {
  pageTitle: string;
}
const Header = ({ pageTitle }: IHeader) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      stratum: require('../../assets/fonts/Stratum2-Bold.otf'),
    }).then(() => setFontLoaded(true));
  }, []);
  return (
    <TopWrapper>
      <Logo height={45} width={140} />
      {fontLoaded && <PageTitle>{pageTitle}</PageTitle>}
    </TopWrapper>
  );
};

const TopWrapper = styled.View`
  flex-direction: column;
  margin-bottom: 10px;
`;

const PageTitle = styled.Text`
  font-family: 'stratum';
  color: rgb(105, 99, 97);
  font-size: 24px;
  padding: 10px 0 12px 0;
`;

export { Header };
