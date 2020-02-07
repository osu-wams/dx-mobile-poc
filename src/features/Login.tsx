import React from 'react';
import { Text } from 'react-native';

interface IProps {
  authHandler: Function;
}

export default ({ authHandler }: IProps) => {
  // Component to handle kicking off the authentication causes ReactNative AppState.currentState
  // to cycle avoiding a race-condition bug related to Expo WebBrowser.openAuthSessionAsync, https://github.com/expo/expo/issues/6679

  return <Text onPress={async () => authHandler()}>Login</Text>;
};
