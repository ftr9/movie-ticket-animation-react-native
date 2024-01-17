import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const RoundedIconBtn = ({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 45,
        width: 45,
        backgroundColor: 'rgba(205, 205, 205, 0.816)',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default RoundedIconBtn;

const styles = StyleSheet.create({});
