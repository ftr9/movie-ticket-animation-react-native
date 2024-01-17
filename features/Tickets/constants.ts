import { Dimensions } from 'react-native';
import { Easing } from 'react-native-reanimated';

export const WIDTH_75_PERCENT = (55 / 100) * Dimensions.get('screen').width;

export const rotationTransScaleValues = {
  zIndex: [3, 2, 1],
  translation: [
    -WIDTH_75_PERCENT / 2,
    -WIDTH_75_PERCENT / 2 - 40,
    -WIDTH_75_PERCENT / 2 + 40,
  ],
  rotation: [0, -10, 10],
  scale: [1, 0.93, 0.93],
};
export const TRANS_ROT_SCALE_CONFIG = {
  duration: 500,
  easing: Easing.elastic(1.2),
};
