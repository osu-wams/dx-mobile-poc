import React, { useState } from 'react';
import styled from 'styled-components/native';
import HTML from 'react-native-render-html';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCogs, faChevronUp, faChevronDown, faClipboardListCheck } from '@fortawesome/pro-light-svg-icons';
import { Text } from 'react-native';
import { Header } from '../ui/Header';
import {
  CardBase,
  CardHeaderWrapper,
  CardTitle,
  CardBodyWrapper,
  CardBodyTitle,
  CardBodySubTitle,
  CardExpandButton,
} from '../ui/Card';
import { Events } from '../features/Events';
import AcademicResources from '../features/AcademicResources';
// import { Body } from '../ui/Body';

const Body = styled.View`
  /* border-top: 1px solid #e9e5e4; */
  background-color: #f7f5f5;
  padding: 0 10px 20px;
  color: #fff;
`;

const PlaygroundPage = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <Body>
      <Header pageTitle="Playground Dashboard Yo" />

      <AcademicResources cat={'Academic'} />
      <AcademicResources cat={'Financial'} />

      {/* <Events /> */}
    </Body>
  );
};

export { PlaygroundPage };
