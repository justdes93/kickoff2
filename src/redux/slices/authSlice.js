import { createSlice } from '@reduxjs/toolkit';

/** TYPES */
const initialState = {
  user: null,
  token: null,
};

/** SLICE */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state) {
      state.user = null;
      state.token = null;
    },
  },
});

/** ACTIONS */
export const { setUser, logout } = authSlice.actions;

/** SELECTORS */
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
