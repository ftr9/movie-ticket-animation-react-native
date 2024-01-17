import { ImageBackground, StyleSheet, View } from 'react-native';
import React from 'react';
import Txt from '../shared/Txt';
import Animated, { SlideInDown, SlideInLeft } from 'react-native-reanimated';
import Button from './components/Button';
import GradientOverlay from './components/GradientOverlay';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../shared/Header';
import TextDescription from './components/TextDescription';
import AvailableDateAndTimeRenderer from './components/AvailableDateAndTimeRenderer';
import { availableDateAndtimes } from './constant';

import useDateAndTimeStore from './store/DateAndTimeStore';
import { router } from 'expo-router';

const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);

const DummyBtn = () => {
  return (
    <View style={{ padding: 15, marginTop: 20, marginBottom: 10 }}>
      <Txt
        extraStyle={{ fontWeight: '500', fontSize: 16, color: 'transparent' }}
      >
        Dummy
      </Txt>
    </View>
  );
};

const Description = () => {
  const isDateAndTimeSelected = useDateAndTimeStore(state => state.isSelected);

  const reservationClickHandle = () => {
    router.push('/Booking');
  };

  return (
    <AnimatedImageBackground
      entering={SlideInLeft}
      style={{
        flex: 1,
      }}
      source={{
        uri: 'https://imgs.search.brave.com/B4qUcLeU3FxOat_HfqSAAreVq1mULiLMibOPcT_1NOM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGhlZGlyZWN0/LmNvbS9tZWRpYS9w/aG90b3MvRlBuNVh3/TVZnQUU4djJ4Lmpw/Zw',
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <GradientOverlay>
          {/**TOP Part */}
          <View style={styles.contentContainer}>
            <Header>
              <Header.LeftContent />
              <Header.RightContent />
            </Header>
            <TextDescription />
          </View>
          {/**Bottom PART */}
          <View style={styles.contentContainer}>
            {/**TOP PART */}
            <View style={styles.contentContainer}>
              <Txt
                extraStyle={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: '600',
                }}
              >
                Select Date and Time
              </Txt>
              <AvailableDateAndTimeRenderer
                availableDateAndTime={availableDateAndtimes}
              />
            </View>
            {/**Bottom PART */}
            {isDateAndTimeSelected ? (
              <Animated.View
                entering={SlideInDown.springify().mass(0.4)}
                style={{
                  marginTop: 20,
                  marginBottom: 10,
                }}
              >
                <Button onClick={reservationClickHandle} />
              </Animated.View>
            ) : (
              <DummyBtn />
            )}
          </View>
        </GradientOverlay>
      </SafeAreaView>
    </AnimatedImageBackground>
  );
};

export default Description;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
