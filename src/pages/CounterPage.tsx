import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { increment, decrement } from "../redux/reducers/counterReducer";

import AsyncCounter from "./AsyncCounter";

const CounterPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col">
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
              <AsyncCounter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CounterPage;
