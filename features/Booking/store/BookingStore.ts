import { create } from 'zustand';

const PRICE_PER_SEAT = 30;

interface IUseBoookingStore {
  reservedSeats: number[];
  pricePerSeat: number;
  totalPrice: number;
  selectedSeats: number[];
  selectSeat: (seatNumber: number) => void;
  removeSelectedSeat: (selectedSeatNumber: number) => void;
  resetSeatsAndTotalPrice: () => void;
}

const useBookingStore = create<IUseBoookingStore>(set => {
  return {
    reservedSeats: [
      1, 2, 4, 5, 6, 7, 10, 11, 12, 15, 16, 17, 20, 21, 25, 26, 27, 27, 28, 29,
      34, 35, 45, 48,
    ],
    selectedSeats: [],
    pricePerSeat: PRICE_PER_SEAT,
    totalPrice: 0,

    resetSeatsAndTotalPrice: () => {
      set(prevState => {
        const newState = { ...prevState };

        newState.selectedSeats = [];
        newState.totalPrice = 0;
        return newState;
      });
    },

    selectSeat: (seatNumber: number) => {
      set(prevState => {
        const newState = { ...prevState };
        newState.selectedSeats.push(seatNumber);
        newState.totalPrice =
          newState.pricePerSeat * newState.selectedSeats.length;
        return newState;
      });
    },
    removeSelectedSeat: (selectedSeatNumber: number) => {
      set(prevState => {
        const newState = { ...prevState };
        newState.selectedSeats = newState.selectedSeats.filter(
          seatNum => seatNum !== selectedSeatNumber
        );
        return newState;
      });
    },
  };
});

export default useBookingStore;
