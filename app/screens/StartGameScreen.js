import {
  StyleSheet,
  View,
  TextInput,
  Text,
  useWindowDimensions,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import { BtnPrimary } from '../components/BtnPrimary';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEnteredNumber,
  changePage,
  reset,
} from '../features/game/gameSlice';
import colors from '../utils/colors';
import { sizes } from '../utils/sizes';

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

  const { height } = useWindowDimensions();

  return (
    <KeyboardAvoidingView
      style={[styles.container, { marginTop: height > 500 ? 100 : 20 }]}
    >
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
    </KeyboardAvoidingView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    padding: sizes.large,
    marginHorizontal: sizes.extraLarge,
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
    fontSize: sizes.extraLarge,
    color: colors.colWhite,
  },
  note: {
    fontSize: sizes.medium,
    opacity: 0.5,
    color: colors.colWhite,
  },
  input: {
    textAlign: 'center',
    height: 50,
    width: 60,
    fontSize: sizes.superLarge,
    borderBottomColor: colors.colYellow,
    borderBottomWidth: 2,
    color: colors.colYellow,
    marginVertical: sizes.small,
    fontWeight: 'bold',
    position: 'relative',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: sizes.large,
    marginTop: sizes.small,
  },
});
