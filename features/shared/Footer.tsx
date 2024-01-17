import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const Footer = () => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: SCREEN_WIDTH / 6,
        width: Dimensions.get('screen').width,
        backgroundColor: 'rgba(19,11,43,0.9)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      }}
    >
      <FooterIconContainer isActive>
        <Ionicons name="home" size={20} color={'white'} />
      </FooterIconContainer>

      <FooterIconContainer isActive={false}>
        <Ionicons name="location" size={20} color={'white'} />
      </FooterIconContainer>

      <FooterIconContainer isActive={false}>
        <Ionicons name="apps" size={20} color={'white'} />
      </FooterIconContainer>

      <FooterIconContainer isActive={false}>
        <Ionicons name="person" size={20} color={'white'} />
      </FooterIconContainer>
    </View>
  );
};

const FooterIconContainer = ({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive: boolean;
}) => {
  return (
    <LinearGradient
      colors={
        isActive ? ['#441F83', '#4E63A9'] : ['transparent', 'transparent']
      }
      start={{ x: 0, y: 0.3 }}
      end={{ x: 1, y: 0.6 }}
      style={[
        {
          width: SCREEN_WIDTH / 6,
          height: SCREEN_WIDTH / 6,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 1000,
        },
        isActive && {
          transform: [{ translateY: -15 }],
          backgroundColor: 'rgba(255,255,255,0.8)',
        },
      ]}
    >
      {children}
    </LinearGradient>
  );
};

export default Footer;

const styles = StyleSheet.create({});
