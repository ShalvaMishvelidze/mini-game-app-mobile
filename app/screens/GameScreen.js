import { Title } from '../components/Title';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import {
  changePage,
  generateGuess,
  setComputerMin,
  setComputerMax,
  checkComputersGuess,
  youLost,
  youWon,
} from '../features/game/gameSlice';
import { useDispatch, useSelector } from 'react-redux';
import NumberContainer from '../components/NumberContainer';
import { BtnPrimary } from '../components/BtnPrimary';
import colors from '../utils/colors';
import { Ionicons } from '@expo/vector-icons';

const GameScreen = () => {
  const { computerNumber, lost, numberOfGuesses, pickedNumber } = useSelector(
    (state) => state.game
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateGuess(pickedNumber));
  }, []);

  useEffect(() => {
    dispatch(checkComputersGuess());
  }, [computerNumber]);

  useEffect(() => {
    if (lost) {
      dispatch(youLost());
    }
  }, [lost]);

  return (
    <View style={styles.container}>
      <Button
        title="start game screen"
        onPress={() => dispatch(changePage('startGameScreen'))}
      />
      <Button
        title="game over screen"
        onPress={() => dispatch(changePage('gameOverScreen'))}
      />
      <Title>Opponent's Guess</Title>
      <NumberContainer>{computerNumber}</NumberContainer>
      <View style={styles.card}>
        <Text style={styles.cardText}>Higher or lower?</Text>
        <View style={styles.btnContainer}>
          <BtnPrimary
            onPress={() => {
              dispatch(setComputerMax());
              dispatch(generateGuess(computerNumber));
            }}
          >
            <Ionicons name="md-remove" size={24} color={'#fff'} />
          </BtnPrimary>
          <BtnPrimary
            onPress={() => {
              dispatch(setComputerMin());
              dispatch(generateGuess(computerNumber));
            }}
          >
            <Ionicons name="md-add" size={24} color={'#fff'} />
          </BtnPrimary>
        </View>
      </View>
      <View>{/* log rounds */}</View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  card: {
    padding: 16,
    backgroundColor: colors.colPrimaryDarker,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 32,
    padding: 24,
    color: colors.colYellow,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
    marginBottom: 16,
  },
});
