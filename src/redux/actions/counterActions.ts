import { createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk that simulates an asynchronous operation
export const simulateAsyncIncrement = createAsyncThunk(
  'counter/simulateAsyncIncrement',
  async (amount: number) => {
    return new Promise<number>((resolve) =>
      setTimeout(() => resolve(amount), 1000)
    );
  }
);

// Another async thunk for demonstration
export const simulateAsyncDecrement = createAsyncThunk(
  'counter/simulateAsyncDecrement',
  async (amount: number) => {
    return new Promise<number>((resolve) =>
      setTimeout(() => resolve(amount), 1000)
    );
  }
);
