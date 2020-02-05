import React, { useState, useEffect } from 'react';
import { SearchBar, Overlay, CheckBox } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimesCircle } from '@fortawesome/pro-light-svg-icons';
import { Platform, Switch, View, Text } from 'react-native';
import { Body } from '../ui/Body';
import { Header } from '../ui/Header';
import { FlexRow, Header2, SwitchLabel, AlignRight } from '../ui/Helpers';
import { CardBase, CardBodyWrapper, CardHeaderWrapper, CardTitle } from '../ui/Card';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [firstYear, setFirstYear] = useState(false);
  const [international, setInternational] = useState(false);
  const [graduate, setGraduate] = useState(false);
  const [campus, setCampus] = useState('corvallis');

  useEffect(() => {
    setSearchTerm(searchTerm);
  }, [searchTerm]);

  type IOS = 'default' | 'ios' | 'android';

  let os: IOS = 'default';

  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    os = Platform.OS;
  }

  let thumbColor = 'inherit';
  if (Platform.OS === 'android') {
    thumbColor = '#d73f09';
  }

  const trackColorStyles = {
    false: null,
    true: '#d73f09',
  };

  const checkBoxContainer = {
    borderWidth: 0,
    backgroundColor: 'transparent',
    padding: 0,
  };

  return (
    <Body>
      <Header pageTitle="Resources" />
      <SearchBar
        placeholder="Search Bar, IOS/Android..."
        value={searchTerm}
        platform={os}
        onChangeText={setSearchTerm}
      />
      <Header2>Affiliations (switch sample)</Header2>
      <FlexRow>
        <Switch
          value={firstYear}
          thumbColor={firstYear ? thumbColor : '#fff'}
          trackColor={trackColorStyles}
          onValueChange={setFirstYear}
        />
        <SwitchLabel>First Year Student</SwitchLabel>
      </FlexRow>
      <FlexRow>
        <Switch
          thumbColor={international ? thumbColor : '#fff'}
          value={international}
          trackColor={trackColorStyles}
          onValueChange={setInternational}
        />
        <SwitchLabel>International Student</SwitchLabel>
      </FlexRow>
      <FlexRow>
        <Switch
          thumbColor={graduate ? thumbColor : '#fff'}
          value={graduate}
          trackColor={trackColorStyles}
          onValueChange={setGraduate}
        />
        <SwitchLabel>Graduate Student</SwitchLabel>
      </FlexRow>

      <CardBase>
        <ScheduleCard />
      </CardBase>

      <CardBase>
        <CardHeaderWrapper>
          <CardTitle>Campus (radio buttons)</CardTitle>
        </CardHeaderWrapper>
        <CardBodyWrapper expanded>
          <CheckBox
            title="Corvallis (default)"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="#d73f09"
            checked={campus === 'corvallis'}
            containerStyle={checkBoxContainer}
            onPress={() => setCampus('corvallis')}
          />

          <CheckBox
            title="Bend"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="#d73f09"
            checked={campus === 'bend'}
            containerStyle={checkBoxContainer}
            onPress={() => setCampus('bend')}
          />

          <CheckBox
            title="Ecampus"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor="#d73f09"
            checked={campus === 'ecampus'}
            containerStyle={checkBoxContainer}
            onPress={() => setCampus('ecampus')}
          />
        </CardBodyWrapper>
      </CardBase>

      <CardBase>
        <CardBodyWrapper expanded>
          <OverlaySample />
        </CardBodyWrapper>
      </CardBase>
    </Body>
  );
};

const FirstRoute = () => (
  <CardBodyWrapper expanded>
    <Text>What is this</Text>
    <Text>Another item</Text>
    <Text>Cpurses</Text>
    <Text>Events</Text>
  </CardBodyWrapper>
);

const SecondRoute = () => (
  <CardBodyWrapper expanded>
    <Text>More content</Text>
    <Text>What is this</Text>
    <Text>Another item</Text>
    <Text>Cpurses</Text>
    <Text>Events</Text>
    <Text>What is this</Text>
    <Text>Another item</Text>
    <Text>Cpurses</Text>
    <Text>Events</Text>
  </CardBodyWrapper>
);

// Const initialLayout = { width: Dimensions.get('window').width };

const ScheduleCard = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'MON 9' },
    { key: 'second', title: 'TUE 10' },
    { key: 'third', title: 'WED 11' },
    { key: 'fourth', title: 'THU 12' },
    { key: 'fifth', title: 'FRI 13' },
  ]);

  /* eslint-disable new-cap */
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: SecondRoute,
    fourth: SecondRoute,
    fifth: SecondRoute,
  });

  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#d73f09' }}
        activeColor="#d73f09"
        inactiveColor="#333"
        style={{ backgroundColor: 'transparent' }}
        renderLabel={({ route, focused, color }) => {
          let [day, ...num] = route.title.split(' ');
          return (
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 12, color: focused ? '#d73f09' : '#333' }}>{day}</Text>
              <Text
                style={{
                  fontSize: 24,
                  color: focused ? '#d73f09' : '#333',
                }}
              >
                {num}
              </Text>
            </View>
          );
        }}
      />
    );
  };

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
    />
  );
};

const OverlaySample = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Text>Open Overlay</Text>
      </TouchableOpacity>
      <Overlay
        isVisible={visible}
        windowBackgroundColor="rgba(0, 0, 0, .5)"
        overlayBackgroundColor="#fff"
        width="90%"
        height="80%"
        onBackdropPress={() => setVisible(!visible)}
      >
        <View>
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <FlexRow>
              <Header2>Overlay Header</Header2>
              <AlignRight>
                <FontAwesomeIcon icon={faTimesCircle} size={24} color="#666" />
              </AlignRight>
            </FlexRow>
          </TouchableOpacity>
          <Text>Hello from Overlay!</Text>
        </View>
      </Overlay>
    </View>
  );
};

export { Resources };
