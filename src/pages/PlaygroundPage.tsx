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

  const htmlStuff = `<div><p>This is the beta release of an all-new student portal, intended to (eventually!) replace MyOSU and lay the foundation for your OSU digital experience. Here are a few of my.oregonstate.edu's key features:</p>
  <ul>
  <li>Home, where you can see what’s coming up in your courses, access commonly used systems, and find events and announcements from across campus</li>
  <li>Academics, where you can track your GPA and academic standing, and see what’s due in Canvas</li>
  <li>Finances, where you can track your OSU account transactions, set up direct deposit and pay your bills
  </li>
  <li>Resources, where you can find a comprehensive list of links to the various services and resources you need
  </li>
  </ul>
  <p>This is still a beta release, and while we plan to add new features and a greater level of personalization in the future, we want to hear from you now about your experience. This is YOUR dashboard — what would you like to see on this site? Notice any problems or bugs? You can switch back to <a href="https://myosu.oregonstate.edu/">MyOSU</a> if you're not finding what you need on the new dashboard (but drop us a line and tell us what's missing!). Explore away, and please send us your questions and <a href="https://oregonstate.qualtrics.com/jfe/form/SV_73vMvyQZBQx8aaN?type=feedback">feedback</a>!</p>
  </div>`;
  return (
    <Body>
      <Header pageTitle="Playground Dashboard Yo" />

      <CardBase>
        <CardHeaderWrapper>
          <FontAwesomeIcon icon={faClipboardListCheck} size={24} />
          <CardTitle>Release Notes</CardTitle>
        </CardHeaderWrapper>

        <CardBodyWrapper expanded>
          <CardBodyTitle>Beta Launch</CardBodyTitle>
          <CardBodySubTitle>Fall 2019</CardBodySubTitle>
          <Text>Check back here for spicy release notes.</Text>
        </CardBodyWrapper>
      </CardBase>

      <AcademicResources />

      <Events />
    </Body>
  );
};

export { PlaygroundPage };
