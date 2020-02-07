import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { faHome, faToolbox, faFlaskPotion } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createAppContainer } from 'react-navigation';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from './src/features/Login';
import { BetaPage } from './src/pages/BetaPage';
import { Resources } from './src/pages/Resources';
import { EmployeeDashboardPage } from './src/pages/EmployeeDashboardPage';
import { AppWrapper } from './src/ui/Body';
import Constants from 'expo-constants';
import * as WebBrowser from 'expo-web-browser';
import { APP_HOST } from './src/constants';

interface ITabBarIcon {
  tintColor: string;
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: EmployeeDashboardPage,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }: ITabBarIcon) => <FontAwesomeIcon icon={faHome} size={24} color={tintColor} />,
      },
    },
    Resources: {
      screen: Resources,
      navigationOptions: {
        tabBarLabel: 'Resources',
        tabBarIcon: ({ tintColor }: ITabBarIcon) => <FontAwesomeIcon icon={faToolbox} size={24} color={tintColor} />,
      },
    },
    Beta: {
      screen: BetaPage,
      navigationOptions: {
        tabBarLabel: 'Beta',
        tabBarIcon: ({ tintColor }: ITabBarIcon) => (
          <FontAwesomeIcon icon={faFlaskPotion} size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#d73f09',
      inactiveTintColor: 'gray',
    },
  },
);

export const UserContext = React.createContext(null);
const AppContainer = createAppContainer(TabNavigator);
const linkingUrl = Constants.linkingUrl;

export default () => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(null);

  const persistToken = (o: { type: string; url?: string }) => {
    const matches = o?.url?.match('^.*token=(.*)$');
    if (matches) {
      const token = matches[1];
      setAuth(token);
    }
  };

  const startAuthSession = async () => {
    try {
      const result = await WebBrowser.openAuthSessionAsync(`${APP_HOST}/login?redirectUri=${linkingUrl}`, linkingUrl);
      if (__DEV__) console.debug(`startAuthSession result: ${JSON.stringify(result)}`);
      persistToken(result);
    } catch (e) {
      // ! Dead-end for the user, handle this with a meaningful error UI
      console.error(e);
    }
  };

  const getUser = async () => {
    const response = await axios.get('/api/user');
    if (__DEV__) console.debug(response.data);
    setUser(response.data);
  };

  useEffect(() => {
    axios.defaults.baseURL = APP_HOST;

    if (auth) {
      axios.defaults.headers = {
        authorization: auth,
      };
      getUser();
    }
  }, [auth]);

  return (
    <UserContext.Provider value={user}>
      <AppWrapper>
        <StatusBar barStyle="dark-content" />
        {!auth && <Login authHandler={startAuthSession} />}
        {auth && <AppContainer />}
      </AppWrapper>
    </UserContext.Provider>
  );
};
