import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import DateAndTimeDisplay from './DateAndTimeDisplay';
import type { IAvaiableDateAndTime } from '../interface';
import useDateAndTimeStore from '../store/DateAndTimeStore';

interface IAvailableDateAndTimeProps {
  availableDateAndTime: IAvaiableDateAndTime[];
}

const AvailableDateAndTimeRenderer = ({
  availableDateAndTime,
}: IAvailableDateAndTimeProps) => {
  const [dateAndTimeIdx, setDateAndTimeIdx] = useState(-1);

  const setDateAndTime = useDateAndTimeStore(store => store.setDateAndTime);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      {availableDateAndTime.map((dateAndTime, idx) => (
        <DateAndTimeDisplay
          key={idx}
          time={dateAndTime.time}
          day={dateAndTime.day}
          weekName={dateAndTime.weekName}
          isMiddle={idx === 2}
          translationYPoint={dateAndTime.translationYPoint}
          isSelected={dateAndTimeIdx === idx}
          onSelect={() => {
            setDateAndTimeIdx(idx);
            setDateAndTime(
              dateAndTime.day,
              dateAndTime.weekName,
              dateAndTime.time
            );
          }}
        />
      ))}
    </View>
  );
};

export default AvailableDateAndTimeRenderer;

const styles = StyleSheet.create({});
