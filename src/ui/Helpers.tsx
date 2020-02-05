import styled from 'styled-components/native';

const FlexRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

const AlignRight = styled.View`
  margin-left: auto;
`;

const Header2 = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #777;
`;

const SwitchLabel = styled.Text`
  padding-left: 6px;
  font-size: 16px;
`;

const SwitchLabelIndicator = styled.Text`
  color: #d73f09;
`;

export { FlexRow, Header2, SwitchLabel, SwitchLabelIndicator, AlignRight };
