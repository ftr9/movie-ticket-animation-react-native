import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  Directions,
  Gesture,
  GestureDetector,
} from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';

interface IFlingGestureEnableProps {
  children: React.ReactNode;
  swipedLeftHandle: () => void;
}

const SWIPED_LEFT_INDICATOR = 5;

const FlingGestureEnable = ({
  children,
  swipedLeftHandle,
}: IFlingGestureEnableProps) => {
  const flingGesture = Gesture.Fling()
    .direction(Directions.LEFT)
    .onFinalize(e => {
      if (e.state === SWIPED_LEFT_INDICATOR) {
        runOnJS(swipedLeftHandle)();
      }
    });

  return <GestureDetector gesture={flingGesture}>{children}</GestureDetector>;
};

export default FlingGestureEnable;
