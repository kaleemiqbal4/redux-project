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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Counter</h5>
            </div>
            <div className="card-body">
              <div className="text-center mb-4">
                <h1 className="display-4">{value}</h1>
              </div>
              <div className="row mb-4">
                <div className="col-12 d-flex justify-content-center">
                  <button
                    className="btn btn-primary me-2"
                    onClick={handleIncrement}
                  >
                    Increment
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={handleDecrement}
                  >
                    Decrement
                  </button>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-12 mb-3">
                  <input
                    type="number"
                    className="form-control"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(Number(e.target.value))}
                    placeholder="Amount to increment"
                  />
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <button
                    className="btn btn-success"
                    onClick={handleAsyncIncrement}
                  >
                    Async Increment
                  </button>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-12 mb-3">
                  <input
                    type="number"
                    className="form-control"
                    value={decrementAmount}
                    onChange={(e) => setDecrementAmount(Number(e.target.value))}
                    placeholder="Amount to decrement"
                  />
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <button
                    className="btn btn-warning"
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
                  Failed to update counter
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CounterPage;
