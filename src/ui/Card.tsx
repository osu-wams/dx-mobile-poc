import React from 'react';
import styled from 'styled-components/native';

interface ICardBodyWrapper {
  expanded: boolean;
}
/* eslint-disable react/prop-types */
const CardBodyWrapper: React.FC<ICardBodyWrapper> = ({ expanded, children, ...props }) => (
  <CardBody expanded={expanded} {...props}>
    {children}
  </CardBody>
);

/* eslint-disable react/prop-types */
const CardBodyWrapperFixedHeight: React.FC<ICardBodyWrapper> = ({ expanded, children, ...props }) => (
  <CardBodyFixedHeight expanded={expanded} {...props}>
    {children}
  </CardBodyFixedHeight>
);

const osu = '#d73f09';

const CardBase = styled.View`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: solid #f6f6f6 1px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  margin: 0 0 20px 0;
  width: 100%;
`;

const CardTitle = styled.Text`
  font-size: 16px;
  color: #2e2b2a;
  padding: 0 10px;
`;
const CardBodySubTitle = styled.Text`
  margin: 2px 0 10px;
  color: #555;
  font-weight: bold;
`;

const CardExpandButton = styled.TouchableOpacity`
  align-self: flex-end;
  margin-left: auto;
`;

const CardHeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

const CardBody = styled.View<ICardBodyWrapper>`
  border-color: #e9e5e4;
  border-top-width: ${props => (props.expanded ? '1px' : 0)};
  padding: ${props => (props.expanded ? '15px' : 0)};
  height: ${props => (props.expanded ? 'auto' : 0)};
  overflow: hidden;
`;

const CardBodyFixedHeight = styled.View<ICardBodyWrapper>`
  border-color: #e9e5e4;
  border-top-width: ${props => (props.expanded ? '1px' : 0)};
  padding: ${props => (props.expanded ? '15px' : 0)};
  height: ${props => (props.expanded ? '220px' : 0)};
  overflow: hidden;
`;

const CardBodyTitle = styled.Text`
  color: ${osu};
  font-size: 18px;
`;

const CardBodyCenter = styled.View`
  align-items: center;
`;

const CardBody2Col = styled.View`
  flex-direction: row;
  align-items: flex-start;
  border-color: #e9e5e4;
  border-top-width: 1px;
  padding: 0;
`;

const CardBodyCol1 = styled.View`
  padding: 15px;
  width: 50%;
`;
const CardBodyCol2 = styled(CardBodyCol1)`
  border-left-width: 1px;
  border-color: #e9e5e4;
`;

export {
  CardBase,
  CardTitle,
  CardBody,
  CardExpandButton,
  CardBodyTitle,
  CardBodyCenter,
  CardBody2Col,
  CardBodyCol1,
  CardBodyCol2,
  CardBodySubTitle,
  CardBodyWrapper,
  CardHeaderWrapper,
  CardBodyWrapperFixedHeight,
};
