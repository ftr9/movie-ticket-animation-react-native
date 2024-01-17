import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../shared/Header';

import SeatsRenderer from './components/SeatsRenderer';

import BuyBtnSheet from './components/BuyBtnSheet';
import SeatStatusNotation from './components/SeatStatusNotation';
import LargeMonitor from './components/LargeMonitor';

const Booking = () => {
  return (
    <View style={styles.container}>
      <Header>
        <Header.LeftContent />
        <Header.Title>Choose Seats</Header.Title>
        <Header.RightContent />
      </Header>
      <LargeMonitor />
      <SeatsRenderer />
      <SeatStatusNotation />
      <BuyBtnSheet />
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
