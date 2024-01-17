import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Seat from './Seat';
import { SEAT_STATUS } from '../interface';
import useBookingStore from '../store/BookingStore';

function getSeatStatus(
  seatNumber: number,
  reservedSeats: number[],
  selectedSeats: number[]
): SEAT_STATUS {
  if (reservedSeats.includes(seatNumber)) {
    return SEAT_STATUS.RESERVED;
  }
  if (selectedSeats.includes(seatNumber)) {
    return SEAT_STATUS.SELECTED;
  }
  return SEAT_STATUS.AVAILABLE;
}

const SeatsRenderer = () => {
  const [reservedSeats, selectSeat, selectedSeats, removeSelectedSeat] =
    useBookingStore(store => [
      store.reservedSeats,
      store.selectSeat,
      store.selectedSeats,
      store.removeSelectedSeat,
    ]);

  const onSeatClickHandle = (seatNumber: number, seatStatus: SEAT_STATUS) => {
    if (seatStatus === SEAT_STATUS.RESERVED) {
      return;
    }
    if (seatStatus === SEAT_STATUS.AVAILABLE) {
      selectSeat(seatNumber);
    }
    if (seatStatus === SEAT_STATUS.SELECTED) {
      removeSelectedSeat(seatNumber);
    }
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View style={[styles.seatRow, { flex: 1 }]}>
          {[1, 2, 3].map(seatNumber => (
            <Seat
              key={seatNumber}
              seatNumber={seatNumber}
              seatStatus={getSeatStatus(
                seatNumber,
                reservedSeats,
                selectedSeats
              )}
              onSeatClick={onSeatClickHandle}
            />
          ))}
        </View>
        <View style={[styles.seatRow, { flex: 1 }]}>
          {[4, 5, 6].map(seatNumber => (
            <Seat
              key={seatNumber}
              seatNumber={seatNumber}
              seatStatus={getSeatStatus(
                seatNumber,
                reservedSeats,
                selectedSeats
              )}
              onSeatClick={onSeatClickHandle}
            />
          ))}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View style={[styles.seatRow, { flex: 1 }]}>
          {[7, 8, 9, 10].map(seatNumber => (
            <Seat
              key={seatNumber}
              seatNumber={seatNumber}
              seatStatus={getSeatStatus(
                seatNumber,
                reservedSeats,
                selectedSeats
              )}
              onSeatClick={onSeatClickHandle}
            />
          ))}
        </View>
        <View style={[styles.seatRow, { flex: 1 }]}>
          {[11, 12, 13, 14].map(seatNumber => (
            <Seat
              key={seatNumber}
              seatNumber={seatNumber}
              seatStatus={getSeatStatus(
                seatNumber,
                reservedSeats,
                selectedSeats
              )}
              onSeatClick={onSeatClickHandle}
            />
          ))}
        </View>
      </View>
      <View style={{ marginTop: 15 }}></View>
      <View style={styles.seatRow}>
        {[15, 16, 17, 18, 19, 20, 21, 22].map(seatNumber => (
          <Seat
            key={seatNumber}
            seatNumber={seatNumber}
            seatStatus={getSeatStatus(seatNumber, reservedSeats, selectedSeats)}
            onSeatClick={onSeatClickHandle}
          />
        ))}
      </View>

      <View style={styles.seatRow}>
        {[23, 24, 25, 26, 27, 28, 29, 30, 31].map(seatNumber => (
          <Seat
            key={seatNumber}
            seatNumber={seatNumber}
            seatStatus={getSeatStatus(seatNumber, reservedSeats, selectedSeats)}
            onSeatClick={onSeatClickHandle}
          />
        ))}
      </View>
      <View style={styles.seatRow}>
        {[32, 33, 34, 35, 36, 37, 38, 39, 40].map(seatNumber => (
          <Seat
            key={seatNumber}
            seatNumber={seatNumber}
            seatStatus={getSeatStatus(seatNumber, reservedSeats, selectedSeats)}
            onSeatClick={onSeatClickHandle}
          />
        ))}
      </View>
      <View style={styles.seatRow}>
        {[41, 42, 43, 44, 45, 46, 47, 48, 49].map(seatNumber => (
          <Seat
            key={seatNumber}
            seatNumber={seatNumber}
            seatStatus={getSeatStatus(seatNumber, reservedSeats, selectedSeats)}
            onSeatClick={onSeatClickHandle}
          />
        ))}
      </View>
    </View>
  );
};

export default SeatsRenderer;

const styles = StyleSheet.create({
  seatRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
