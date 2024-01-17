import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Txt from '../../shared/Txt';

const Button = ({ onClick }: { onClick: () => void }) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <LinearGradient
        colors={['#B6116B', '#3B1578']}
        style={styles.gradientContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Txt extraStyle={styles.btnTxtStyle}>Reservation</Txt>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnTxtStyle: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
  },
  gradientContainer: {
    padding: 15,
    borderRadius: 10,
  },
});
