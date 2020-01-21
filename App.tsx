import React, { useEffect, useState } from 'react';
import {
  Text,
  Button,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Svg, Use, Image } from 'react-native-svg';
import HTML from 'react-native-render-html';
import styled from 'styled-components';
import * as Font from 'expo-font';
import {
  faCogs,
  faHome,
  faToolbox,
  faFlaskPotion,
  faChevronUp,
  faChevronDown,
  faClipboardListCheck,
  faAnalytics,
  faExternalLink
} from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { WebBrowser, Linking } from 'expo';
// import WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import Logo from './assets/osu-logo.svg';
import Systems from './assets/systems-status-operational.svg';

// import { themeSettings, breakpoints, styled } from './theme';
// const styles = StyleSheet.create({
//   container: {
//     paddingTop: Constants.statusBarHeight
//   }
// });
const BetaPage = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);
  useEffect(() => {
    Font.loadAsync({
      stratum: require('./assets/fonts/Stratum2-Bold.otf')
    }).then(() => setFontLoaded(true));

    // this.setState({ fontLoaded: true });
  }, []);

  const htmlStuff = `<div><p>This is the beta release of an all-new student portal, intended to (eventually!) replace MyOSU and lay the foundation for your OSU digital experience. Here are a few of my.oregonstate.edu's key features:</p>
  <ul>
  <li>Home, where you can see what’s coming up in your courses, access commonly used systems, and find events and announcements from across campus</li>
  <li>Academics, where you can track your GPA and academic standing, and see what’s due in Canvas</li>
  <li>Finances, where you can track your OSU account transactions, set up direct deposit and pay your bills
  </li>
  <li>Resources, where you can find a comprehensive list of links to the various services and resources you need
  </li>
  </ul>
  <p>This is still a beta release, and while we plan to add new features and a greater level of personalization in the future, we want to hear from you now about your experience. This is YOUR dashboard — what would you like to see on this site? Notice any problems or bugs? You can switch back to <a href="https://myosu.oregonstate.edu/">MyOSU</a> if you're not finding what you need on the new dashboard (but drop us a line and tell us what's missing!). Explore away, and please send us your questions and <a href="https://oregonstate.qualtrics.com/jfe/form/SV_73vMvyQZBQx8aaN?type=feedback">feedback</a>!</p>
  </div>`;
  return (
    <Body>
      {fontLoaded && <Header>Beta</Header>}
      <CardBase>
        <CardHeaderWrapper>
          <FontAwesomeIcon icon={faCogs} size={24} />
          <CardTitle>Dashboard Beta</CardTitle>
          <ExpandButton onPress={() => toggleExpanded()}>
            <FontAwesomeIcon
              icon={expanded ? faChevronUp : faChevronDown}
              size={16}
              color={'#888'}
            />
          </ExpandButton>
        </CardHeaderWrapper>

        <CardBodyWrapper expanded={expanded}>
          <CardBodyTitle>Welcome!</CardBodyTitle>
          <HTML html={htmlStuff} tagsStyles={{ a: { color: osu } }} />
        </CardBodyWrapper>
      </CardBase>
      <CardBase>
        <CardHeaderWrapper>
          <FontAwesomeIcon icon={faClipboardListCheck} size={24} />
          <CardTitle>Release Notes</CardTitle>
        </CardHeaderWrapper>

        <CardBodyWrapper expanded='true'>
          <CardBodyTitle>Beta Launch</CardBodyTitle>
          <CardBodySubTitle>Fall 2019</CardBodySubTitle>
          <Text>Check back here for spicy release notes.</Text>
        </CardBodyWrapper>
      </CardBase>
      {/* <Nav navigation={navigation} /> */}
    </Body>
  );
};

