import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import type { TextStyle, StyleProp } from 'react-native';

interface ITxtProps {
  children: string | string[];
  extraStyle?: StyleProp<TextStyle>;
}

const Txt = ({ children, extraStyle }: ITxtProps) => {
  return (
    <Text
      style={[
        {
          color: 'white',
        },
        extraStyle,
      ]}
    >
      {children}
    </Text>
  );
};

export default Txt;

const styles = StyleSheet.create({});
