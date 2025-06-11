import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import clubReducer from '../slices/clubSlice';
import playerReducer from '../slices/playerSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    club: clubReducer,
    player: playerReducer,
  },
});
