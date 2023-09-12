/* eslint-disable @typescript-eslint/no-explicit-any */
import { SET_DONE, SET_RESERVED, SET_WAITING_PAYMENT } from "../constants";
import { MyBookingInitialState, ReducerProps } from "./index.type";

const initialState: MyBookingInitialState = {
  done: null,
  reserved: null,
  waitingPayment: null,
};

const myBookingReducer = (
  state = initialState,
  actions: ReducerProps = {
    type: "",
    payload: null,
  }
) => {
  const { type, payload } = actions;

  switch (type) {
    case SET_WAITING_PAYMENT:
      return { ...state, waitingPayment: payload };
    case SET_RESERVED:
      return { ...state, reserved: payload };
    case SET_DONE:
      return { ...state, done: payload };
    default:
      return state;
  }
};

export default myBookingReducer;
