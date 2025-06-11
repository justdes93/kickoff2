import { createSlice } from '@reduxjs/toolkit';

/** TYPES */
const initialState = {
  players: [],
};

/** SLICE */
const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayers(state, action) {
      state.players = action.payload;
    },
    addPlayer(state, action) {
      state.players.push(action.payload);
    },
  },
});

/** ACTIONS */
export const { setPlayers, addPlayer } = playerSlice.actions;

/** SELECTORS */
export const selectPlayers = (state) => state.player.players;

export default playerSlice.reducer;
