import { StyleSheet, View, TextInput, Text } from 'react-native';
import React from 'react';
import { BtnPrimary } from '../components/BtnPrimary';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEnteredNumber,
  changePage,
  reset,
} from '../features/game/gameSlice';
import colors from '../utils/colors';

const StartGameScreen = () => {
  const { pickedNumber } = useSelector((state) => state.game);
  const dispatch = useDispatch();

  const handleInput = (value) => {
    dispatch(setEnteredNumber(value));
  };

  const handleSubmit = () => {
    if (pickedNumber) {
      dispatch(changePage('gameScreen'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Please enter a number</Text>
      <Text style={styles.note}>
        *note you can only enter values between 1 and 99
      </Text>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={handleInput}
        value={pickedNumber}
      />
      <View style={styles.btnContainer}>
        <BtnPrimary onPress={() => dispatch(reset())}>reset</BtnPrimary>
        <BtnPrimary onPress={handleSubmit}>confirm</BtnPrimary>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: colors.colPrimaryDarker,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    color: colors.colWhite,
  },
  note: {
    fontSize: 12,
    opacity: 0.5,
    color: colors.colWhite,
  },
  input: {
    textAlign: 'center',
    height: 50,
    width: 60,
    fontSize: 32,
    borderBottomColor: colors.colYellow,
    borderBottomWidth: 2,
    color: colors.colYellow,
    marginVertical: 8,
    fontWeight: 'bold',
    position: 'relative',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
  },
});
