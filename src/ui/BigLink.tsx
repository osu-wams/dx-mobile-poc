import styled from 'styled-components/native';

const osu = '#d73f09';

const BigLink = styled.TouchableOpacity`
  flex-direction: row;
`;

const BigLinkText = styled.Text`
  font-size: 24px;
  color: ${osu};
  padding-right: 4px;
  padding-bottom: 6px;
`;

export { BigLink, BigLinkText };
