import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { FlatList, ImageBackground, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import {
  CardBase,
  CardHeaderWrapper,
  CardTitle,
  CardBodyWrapper,
  CardBodyTitle,
  CardBodySubTitle,
  CardExpandButton,
  CardBodyWrapperFixedHeight,
} from '../ui/Card';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCogs,
  faChevronUp,
  faChevronDown,
  faClipboardListCheck,
  faGraduationCap,
} from '@fortawesome/pro-light-svg-icons';

export default () => {
  const [data, setData] = useState([
    { icon: faGraduationCap, title: 'Test1' },
    { icon: faCogs, title: 'Test2' },
    { icon: faClipboardListCheck, title: 'Test3' },
    { icon: faGraduationCap, title: 'Test1' },
    { icon: faCogs, title: 'Test2' },
    { icon: faClipboardListCheck, title: 'Test3' },
  ]);

  useEffect(() => {});

  return (
    <>
      <CardBase>
        <CardHeaderWrapper>
          <FontAwesomeIcon icon={faGraduationCap} size={24} />
          <CardTitle>Academic Resources</CardTitle>
        </CardHeaderWrapper>

        <CardBodyWrapperFixedHeight expanded>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <CardHeaderWrapper>
                <FontAwesomeIcon icon={item.icon} size={24} />
                <CardTitle>{item.title}</CardTitle>
              </CardHeaderWrapper>
            )}
          />
        </CardBodyWrapperFixedHeight>
      </CardBase>
    </>
  );
};

/*
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
*/

// const AcademicResources = () => {
//   return (
//     <>
//       <CardBase>
//         <CardHeaderWrapper>
//           <FontAwesomeIcon icon={faGraduationCap} size={24} />
//           <CardTitle>Academic Resources</CardTitle>
//         </CardHeaderWrapper>

//         <CardBodyWrapper expanded>

//         </CardBodyWrapper>
//       </CardBase>
//     </>
//   );
// };

const EventCardBody = styled.View`
  :link,
  :visited,
  :hover,
  :active {
    text-decoration: none;
  }
  display: flex;
  flex-direction: column;
  padding: 15px;
  flex: 2;
  text-align: left;
  justify-content: center;
`;

const EventCardLargeTitle = styled.Text`
  color: #fff;
  background-color: 'rgba(0, 0, 0, 0.5)';
  padding: 20px 10px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

interface IEventCard {
  itemContent: {
    title: string;
    bg_image: string;
  };
}

// export { AcademicResources };
