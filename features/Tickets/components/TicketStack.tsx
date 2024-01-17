import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FlingGestureEnable from './FlingGestureEnable';
import Ticket from './Ticket';
import useDateAndTimeStore from '../../Description/store/DateAndTimeStore';
import useBookingStore from '../../Booking/store/BookingStore';

const TICKET_1_POSTER =
  'https://imgs.search.brave.com/2JnWQ0gE1C3gmOCdF2HIrWHbOPxFkptQjxZBWT3xNWw/rs:fit:500:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMC9TY2Fy/bGV0LVdpdGNoLVBo/b3Rvcy5qcGc';
const TICKET_2_POSTER =
  'https://imgs.search.brave.com/XoP4j3QUnL-XRIsKg-CWHj7St6-AoOyr71numR5gs-o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ldy5j/b20vdGhtYi9Yam1r/MTlrOVVPVlY3MVZ5/UmlzMVpUTGVUcU09/LzE1MDB4MC9maWx0/ZXJzOm5vX3Vwc2Nh/bGUoKTptYXhfYnl0/ZXMoMTUwMDAwKTpz/dHJpcF9pY2MoKS9k/b2N0b3ItaXMtaW4t/ZXctMDA4LTliYjRh/ZTc5NDQyOTRhYmFi/YjRjZjZkZTM1MWM4/ZTI0LmpwZw';
const TICKET_3_POSTER =
  'https://imgs.search.brave.com/091FRQeSpV9NyTD0h8XQqrNHxSBsePEI1VLR4CA45_I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzAyLzE0LzQx/LzM2MF9GXzYwMjE0/NDE5MF9rSjhVb1B1/cEVSWUN6RmFMYUVB/cGk5djZlbVJjTk1E/Zi5qcGc';

const TicketStack = () => {
  const card1ZSharedValue = useSharedValue(0);
  const card2ZSharedValue = useSharedValue(1);
  const card3ZSharedValue = useSharedValue(2);
  const [activeTicket, setActiveTicket] = useState(0);
  const { day, time, weekName } = useDateAndTimeStore();
  const selectedSeats = useBookingStore(store => store.selectedSeats);

  const onSwipedLeft = () => {
    const newCard1ZValue = (card1ZSharedValue.value + 1) % 3;
    const newCard2ZValue = (card2ZSharedValue.value + 1) % 3;
    const newCard3ZValue = (card3ZSharedValue.value + 1) % 3;

    card1ZSharedValue.value = newCard1ZValue;
    card2ZSharedValue.value = newCard2ZValue;
    card3ZSharedValue.value = newCard3ZValue;

    if (newCard1ZValue === 0) setActiveTicket(0);
    if (newCard2ZValue === 0) setActiveTicket(1);
    if (newCard3ZValue === 0) setActiveTicket(2);
  };

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        marginTop: 20,
      }}
    >
      <View
        style={{
          height: Dimensions.get('screen').height / 2,
          paddingHorizontal: 10,
          position: 'relative',
        }}
      >
        <FlingGestureEnable swipedLeftHandle={onSwipedLeft}>
          <Ticket
            date={`${weekName},${day} - 2024`}
            time={time}
            seats={selectedSeats.join(', ')}
            imageSrc={TICKET_1_POSTER}
            zValue={card3ZSharedValue}
          />
        </FlingGestureEnable>

        <FlingGestureEnable swipedLeftHandle={onSwipedLeft}>
          <Ticket
            date={`${weekName},${day} - 2024`}
            time={time}
            seats={selectedSeats.join(', ')}
            imageSrc={TICKET_2_POSTER}
            zValue={card2ZSharedValue}
          />
        </FlingGestureEnable>

        <FlingGestureEnable swipedLeftHandle={onSwipedLeft}>
          <Ticket
            date={`${weekName},${day} - 2024`}
            time={time}
            seats={selectedSeats.join(', ')}
            imageSrc={TICKET_3_POSTER}
            zValue={card1ZSharedValue}
          />
        </FlingGestureEnable>
      </View>

      <View style={styles.indicatorContainer}>
        <View
          style={[
            styles.indicatorRounded,
            activeTicket === 0 && styles.activeIndicator,
          ]}
        ></View>
        <View
          style={[
            styles.indicatorRounded,
            activeTicket === 1 && styles.activeIndicator,
          ]}
        ></View>
        <View
          style={[
            styles.indicatorRounded,
            activeTicket === 2 && styles.activeIndicator,
          ]}
        ></View>
      </View>
    </GestureHandlerRootView>
  );
};

export default TicketStack;

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  indicatorRounded: {
    height: 6,
    width: 6,
    backgroundColor: 'gray',
    borderRadius: 100,
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: 'white',
  },
});
