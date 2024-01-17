import { StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const LargeMonitor = () => {
  const deviceWidth = Dimensions.get('window').width - 20;
  const svgWidth = deviceWidth - 20;
  const curveHeight = 100 - 20;

  return (
    <Svg
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 30,
      }}
      height={curveHeight}
      width={svgWidth}
    >
      <Path
        d={`M 0 ${curveHeight / 2} Q ${svgWidth / 2} 0 ${svgWidth} ${
          curveHeight / 2
        }`}
        fill="none"
        stroke="#FF53C0"
        strokeWidth={3}
        strokeLinecap="butt"
      />
    </Svg>
  );
};

export default LargeMonitor;

const styles = StyleSheet.create({});
