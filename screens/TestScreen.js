import React, { Component, useEffect, useState } from 'react';
import { AppRegistry, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AuthSession } from 'expo';

export default () => {
  const [pageNum, setPageNum] = useState(1);
  const [label1, setLabel1] = useState('Screen 1 is active');
  const [label2, setLabel2] = useState('Screen 2 is not active');
  const [label3, setLabel3] = useState('Screen 3 is not active');
  const [scrollViewContentOffset, setScrollViewContentOffset] = useState({ x: 0, y: 0 });
  const swidth = Dimensions.get('screen').width;

  useEffect(() => {
    const offset = (pageNum - 1) * swidth;

    setLabel1('Screen 1 is not active');
    setLabel2('Screen 2 is not active');
    setLabel3('Screen 3 is not active');

    switch (pageNum) {
      case 1:
        setLabel1('Screen 1 is active');
        break;
      case 2:
        setLabel2('Screen 2 is active');
        break;
      case 3:
        setLabel3('Screen 3 is active');
        break;
    }

    setScrollViewContentOffset({ x: offset, y: 0 });
  }, [pageNum]);

  return (
    <View>
      <View
        style={{
          height: '20%',
          backgroundColor: 'yellow',
        }}
      >
        <Text
          onPress={() => {
            setPageNum(1);
          }}
        >
          {label1}
        </Text>
        <Text
          onPress={() => {
            setPageNum(2);
          }}
        >
          {label2}
        </Text>
        <Text
          onPress={() => {
            setPageNum(3);
          }}
        >
          {label3}
        </Text>
      </View>

      <ScrollView
        contentOffset={scrollViewContentOffset}
        pagingEnabled={true}
        horizontal={true}
        backgroundColor={'blue'}
        contentContainerStyle={{ flexGrow: 1 }}
        bounces={false}
        style={{
          height: '80%',
        }}
        onScrollEndDrag={event => {}}
        onScroll={event => {}}
        onMomentumScrollEnd={event => {
          const eventOffset = event.nativeEvent.contentOffset;
          setPageNum(Math.round(eventOffset.x / swidth + 1));
        }}
        scrollEventThrottle={160}
      >
        <View style={[styles.scrollViewContainer, styles.backgroundColorRed]}>
          <Text>Hello World!</Text>
        </View>
        <View style={[styles.scrollViewContainer, styles.backgroundColorGreen]}>
          <Text>Hello World!</Text>
        </View>
        <View style={[styles.scrollViewContainer, styles.backgroundColorPurple]}>
          <Text>Hello World!</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
  },
  backgroundColorRed: {
    backgroundColor: 'red',
  },
  backgroundColorPurple: {
    backgroundColor: 'purple',
  },
  backgroundColorGreen: {
    backgroundColor: 'green',
  },
});
