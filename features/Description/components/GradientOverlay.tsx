import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
interface IGradientOverlayProps {
  children: React.ReactNode;
}

const GradientOverlay = ({ children }: IGradientOverlayProps) => {
  return (
    <LinearGradient
      colors={['transparent', '#130b2be1', '#130b2bf8', '#130B2B']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{
        flex: 1,
        paddingHorizontal: 5,
      }}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientOverlay;

const styles = StyleSheet.create({});
