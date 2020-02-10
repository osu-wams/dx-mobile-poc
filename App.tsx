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
import { APP_HOST, AUTH_STORE_KEY } from './src/constants';
import { startAuthSession, getTokenFromStore } from './src/utils/auth';

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

export default () => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(null);

  const getUser = async () => {
    const response = await axios.get('/api/user');
    if (__DEV__) console.debug(`getUser: ${JSON.stringify(response.data)}`);
    setUser(response.data);
  };

  useEffect(() => {
    axios.defaults.baseURL = APP_HOST;

    if (auth) {
      axios.defaults.headers = {
        authorization: auth,
      };
      getUser();
    } else {
      getTokenFromStore(AUTH_STORE_KEY).then(token => {
        console.log(`App.useEffect getTokenFromStore: ${token}`);
        if (token) setAuth(token);
      });
    }
  }, [auth]);

  return (
    <UserContext.Provider value={user}>
      <AppWrapper>
        <StatusBar barStyle="dark-content" />
        {!auth && <Login authHandler={() => startAuthSession(setAuth)} />}
        {auth && <AppContainer />}
      </AppWrapper>
    </UserContext.Provider>
  );
};
