import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Txt from '../../shared/Txt';
import { LinearGradient } from 'expo-linear-gradient';

interface IDateAndTimeDisplay {
  time: string;
  day: number;
  weekName: string;
  isMiddle: boolean;
  translationYPoint: number;
  isSelected: boolean;
  onSelect: () => void;
}

const DateAndTimeDisplay = ({
  time,
  day,
  weekName,
  isMiddle,
  isSelected,
  translationYPoint,
  onSelect,
}: IDateAndTimeDisplay) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={{
        flex: 1,
        marginHorizontal: 6,
        transform: [
          { scale: isMiddle ? 1.18 : 1 },
          { translateY: translationYPoint },
        ],
      }}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={isSelected ? ['#B6116B', '#3D1581'] : ['#2E1371', '#21232F']}
        style={styles.dateContainer}
      >
        <Txt>{weekName}</Txt>
        <Txt extraStyle={{ fontWeight: '800', fontSize: 16, marginTop: 5 }}>
          {day.toString()}
        </Txt>
      </LinearGradient>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={isSelected ? ['#B6116B', '#3D1581'] : ['#2E1371', '#21232F']}
        style={styles.timeContainer}
      >
        <Txt>{time}</Txt>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default DateAndTimeDisplay;

const styles = StyleSheet.create({
  dateContainer: {
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  timeContainer: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 15,
  },
});
