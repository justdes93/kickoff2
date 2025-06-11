import { createSlice } from '@reduxjs/toolkit';

/** TYPES */
const initialState = {
  club: null,
  balance: 0,
};

/** SLICE */
const clubSlice = createSlice({
  name: 'club',
  initialState,
  reducers: {
    setClub(state, action) {
      state.club = action.payload;
    },
    updateBalance(state, action) {
      state.balance = action.payload;
    },
  },
});

/** ACTIONS */
export const { setClub, updateBalance } = clubSlice.actions;

/** SELECTORS */
export const selectClub = (state) => state.club.club;
export const selectBalance = (state) => state.club.balance;

export default clubSlice.reducer;
