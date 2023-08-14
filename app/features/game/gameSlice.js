import { createSlice } from '@reduxjs/toolkit';
import { Alert } from 'react-native';

const initialState = {
  screen: 'startGameScreen',
  pickedNumber: '',
  computerNumber: 50,
  computerMin: 1,
  computerMax: 100,
  lost: false,
  numberOfGuesses: 0,
  won: false,
  guessedNumbers: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changePage: (state, { payload }) => {
      state.screen = payload; // possible pages: startGameScreen, gameOverScreen, gameScreen
    },
    setEnteredNumber: (state, { payload }) => {
      const regex = /^[^A-Za-z\s,.\\-]*$/;
      state.pickedNumber =
        parseInt(payload) === 0 || !regex.test(payload)
          ? state.pickedNumber
          : payload;
    },
    reset: (state) => {
      state.pickedNumber = '';
      state.computerMax = 100;
      state.computerMin = 1;
      state.computerNumber = 50;
      state.numberOfGuesses = 0;
      state.lost = false;
      state.won = false;
      state.guessedNumbers = [];
    },
    generateGuess: (state, { payload }) => {
      const randomNum =
        Math.floor(Math.random() * (state.computerMax - state.computerMin)) +
        state.computerMin;
      if (randomNum == payload) {
        state.computerNumber =
          Math.floor(Math.random() * (state.computerMax - state.computerMin)) +
          state.computerMin;
      } else {
        state.computerNumber = randomNum;
      }
      state.numberOfGuesses++;
      state.lost = false;
      state.guessedNumbers.unshift(state.computerNumber);
    },
    setComputerMin: (state) => {
      if (state.computerNumber > state.pickedNumber) {
        Alert.alert('Warning!!!', 'Liar,Liar Pants on Fire', [
          { text: 'Sowwy!', style: 'cancel' },
        ]);
        state.computerMax = state.computerNumber;
      } else {
        state.computerMin = state.computerNumber + 1;
      }
    },
    setComputerMax: (state) => {
      if (state.computerNumber < state.pickedNumber) {
        Alert.alert('Warning!!!', 'Liar,Liar Pants on Fire', [
          { text: 'Sowwy!', style: 'cancel' },
        ]);
        state.computerMin = state.computerNumber + 1;
      } else {
        state.computerMax = state.computerNumber;
      }
    },
    checkComputersGuess: (state) => {
      if (state.computerNumber == state.pickedNumber) {
        state.lost = true;
      }
    },
    youLost: (state) => {
      state.screen = 'gameOverScreen';
    },
  },
});

export const {
  changePage,
  setEnteredNumber,
  reset,
  generateGuess,
  setComputerMax,
  setComputerMin,
  checkComputersGuess,
  youLost,
} = gameSlice.actions;

export default gameSlice.reducer;
