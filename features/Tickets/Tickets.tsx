import { StyleSheet, View, Button, Dimensions } from 'react-native';
import TicketStack from './components/TicketStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import Txt from '../shared/Txt';
import useBookingStore from '../Booking/store/BookingStore';
import { router } from 'expo-router';
import useDateAndTimeStore from '../Description/store/DateAndTimeStore';

const Tickets = () => {
  const resetSeatsAndTotalPrice = useBookingStore(
    store => store.resetSeatsAndTotalPrice
  );
  const resetDateAndTime = useDateAndTimeStore(store => store.resetDateAndTime);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Header>
        <Header.LeftContent
          onClick={() => {
            resetSeatsAndTotalPrice();
            resetDateAndTime();
            router.replace('/');
          }}
        />
        <Header.Title>Mobile Ticket</Header.Title>
        <Header.RightContent />
      </Header>
      <Txt extraStyle={styles.notifyTxt}>
        Once you buy a movie ticket simply scan the barcode to access your movie
      </Txt>
      <TicketStack />
      <Footer />
    </SafeAreaView>
  );
};

export default Tickets;

const styles = StyleSheet.create({
  notifyTxt: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 20,
  },
});
