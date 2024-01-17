import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { SEAT_STATUS } from '../interface';

import { getSeatColor } from '../utils';

interface ISeatProps {
  seatNumber: number;
  seatStatus: SEAT_STATUS;
  onSeatClick: (seatNumber: number, seatStatus: SEAT_STATUS) => void;
}

const Seat = ({ seatStatus, seatNumber, onSeatClick }: ISeatProps) => {
  const seatColor = getSeatColor(seatStatus);

  return (
    <TouchableOpacity
      onPress={() => {
        onSeatClick(seatNumber, seatStatus);
      }}
      style={{
        marginHorizontal: 4,
      }}
    >
      <Svg width="26" height="19" viewBox="0 0 26 19" fill="none">
        <Path
          d="M0 3.69927C0 2.76079 0.760787 2 1.69927 2H3.39854C4.33702 2 5.0978 2.76079 5.0978 3.69927V12.1956C5.0978 13.1341 5.85859 13.8949 6.79707 13.8949H18.6919C19.6304 13.8949 20.3912 13.1341 20.3912 12.1956V3.69927C20.3912 2.76079 21.152 2 22.0905 2H23.7897C24.7282 2 25.489 2.76079 25.489 3.69927V14.7445C25.489 17.0907 23.587 18.9927 21.2408 18.9927H4.24817C1.90197 18.9927 0 17.0907 0 14.7445V3.69927Z"
          fill={seatColor}
        />
        <Path
          d="M6 2.5489C6 1.14118 7.14118 0 8.5489 0H17.0452C18.453 0 19.5941 1.14118 19.5941 2.5489V11.8949C19.5941 12.3641 19.2137 12.7445 18.7445 12.7445H6.84963C6.38039 12.7445 6 12.3641 6 11.8949V2.5489Z"
          fill={seatColor}
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default Seat;

const styles = StyleSheet.create({});
