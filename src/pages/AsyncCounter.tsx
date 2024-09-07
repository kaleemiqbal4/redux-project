import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/store";

import {
  simulateAsyncIncrement,
  simulateAsyncDecrement,
} from "../redux/actions/counterActions";

const AsyncCounter: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { status } = useSelector((state: RootState) => state.counter);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  const [decrementAmount, setDecrementAmount] = useState<number>(0);

  const handleAsyncIncrement = () => {
    dispatch(simulateAsyncIncrement(incrementAmount));
  };

  const handleAsyncDecrement = () => {
    dispatch(simulateAsyncDecrement(decrementAmount));
  };
  return (
    <>
      <div className="row mb-4">
        <div className="col-8 mb-3">
          <input
            type="number"
            className="form-control"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(Number(e.target.value))}
            placeholder="Amount to increment"
          />
        </div>
        <div className="col-4 d-flex justify-content-center">
          <button className="btn btn-success" onClick={handleAsyncIncrement}>
            Async Increment
          </button>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-8 mb-3">
          <input
            type="number"
            className="form-control"
            value={decrementAmount}
            onChange={(e) => setDecrementAmount(Number(e.target.value))}
            placeholder="Amount to decrement"
          />
        </div>
        <div className="col-4 d-flex justify-content-center">
          <button
            className="btn btn-warning btn-md"
            onClick={handleAsyncDecrement}
          >
            Async Decrement
          </button>
        </div>
      </div>
      {status === "loading" && (
        <p className="text-info text-center">Loading...</p>
      )}
      {status === "failed" && (
        <p className="text-danger text-center">
          Failed to update counter redux
        </p>
      )}
    </>
  );
};

export default AsyncCounter;
