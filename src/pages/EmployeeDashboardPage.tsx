import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCogs,
  faChevronUp,
  faChevronDown,
  faClipboardListCheck,
  faArchway,
  faAbacus,
  faAnalytics,
  faMoneyBillAlt,
  faExternalLink,
} from '@fortawesome/pro-light-svg-icons';
import { Text } from 'react-native';
import { Linking } from 'expo';
import { Header } from '../ui/Header';
import {
  CardBase,
  CardHeaderWrapper,
  CardTitle,
  CardBodyWrapper,
  CardBody2Col,
  CardBodyCol1,
  CardBodyCol2,
  CardBodyCenter,
  CardExpandButton,
} from '../ui/Card';
import { Events } from '../features/Events';
import { Body } from '../ui/Body';
import { Footer } from '../ui/Footer';
import { BigLink, BigLinkText } from '../ui/BigLink';
import Systems from '../../assets/systems-status-operational.svg';

const EmployeeDashboardPage = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);
  const osu = '#d73f09';

  return (
    <Body>
      <Header pageTitle="Employee Dashboard" />
      <CardBase>
        <CardHeaderWrapper>
          <FontAwesomeIcon icon={faAnalytics} size={24} />
          <CardTitle>Employee Tools</CardTitle>
        </CardHeaderWrapper>
        <CardBody2Col>
          <CardBodyCol1>
            <BigLink onPress={() => Linking.openURL('https://oregonstate.edu')}>
              <BigLinkText>Empcenter</BigLinkText>
              <FontAwesomeIcon icon={faExternalLink} size={24} color={osu} />
            </BigLink>
            <Text>Online time and attendance system.</Text>
          </CardBodyCol1>
          <CardBodyCol2>
            <BigLink onPress={() => Linking.openURL('https://oregonstate.edu')}>
              <BigLinkText>Evals</BigLinkText>
              <FontAwesomeIcon icon={faExternalLink} size={24} color={osu} />
            </BigLink>
            <Text>Electronic performance evaluation system.</Text>
          </CardBodyCol2>
        </CardBody2Col>
      </CardBase>
      <CardBase>
        <CardHeaderWrapper>
          <FontAwesomeIcon icon={faClipboardListCheck} size={24} />
          <CardTitle>IT System Status</CardTitle>
        </CardHeaderWrapper>
        <CardBodyWrapper expanded>
          <CardBodyCenter>
            <Systems height={160} width={160} />

            <Text>All IT systems operating normally</Text>
          </CardBodyCenter>
        </CardBodyWrapper>
      </CardBase>
      <CardBase>
        <CardHeaderWrapper>
          <FontAwesomeIcon icon={faCogs} size={24} />
          <CardTitle>Featured Resources</CardTitle>
          <CardExpandButton onPress={() => toggleExpanded()}>
            <FontAwesomeIcon icon={expanded ? faChevronUp : faChevronDown} size={16} color="#888" />
          </CardExpandButton>
        </CardHeaderWrapper>

        <CardBodyWrapper expanded={expanded}>
          <CardHeaderWrapper>
            <FontAwesomeIcon icon={faArchway} size={24} />
            <CardTitle>Featured Resource # 1</CardTitle>
          </CardHeaderWrapper>
          <CardHeaderWrapper>
            <FontAwesomeIcon icon={faAbacus} size={24} />
            <CardTitle>Arch resource</CardTitle>
          </CardHeaderWrapper>
          <CardHeaderWrapper>
            <FontAwesomeIcon icon={faMoneyBillAlt} size={24} />
            <CardTitle>Another resource here</CardTitle>
          </CardHeaderWrapper>
        </CardBodyWrapper>
      </CardBase>
      <Events />
      <Footer />
    </Body>
  );
};

export { EmployeeDashboardPage };
