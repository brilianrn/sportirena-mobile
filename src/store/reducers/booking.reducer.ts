/* eslint-disable @typescript-eslint/no-explicit-any */
import { SET_CART, SET_COURT_DETAIL, SET_SCHEDULE_TIME } from "../constants";
import { BookingInitialState, ReducerProps } from "./index.type";

const initialState: BookingInitialState = {
  courtDetail: null,
  scheduleTime: null,
  cart: null,
};

const bookingReducer = (
  state = initialState,
  actions: ReducerProps = {
    type: "",
    payload: null,
  }
) => {
  const { type, payload } = actions;

  switch (type) {
    case SET_COURT_DETAIL:
      return { ...state, courtDetail: payload };
    case SET_SCHEDULE_TIME:
      return { ...state, scheduleTime: payload };
    case SET_CART:
      return { ...state, cart: payload };
    default:
      return state;
  }
};

export default bookingReducer;
