import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux'; // Import combined reducers

export const store = configureStore({
  reducer: rootReducer,
  // Optionally, add Thunk middleware if you need more customization
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
