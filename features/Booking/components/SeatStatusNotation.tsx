import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { getSeatColor } from '../utils';
import { SEAT_STATUS } from '../interface';
import Txt from '../../shared/Txt';

const SeatStatusNotation = () => {
  return (
    <View style={styles.seatStatusContainer}>
      <View style={styles.seatStatusContent}>
        <View
          style={[
            styles.seatStausColorIndicator,
            {
              backgroundColor: getSeatColor(SEAT_STATUS.AVAILABLE),
            },
          ]}
        ></View>
        <Txt>{SEAT_STATUS.AVAILABLE}</Txt>
      </View>
      <View style={styles.seatStatusContent}>
        <View
          style={[
            styles.seatStausColorIndicator,
            {
              backgroundColor: getSeatColor(SEAT_STATUS.RESERVED),
            },
          ]}
        ></View>
        <Txt>{SEAT_STATUS.RESERVED}</Txt>
      </View>
      <View style={styles.seatStatusContent}>
        <View
          style={[
            {
              backgroundColor: getSeatColor(SEAT_STATUS.SELECTED),
            },
            styles.seatStausColorIndicator,
          ]}
        ></View>
        <Txt>{SEAT_STATUS.SELECTED}</Txt>
      </View>
    </View>
  );
};

export default SeatStatusNotation;

const styles = StyleSheet.create({
  seatStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30,
  },
  seatStatusContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seatStausColorIndicator: {
    height: 10,
    width: 10,
    borderRadius: 100,
    marginRight: 10,
  },
});
