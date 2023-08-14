import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from '../components/Title';
import colors from '../utils/colors';
import { BtnPrimary } from '../components/BtnPrimary';
import { changePage, reset } from '../features/game/gameSlice';

const GameOverScreen = () => {
  const dispatch = useDispatch();
  const { numberOfGuesses, pickedNumber } = useSelector((state) => state.game);
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imgContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.text}>
        Your phone needed{' '}
        <Text style={styles.highlightedText}>{numberOfGuesses}</Text> rounds to
        guess the number{' '}
        <Text style={styles.highlightedText}>{pickedNumber}</Text>
      </Text>
      <View style={styles.btnContainer}>
        <BtnPrimary
          onPress={() => {
            dispatch(reset());
            dispatch(changePage('startGameScreen'));
          }}
          fontSize={24}
          color={colors.colYellow}
        >
          New Game
        </BtnPrimary>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: colors.colPrimaryDarker,
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: colors.colWhite,
    fontSize: 24,
    textAlign: 'center',
  },
  highlightedText: {
    fontWeight: 'bold',
    color: colors.colPrimary,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: 24,
    width: '70%',
  },
});
