import * as WebBrowser from 'expo-web-browser';
import * as SecureStore from 'expo-secure-store';
import Constants from 'expo-constants';
import { APP_HOST, AUTH_STORE_KEY } from '../constants';

const getTokenFromStore = async (key: string): Promise<string | null> => SecureStore.getItemAsync(key);
const setTokenInStore = async (key: string, token: string): Promise<void> => SecureStore.setItemAsync(key, token);
const openBrowserAuth = (linkingUrl: string) =>
  WebBrowser.openAuthSessionAsync(`${APP_HOST}/login?redirectUri=${linkingUrl}`, linkingUrl);

const persistToken = async (o: { type: string; url?: string }, key: string): Promise<string | null> => {
  try {
    const matches = o?.url?.match('^.*token=(.*)$');
    if (matches) {
      await setTokenInStore(key, matches[1]);
      return matches[1];
    }

    return null;
  } catch (err) {
    throw err;
  }
};

const startAuthSession = async (setAuth: Function) => {
  let token;
  try {
    const result = await openBrowserAuth(Constants.linkingUrl);
    token = await persistToken(result, AUTH_STORE_KEY);
    if (!token) {
      throw new Error('startAuthSession failed to persist the token.');
    }

    setAuth(token);
  } catch (e) {
    // ! Dead-end for the user, handle this with a meaningful error UI
    console.error(e);
  }
};

export { startAuthSession, getTokenFromStore };
