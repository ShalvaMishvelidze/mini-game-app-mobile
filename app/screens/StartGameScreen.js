import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import BtnPrimary from '../components/BtnPrimary';

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <Text>StartGameScreen</Text>
      <TextInput style={styles.input} />
      <BtnPrimary onPress={() => console.log('hello')} text={'reset'} />
      <BtnPrimary onPress={() => console.log('hi')} text={'confirm'} />
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {},
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
  },
});
