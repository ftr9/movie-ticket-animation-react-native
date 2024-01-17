import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import RoundedIconBtn from './RoundedIconBtn';
import { Ionicons } from '@expo/vector-icons';
import Txt from './Txt';

const Header = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

const LeftContent = ({ onClick }: { onClick?: () => void }) => {
  return (
    <RoundedIconBtn onPress={onClick}>
      <Ionicons name="chevron-back" />
    </RoundedIconBtn>
  );
};
Header.LeftContent = LeftContent;

const Title = ({ children }: { children: string }) => {
  return (
    <Txt
      extraStyle={{
        fontSize: 18,
        fontWeight: '800',
      }}
    >
      {children}
    </Txt>
  );
};
Header.Title = Title;

const RightContent = () => {
  return (
    <RoundedIconBtn onPress={() => console.log('hello')}>
      <Ionicons name="calendar" />
    </RoundedIconBtn>
  );
};
Header.RightContent = RightContent;

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
