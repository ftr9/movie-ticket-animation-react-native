import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Search = () => {
  return (
    <View
      style={{
        position: 'relative',
      }}
    >
      <TextInput
        placeholder="Search"
        selectionColor={'white'}
        placeholderTextColor={'rgba(255,255,255,0.3)'}
        style={styles.inputStyle}
      />
      <Ionicons
        style={styles.textInputIcon}
        name="mic"
        color={'white'}
        size={18}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    color: 'white',
  },
  textInputIcon: {
    position: 'absolute',
    right: 20,
    top: 12,
  },
});
