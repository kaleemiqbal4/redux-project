import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { increment, decrement } from "../redux/reducers/counterReducer";
import {
  simulateAsyncIncrement,
  simulateAsyncDecrement,
} from "../redux/actions/counterActions";

const CounterPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { value, status } = useSelector((state: RootState) => state.counter);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  const [decrementAmount, setDecrementAmount] = useState<number>(0);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleAsyncIncrement = () => {
    dispatch(simulateAsyncIncrement(incrementAmount));
  };

  const handleAsyncDecrement = () => {
    dispatch(simulateAsyncDecrement(decrementAmount));
  };

  return (
    <div>
      <h1>Counter: {value}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
        />
        <button onClick={handleAsyncIncrement}>Async Increment</button>
      </div>
      <div>
        <input
          type="number"
          value={decrementAmount}
          onChange={(e) => setDecrementAmount(Number(e.target.value))}
        />
        <button onClick={handleAsyncDecrement}>Async Decrement</button>
      </div>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Failed to update counter</p>}
    </div>
  );
};

export default CounterPage;
