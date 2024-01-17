import { SEAT_STATUS } from './interface';

export const getSeatColor = (seatStatus: SEAT_STATUS) => {
  if (seatStatus === SEAT_STATUS.AVAILABLE) {
    return 'white';
  }
  if (seatStatus === SEAT_STATUS.RESERVED) {
    return '#B6116B';
  }
  if (seatStatus === SEAT_STATUS.SELECTED) {
    return '#09FBD3';
  }
  return 'black';
};
