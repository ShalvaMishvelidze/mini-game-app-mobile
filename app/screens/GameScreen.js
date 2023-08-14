import { Title } from '../components/Title';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, { useEffect } from 'react';
import {
  generateGuess,
  setComputerMin,
  setComputerMax,
  checkComputersGuess,
  youLost,
} from '../features/game/gameSlice';
import { useDispatch, useSelector } from 'react-redux';
import NumberContainer from '../components/NumberContainer';
import { BtnPrimary } from '../components/BtnPrimary';
import colors from '../utils/colors';
import { Ionicons } from '@expo/vector-icons';
import { sizes } from '../utils/sizes';

const GameScreen = () => {
  const { computerNumber, lost, guessedNumbers, pickedNumber } = useSelector(
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

  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      {width < 500 && <NumberContainer>{computerNumber}</NumberContainer>}
      <View
        style={[
          styles.card,
          width > 500 && {
            backgroundColor: 'transparent',
            shadowColor: 'transparent',
          },
        ]}
      >
        <Text style={styles.cardText}>Higher or lower?</Text>
        <View style={styles.btnContainer}>
          <BtnPrimary
            onPress={() => {
              dispatch(setComputerMax());
              dispatch(generateGuess(computerNumber));
            }}
            height={40}
          >
            <Ionicons name="md-remove" size={sizes.extraLarge} color={'#fff'} />
          </BtnPrimary>
          {width > 500 && <NumberContainer>{computerNumber}</NumberContainer>}
          <BtnPrimary
            onPress={() => {
              dispatch(setComputerMin());
              dispatch(generateGuess(computerNumber));
            }}
            height={40}
          >
            <Ionicons name="md-add" size={sizes.extraLarge} color={'#fff'} />
          </BtnPrimary>
        </View>
      </View>
      <View style={styles.listContainer}>
        {guessedNumbers.map((item, index) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <Text style={styles.item}>
                Round {guessedNumbers.length - index}: {item}
              </Text>
            </View>
          );
        })}
        {/* <FlatList
          contentContainerStyle={styles.list}
          data={guessedNumbers}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.itemContainer}>
                <Text style={styles.item}>
                  Round {guessedNumbers.length - index}: {item}
                </Text>
              </View>
            );
          }}
          keyExtractor={(_, index) => index}
        /> */}
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.extraLarge,
    alignItems: 'center',
  },
  card: {
    padding: sizes.large,
    backgroundColor: colors.colPrimaryDarker,
    borderRadius: sizes.small,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center',
  },
  cardText: {
    fontSize: sizes.superLarge,
    padding: sizes.extraLarge,
    color: colors.colYellow,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: sizes.large,
    marginTop: sizes.small,
    marginBottom: sizes.large,
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
  },
  list: {
    paddingTop: sizes.extraLarge,
  },
  itemContainer: {
    margin: 4,
    backgroundColor: colors.colYellow,
    padding: 8,
    borderRadius: sizes.medium,
    minWidth: '75%',
    borderWidth: 2,
    borderColor: colors.colPrimaryDark,
    alignSelf: 'center',
  },
  item: {
    color: colors.colWhite,
    fontSize: sizes.extraLarge,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
