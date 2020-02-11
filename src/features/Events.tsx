import React from 'react';
import styled from 'styled-components/native';
import { View, ImageBackground } from 'react-native';
import { useCampusEvents } from '@osu-wams/hooks';

const Events = () => {
  const events = useCampusEvents('corvallis');

  return (
    <>
      {events.data.length > 0 &&
        events.data.map((e: { id: number; title: string; bg_image: string }) => (
          <EventCard key={e.id} itemContent={e} />
        ))}
    </>
  );
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

const EventCard = ({ itemContent }: IEventCard) => {
  return (
    <View
      style={{
        height: 300,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        marginBottom: 10,
        borderRadius: 10,
      }}
    >
      <ImageBackground
        source={{ uri: itemContent.bg_image }}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <EventCardBody>
          <EventCardLargeTitle>{itemContent.title}</EventCardLargeTitle>
        </EventCardBody>
      </ImageBackground>
    </View>
  );
};

export { Events };
