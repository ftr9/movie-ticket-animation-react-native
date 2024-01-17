import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Txt from '../../shared/Txt';
import { Ionicons } from '@expo/vector-icons';
import useBookingStore from '../store/BookingStore';
import Animated, { SlideInDown } from 'react-native-reanimated';
import useDateAndTimeStore from '../../Description/store/DateAndTimeStore';
import { router } from 'expo-router';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const BuyBtnSheet = () => {
  const [selectedSeats, totalPrice] = useBookingStore(store => [
    store.selectedSeats,
    store.totalPrice,
  ]);

  const [selectedDay, selectedTime, selectedWeek] = useDateAndTimeStore(
    store => [store.day, store.time, store.weekName]
  );

  const onBuyHandle = () => {
    router.push('/Tickets');
  };

  if (selectedSeats.length === 0) {
    return;
  }

  return (
    <AnimatedLinearGradient
      entering={SlideInDown.duration(500)}
      colors={['#FE53BB', '#2E1371']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flex: 1,
          paddingLeft: 10,
        }}
      >
        <View style={styles.infoDisplay}>
          <Ionicons name="calendar" size={18} color={'white'} />
          <Txt extraStyle={{ marginLeft: 10 }}>
            Jan {selectedDay.toString()} , {selectedWeek} -
            {new Date().getFullYear().toString()}
          </Txt>
          <Txt extraStyle={{ marginHorizontal: 10 }}>.</Txt>
          <Txt>{selectedTime}</Txt>
        </View>
        <View style={styles.infoDisplay}>
          <Ionicons name="browsers" size={18} color={'white'} />
          <Txt extraStyle={{ marginLeft: 10 }}>Seat Numbers: </Txt>
          <Txt extraStyle={{ flex: 1, flexWrap: 'wrap' }}>
            {selectedSeats.join(', ').toString()}
          </Txt>
        </View>
        <View style={styles.infoDisplay}>
          <Ionicons name="cart" size={18} color={'white'} />
          <Txt extraStyle={{ marginLeft: 10 }}>Total: ${`${totalPrice}`}</Txt>
        </View>
      </View>
      <View style={styles.buyBtnContainer}>
        <TouchableOpacity onPress={onBuyHandle}>
          <LinearGradient colors={['#441F83', '#4E63A9']} style={styles.buyBtn}>
            <Txt>Buy</Txt>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </AnimatedLinearGradient>
  );
};

export default BuyBtnSheet;

const styles = StyleSheet.create({
  infoDisplay: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  buyBtnContainer: {
    height: 75,
    width: 80,
    backgroundColor: '#2e13716c',
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyBtn: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: 'rgba(1,1,1,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
