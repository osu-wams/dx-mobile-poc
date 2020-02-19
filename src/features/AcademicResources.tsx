import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components/native';
// import { styled, ThemeContext } from '../theme';
import { FlatList, Image, ImageBackground, Text, View } from 'react-native';
// import { ListItem } from 'react-native-elements';
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
  faFog,
  faFileCertificate,
  faFolders,
  faListAlt,
  faCommentsAlt,
  faBookReader,
  faBooks,
  faFileAlt,
  faBadgeCheck,
  faMoneyCheckEditAlt,
  faEnvelopeOpenDollar,
  faHandHoldingUsd,
  faAppleCrate,
  faBriefcase,
} from '@fortawesome/pro-light-svg-icons';
import { useResourcesByQueue } from '@osu-wams/hooks';
import { Types } from '@osu-wams/lib';
import { IconLookup } from './resources/resources-utils';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { List, ListItem, ListItemContentLinkSVG, ListItemContentLinkName } from '../ui/List';

// import boxSync from '../assets/logo-box-sync.png';
// import canvasLogo from '../assets/logo-canvas.png';
// import gDrive from '../assets/logo-drive.png';
// import gMail from '../assets/logo-gmail.png';
// import zoom from '../assets/logo-zoom.png';

export default props => {
  const [data, setData] = useState([
    { icon: faGraduationCap, title: 'Test1' },
    { icon: faCogs, title: 'Test2' },
    { icon: faClipboardListCheck, title: 'Test3' },
    { icon: faGraduationCap, title: 'Test1' },
    { icon: faCogs, title: 'Test2' },
    { icon: faClipboardListCheck, title: 'Test3' },
  ]);

  const res = useResourcesByQueue(props.cat);
  const [resources, setResources] = useState<Types.Resource[]>([]);

  useEffect(() => {});

  useEffect(() => {
    if (!res.loading) {
      const resourcesToUse = res.data?.items;
      // const resourcesToUse = res.data?.items?.filter(r => hasAudience(user.data, r));
      setResources(resourcesToUse);
    }
    // }, [res.data, res.loading, user.data, user.loading]);
  }, [res.data, res.loading]);

  const getFontAwesomeForString = iconName => {
    console.log(iconName);
    const iconMap = {
      //academic
      'file-certificate': faFileCertificate,
      folders: faFolders,
      'list-alt': faListAlt,
      'comments-alt': faCommentsAlt,
      'book-reader': faBookReader,
      books: faBooks,
      'file-alt': faFileAlt,
      'badge-check': faBadgeCheck,
      //financial
      'money-check-edit-alt': faMoneyCheckEditAlt,
      'envelope-open-dollar': faEnvelopeOpenDollar,
      'hand-holding-usd': faHandHoldingUsd,
      'apple-crate': faAppleCrate,
      briefcase: faBriefcase,
    };

    if (iconName !== undefined) {
      const iconSplit = iconName.split('.');
      if (iconSplit[0] === 'fal' || iconSplit[0] === 'fab') {
        const faIcon = iconMap[iconSplit[1]] ?? faGraduationCap;
        return <FontAwesomeIcon icon={faIcon} size={24} />;
      } else if (iconSplit[0] === 'osu') {
        return <Image style={{ width: 24, height: 24 }} source={logoMapping[iconSplit[1]]} />;
      }
    }

    return <FontAwesomeIcon icon={faGraduationCap} size={24} />;
  };

  return (
    <>
      <CardBase>
        <CardHeaderWrapper>
          <FontAwesomeIcon icon={faGraduationCap} size={24} />
          <CardTitle>{props.cat} Resources</CardTitle>
        </CardHeaderWrapper>

        <CardBodyWrapperFixedHeight expanded>
          <FlatList
            data={resources}
            renderItem={({ item }) => (
              <CardHeaderWrapper>
                {/* {console.log(item)} */}
                {getFontAwesomeForString(item.iconName)}
                <CardTitle>{item.title}</CardTitle>
              </CardHeaderWrapper>
              // <></>
            )}
          />
        </CardBodyWrapperFixedHeight>
      </CardBase>
    </>
  );
};

/*
              <CardHeaderWrapper>
                <FontAwesomeIcon icon={item.icon} size={24} />
                <CardTitle>{item.title}</CardTitle>
              </CardHeaderWrapper>
*/

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

// const ResourceImg = styled.img`
//   width: 3rem;
// `;

const logoMapping = {
  'logo-box-sync': require('../assets/logo-box-sync.png'),
  'logo-canvas': require('../assets/logo-canvas.png'),
  'logo-drive': require('../assets/logo-drive.png'),
  'logo-gmail': require('../assets/logo-gmail.png'),
  'logo-zoom': require('../assets/logo-zoom.png'),
};

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
