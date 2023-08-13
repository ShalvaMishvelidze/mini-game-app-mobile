import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  screen: 'startGameScreen',
  pickedNumber: '',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changePage: (state, { payload }) => {
      state.screen = payload;
    },
    setEnteredNumber: (state, { payload }) => {
      const regex = /^[^A-Za-z\s,.\\-]*$/;
      state.pickedNumber =
        parseInt(payload) === 0 || !regex.test(payload)
          ? state.pickedNumber
          : payload;
    },
    resetEnteredNumber: (state) => {
      state.pickedNumber = '';
    },
  },
});

export const { changePage, setEnteredNumber, resetEnteredNumber } =
  gameSlice.actions;

export default gameSlice.reducer;
