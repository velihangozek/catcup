import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const Profiletext = ({placeholder, onChangeText}) => {
  return (
    <View style={styles.profiletextWrapper}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.profiletext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profiletextWrapper: {
    borderWidth: 1,
    borderColor: '#CFD8DC',
    height: 40,
    margin: 10,
  },
  textArea: {
    height: 40,
    color: '#7B8D93',
    fontSize: 18,
  },
});

export {Profiletext};
