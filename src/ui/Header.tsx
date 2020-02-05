import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle } from '@fortawesome/pro-light-svg-icons';
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
      <LogoWrapper>
        <Logo height={45} width={140} />
        <DropDown />
      </LogoWrapper>

      {fontLoaded && <PageTitle>{pageTitle}</PageTitle>}
    </TopWrapper>
  );
};

const TopWrapper = styled.View`
  flex-direction: column;
  margin-bottom: 10px;
  z-index: 99;
`;

const PageTitle = styled.Text`
  font-family: 'stratum';
  color: rgb(105, 99, 97);
  font-size: 24px;
  padding: 10px 0 12px 0;
`;

export { Header };

const DropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ToggleMenu onPress={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faUserCircle} size={24} />
      </ToggleMenu>
      <Menu expanded={open}>
        <MenuItem>
          <MenuItemText>Profile</MenuItemText>
        </MenuItem>
        <MenuItem>
          <MenuItemText>Logout</MenuItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

interface IExpanded {
  expanded: boolean;
}

const ToggleMenu = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Menu = styled.View<IExpanded>`
  display: ${props => (props.expanded ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  right: 5px;
  top: 38px;
  border-radius: 10px;
  background: #222;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  margin: 0 0 20px 0;
  width: 140px;
  height: ${props => (props.expanded ? 'auto' : 0)};
  z-index: 100;
`;

const MenuItem = styled.TouchableOpacity`
  color: #fff;
  padding: 5px;
`;

const MenuItemText = styled.Text`
  color: #fff;
  padding: 4px 10px;
`;

const LogoWrapper = styled.View`
  position: relative;
`;
