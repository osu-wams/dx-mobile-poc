import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StatusBar } from 'react-native';
import Login from './src/features/Login';
import { AppWrapper } from './src/ui/Body';
import AppContainer from './AppContainer';
import { APP_HOST, AUTH_STORE_KEY } from './src/constants';
import { startAuthSession, getTokenFromStore } from './src/utils/auth';
import { UserContext } from './src/utils/contexts';

export default () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [hasAuth, setHasAuth] = useState(false);

  useEffect(() => {
    axios.defaults.baseURL = APP_HOST;

    /**
     * Retrieve the token from the local store if it exists, otherwise the Login component
     * is rendered which gives the user the SAML authentication flow.
     *
     * The hasAuth and token state eliminates a race-condition that React has in executing the hooks
     * in AppContainer prior to having set the axios authorization header. Setting hasAuth to true after
     * the axios authorization header provides all future axios requests to use the token for authentication.
     */
    if (token) {
      axios.defaults.headers.common.Authorization = token;
      setHasAuth(true);
    } else {
      getTokenFromStore(AUTH_STORE_KEY).then(token => {
        if (__DEV__) console.log(`App.useEffect getTokenFromStore: ${token}`);
        if (token) setToken(token);
      });
    }
  }, [token]);

  return (
    <UserContext.Provider value={user}>
      <AppWrapper>
        <StatusBar barStyle="dark-content" />
        {!token && <Login authHandler={() => startAuthSession(setToken)} />}
        {hasAuth && <AppContainer userHandler={setUser} />}
      </AppWrapper>
    </UserContext.Provider>
  );
};
