import {configureStore} from '@reduxjs/toolkit';
import harmonyReducer from './HarmonySlice';

const store = configureStore({
  reducer: {
        info: harmonyReducer,
    }})

export default store;