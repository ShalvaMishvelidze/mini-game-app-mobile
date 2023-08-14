import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Title } from '../components/Title';
import colors from '../utils/colors';
import { BtnPrimary } from '../components/BtnPrimary';
import { changePage, reset } from '../features/game/gameSlice';
import { sizes } from '../utils/sizes';

const { width } = Dimensions.get('window');

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
          fontSize={sizes.extraLarge}
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
    padding: sizes.extraLarge,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    borderRadius: 150,
    width: width < 320 ? 180 : 300,
    height: width < 320 ? 180 : 300,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: colors.colPrimaryDarker,
    margin: sizes.superLarge,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: colors.colWhite,
    fontSize: sizes.extraLarge,
    textAlign: 'center',
  },
  highlightedText: {
    fontWeight: 'bold',
    color: colors.colPrimary,
  },
  btnContainer: {
    flexDirection: 'row',
    marginTop: sizes.extraLarge,
    width: '70%',
  },
});
