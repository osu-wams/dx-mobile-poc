import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import Constants from 'expo-constants';

const Body = styled(ScrollView)`
  /* border-top: 1px solid #e9e5e4; */
  background-color: #f7f5f5;
  padding: ${Constants.statusBarHeight}px 10px 20px;
  color: #fff;
`;

export { Body };
