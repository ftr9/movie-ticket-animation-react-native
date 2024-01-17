import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Booking } from '../features/Booking';

const Bookings = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#2E1371',
      }}
    >
      <Booking />
    </SafeAreaView>
  );
};

export default Bookings;

const styles = StyleSheet.create({});
