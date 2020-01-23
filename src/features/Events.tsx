/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components/native';
import { View, ImageBackground } from 'react-native';

const Events = () => {
  const events = [
    {
      link: 'https://events.oregonstate.edu/event/speed_friending_1305',
      bg_image: 'https://images.localist.com/photos/32361869174400/huge/66dfef8e021b16f04402e73e37958b49ba0adfef.jpg',
      date: '2020-01-16T19:00:00-08:00',
      id: 32361869064560,
      title: 'Speed Friending',
      type: 'localist',
    },
    {
      link: 'https://events.oregonstate.edu/event/mlk_jr_day_of_service',
      bg_image: 'https://images.localist.com/photos/32053426158987/huge/358f2bf7b08a364415d54937905b58f71e48a9e4.jpg',
      date: '2020-01-18T08:00:00-08:00',
      id: 32053426013525,
      title: 'MLK Jr. Day of Service',
      type: 'localist',
    },
    {
      link: 'https://events.oregonstate.edu/event/38th_annual_dr_martin_luther_king_jr_keynote_session',
      bg_image: 'https://images.localist.com/photos/32063498358811/huge/e389013cf7d8b196b5c47426955c84ca7c683c65.jpg',
      date: '2020-01-20T11:00:00-08:00',
      id: 32063533697710,
      title: '38th annual Dr. Martin Luther King, Jr. Keynote Session',
      type: 'localist',
    },
  ];

  return (
    <>
      {events.map(e => (
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
