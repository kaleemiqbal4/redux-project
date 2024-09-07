import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { simulateAsyncIncrement, simulateAsyncDecrement } from '../actions/counterActions';

interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(simulateAsyncIncrement.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(simulateAsyncIncrement.fulfilled, (state, action: PayloadAction<number>) => {
        state.status = 'succeeded';
        state.value += action.payload;
      })
      .addCase(simulateAsyncIncrement.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(simulateAsyncDecrement.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(simulateAsyncDecrement.fulfilled, (state, action: PayloadAction<number>) => {
        state.status = 'succeeded';
        state.value -= action.payload;
      })
      .addCase(simulateAsyncDecrement.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
