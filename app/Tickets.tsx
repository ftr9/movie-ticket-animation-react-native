import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tickets } from '../features/Tickets';
import { LinearGradient } from 'expo-linear-gradient';
const TicketsPage = () => {
  return (
    <LinearGradient
      colors={['#2E1371', '#130B2B']}
      style={{
        flex: 1,
      }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Tickets />
    </LinearGradient>
  );
};

export default TicketsPage;

const styles = StyleSheet.create({});
