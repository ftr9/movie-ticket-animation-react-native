import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  View,
} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Txt from '../../shared/Txt';

import type { SharedValue } from 'react-native-reanimated';

import {
  rotationTransScaleValues,
  WIDTH_75_PERCENT,
  TRANS_ROT_SCALE_CONFIG,
} from '../constants';

const Ticket = ({
  imageSrc,
  zValue,
  date,
  time,
  seats,
}: {
  imageSrc: string;
  zValue: SharedValue<number>;
  date: string;
  time: string;
  seats: string;
}) => {
  const translationSharedValue = useSharedValue(0);
  const rotationSharedValue = useSharedValue(0);
  const scaleSharedValue = useSharedValue(0);
  const zIndexSharedValue = useSharedValue(0);

  const animatedTranslation = useAnimatedStyle(() => {
    zIndexSharedValue.value = withTiming(
      rotationTransScaleValues.zIndex[zValue.value],
      { duration: 100 }
    );

    translationSharedValue.value = withTiming(
      rotationTransScaleValues.translation[zValue.value],
      TRANS_ROT_SCALE_CONFIG
    );

    rotationSharedValue.value = withTiming(
      rotationTransScaleValues.rotation[zValue.value],
      TRANS_ROT_SCALE_CONFIG
    );

    scaleSharedValue.value = withTiming(
      rotationTransScaleValues.scale[zValue.value],
      TRANS_ROT_SCALE_CONFIG
    );

    return {
      transform: [
        { translateX: translationSharedValue.value },
        { rotate: `${rotationSharedValue.value}deg` },
        { scale: scaleSharedValue.value },
      ],
      zIndex: zIndexSharedValue.value,
    };
  }, []);

  return (
    <Animated.View style={[styles.container, animatedTranslation]}>
      <ImageBackground
        source={{
          uri: imageSrc,
        }}
        style={styles.imgStyle}
      >
        <View style={styles.contentDisplay}>
          <View style={styles.dateAndTimeContainer}>
            <Txt
              extraStyle={{
                fontSize: 12,
                color: 'black',
              }}
            >
              Date: {date}
            </Txt>
            <Txt
              extraStyle={{
                fontSize: 12,
                color: 'black',
              }}
            >
              Time: {time}
            </Txt>
          </View>

          <Txt extraStyle={styles.seatsTextStyle}>Seats: {seats}</Txt>
          <Image
            source={{
              uri: 'https://www.barcoderesource.com/images/Code39Barcode.jpg',
            }}
            style={{
              height: 50,
              width: WIDTH_75_PERCENT - 20,
            }}
            resizeMode="cover"
          />
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: Dimensions.get('screen').height / 2,
    width: WIDTH_75_PERCENT,
    borderRadius: 25,
    overflow: 'hidden',
    left: '52%',
    borderWidth: 1.5,
    borderColor: 'white',
  },
  imgStyle: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentDisplay: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.649)',
  },
  dateAndTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seatsTextStyle: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
    marginVertical: 10,
  },
});