const Home = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      stratum: require('./assets/fonts/Stratum2-Bold.otf')
    }).then(() => setFontLoaded(true));

    // this.setState({ fontLoaded: true });
  }, []);
  return (
    <Body>
      <TopWrapper>
        <Logo height={45} width={140} />
      </TopWrapper>
      {fontLoaded && <Header>Employee Dashboard</Header>}
      <CardBase>
        <CardHeaderWrapper>
          <FontAwesomeIcon icon={faAnalytics} size={24} />
          <CardTitle>Employee Tools</CardTitle>
        </CardHeaderWrapper>
        <CardBody2Col>
          <CardBodyCol1>
            <BigLink onPress={() => Linking.openURL('https://oregonstate.edu')}>
              <BigLinkText>Empcenter</BigLinkText>
              <FontAwesomeIcon icon={faExternalLink} size={24} color={osu} />
            </BigLink>
            <Text>Online time and attendance system.</Text>
          </CardBodyCol1>
          <CardBodyCol2>
            <BigLink onPress={() => Linking.openURL('https://oregonstate.edu')}>
              <BigLinkText>Evals</BigLinkText>
              <FontAwesomeIcon icon={faExternalLink} size={24} color={osu} />
            </BigLink>
            <Text>Electronic performance evaluation system.</Text>
          </CardBodyCol2>
        </CardBody2Col>
      </CardBase>
      <CardBase>
        <CardHeaderWrapper>
          <FontAwesomeIcon icon={faClipboardListCheck} size={24} />
          <CardTitle>IT System Status</CardTitle>
        </CardHeaderWrapper>
        <CardBodyWrapper expanded='true' style={{ textAlign: 'center' }}>
          <Systems height={160} width={160} />

          <Text>All IT systems operating normally</Text>
        </CardBodyWrapper>
      </CardBase>
    </Body>
  );
};

const Nav = ({ navigation }) => {
  return (
    <NavWrapper>
      <NavItem title='Home' onPress={() => navigation.navigate('Home')} />
      <NavItem title='Beta' onPress={() => navigation.navigate('Beta')} />
    </NavWrapper>
  );
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon={faHome} size={24} color={tintColor} />
        )
      }
    },
    Resources: {
      screen: BetaPage,
      navigationOptions: {
        tabBarLabel: 'Resources',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon={faToolbox} size={24} color={tintColor} />
        )
      }
    },
    Beta: {
      screen: BetaPage,
      navigationOptions: {
        tabBarLabel: 'Beta',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesomeIcon icon={faFlaskPotion} size={24} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#d73f09',
      inactiveTintColor: 'gray'
    }
  }
);

// const AppNavigator = createStackNavigator(
//   {
//     Home: Home,
//     Beta: BetaPage
//   },
//   {
//     initialRouteName: 'Home'
//   }
// );

export default createAppContainer(TabNavigator);

const osu = '#d73f09';

const TopWrapper = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;
const ExpandButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-left: auto;
`;
const NavWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const NavItem = styled.Button``;
const Body = styled.ScrollView`
  /* border-top: 1px solid #e9e5e4; */
  background-color: #f7f5f5;
  padding: ${Constants.statusBarHeight}px 10px 20px;
  color: #fff;
`;

const Header = styled.Text`
  font-family: 'stratum';
  color: rgb(105, 99, 97);
  font-size: 24px;
  padding-bottom: 16px;
`;

const CardBase = styled.View`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: solid #f6f6f6 1px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  margin: 0 0 20px 0;
  width: 100%;
`;

const CardTitle = styled.Text`
  font-size: 16px;
  color: #2e2b2a;
  padding: 0 10px;
`;
const CardBodySubTitle = styled.Text`
  margin: 2px 0 10px;
  color: #555;
  font-weight: bold;
`;

const CardHeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

const CardBody = styled.View`
  border-color: #e9e5e4;
  border-top-width: ${props => (props.expanded ? '1px' : 0)};
  padding: ${props => (props.expanded ? '15px' : 0)};
  height: ${props => (props.expanded ? 'auto' : 0)};
  overflow: hidden;
`;

const CardBody2Col = styled.View`
  flex-direction: row;
  align-items: flex-start;
  border-color: #e9e5e4;
  border-top-width: 1px;
  padding: 0;
`;

const CardBodyCol1 = styled.View`
  padding: 15px;
  width: 50%;
`;
const CardBodyCol2 = styled(CardBodyCol1)`
  border-left-width: 1px;
  border-color: #e9e5e4;
`;

const BigLink = styled.View`
  flex-direction: row;
`;

const BigLinkText = styled.Text`
  font-size: 24px;
  color: ${osu};
  padding-right: 4px;
  padding-bottom: 6px;
`;

const CardBodyWrapper = ({ expanded, children, ...props }) => (
  <CardBody expanded={expanded} {...props}>
    {children}
  </CardBody>
);

const CardBodyTitle = styled.Text`
  color: ${osu};
  font-size: 18px;
`;
