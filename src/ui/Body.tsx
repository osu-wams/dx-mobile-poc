import styled from 'styled-components/native';
import Constants from 'expo-constants';

const Body = styled.ScrollView`
  /* border-top: 1px solid #e9e5e4; */
  background-color: #f7f5f5;
  padding: 0 10px 20px;
  color: #fff;
`;

const AppWrapper = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
  background-color: #f7f5f5;
`;

export { AppWrapper, Body };
