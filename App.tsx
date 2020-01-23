import React from 'react';
import { faHome, faToolbox, faFlaskPotion } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { BetaPage } from './src/pages/BetaPage';
import { EmployeeDashboardPage } from './src/pages/EmployeeDashboardPage';

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
      screen: BetaPage,
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

export default createAppContainer(TabNavigator);
