import React, { useEffect } from 'react';
import { faHome, faToolbox, faFlaskPotion, faGamepad } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { BetaPage } from './src/pages/BetaPage';
import { Resources } from './src/pages/Resources';
import { PlaygroundPage } from './src/pages/PlaygroundPage';
import { EmployeeDashboardPage } from './src/pages/EmployeeDashboardPage';
import { useUser } from '@osu-wams/hooks';

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
    Playground: {
      screen: PlaygroundPage,
      navigationOptions: {
        tabBarLabel: 'Playground',
        tabBarIcon: ({ tintColor }: ITabBarIcon) => <FontAwesomeIcon icon={faGamepad} size={24} color={tintColor} />,
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

const TabNavigatorContainer = createAppContainer(TabNavigator);

interface IProps {
  userHandler: Function;
}

export default ({ userHandler }: IProps) => {
  const user = useUser();
  useEffect(() => {
    if (!user.loading && !user.error && user.data) {
      userHandler(user.data);
    }
  }, [userHandler, user.data, user.error, user.loading]);

  return (
    <>
      <TabNavigatorContainer />
    </>
  );
};
