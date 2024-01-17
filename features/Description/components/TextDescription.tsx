import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import Txt from '../../shared/Txt';

const DescriptionText =
  ' Dr. Stephen Vincent Strange is a character appearing in American comic books published by Marvel Comics. Created by Steve Ditko, the character first appeared in Strange Tales.The character starts as an intelligent and egotistically arrogant neurosurgeon who is injured in a car accident. Because his hands had severe nerve damage from the accident, he was told that current medical therapy and rehabilitation would not be enough to enable him to practice again as a surgeon. Unable to accept this prognosis, he travels the world searching for alternative ways of healing, which leads him to the Ancient One, the Sorcerer Supreme.';

const TextDescription = () => {
  const [isReadMoreClicked, setReadMoreClick] = useState(false);

  const readMoreClickHandle = () => {
    setReadMoreClick(true);
  };

  const readLessClickHandle = () => {
    setReadMoreClick(false);
  };

  return (
    <View style={styles.container}>
      <Txt
        extraStyle={{
          textAlign: 'center',
          fontSize: 18,
          fontWeight: '800',
        }}
      >
        Doctor Strange
      </Txt>
      <Txt
        extraStyle={{
          textAlign: 'center',
          fontSize: 16,
          fontWeight: '400',
        }}
      >
        in the multiverse madness
      </Txt>
      <Txt extraStyle={{ textAlign: 'center', marginVertical: 10 }}>
        {DescriptionText.length > 200 && !isReadMoreClicked
          ? DescriptionText.slice(0, 200) + '....'
          : DescriptionText}
      </Txt>
      {DescriptionText.length > 200 && !isReadMoreClicked ? (
        <TouchableOpacity
          style={{
            marginBottom: 20,
          }}
          onPress={readMoreClickHandle}
        >
          <Txt extraStyle={{ textAlign: 'center' }}>Read more</Txt>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            marginBottom: 20,
          }}
          onPress={readLessClickHandle}
        >
          <Txt extraStyle={{ textAlign: 'center' }}>Read Less</Txt>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextDescription;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
