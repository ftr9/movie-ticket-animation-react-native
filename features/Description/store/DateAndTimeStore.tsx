import { create } from 'zustand';

interface IUseDateAndTimeStore {
  day: number;
  weekName: string;
  time: string;
  isSelected: boolean;
  setDateAndTime: (day: number, weekName: string, time: string) => void;
  resetDateAndTime: () => void;
}

const useDateAndTimeStore = create<IUseDateAndTimeStore>(set => {
  return {
    day: 0,
    weekName: '',
    time: '',
    isSelected: false,
    setDateAndTime: (day: number, weekName: string, time: string) => {
      set(prevState => {
        const newState = { ...prevState };

        newState.day = day;
        newState.weekName = weekName;
        newState.time = time;
        newState.isSelected = true;

        return newState;
      });
    },
    resetDateAndTime: () => {
      set(prevState => {
        const newState = { ...prevState };
        newState.isSelected = false;
        return newState;
      });
    },
  };
});

export default useDateAndTimeStore;
