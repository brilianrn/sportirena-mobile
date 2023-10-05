/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  SET_BANK_NAMES,
  SET_CART,
  SET_COURT_DETAIL,
  SET_PAYMENT_BOOKING_HOUR,
  SET_SCHEDULE_TIME,
} from "../constants";
import { BookingInitialState, ReducerProps } from "./index.type";

const initialState: BookingInitialState = {
  courtDetail: null,
  scheduleTime: null,
  cart: null,
  paymentBookingHour: null,
  bankNames: null,
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
    case SET_PAYMENT_BOOKING_HOUR:
      return { ...state, paymentBookingHour: payload };
    case SET_BANK_NAMES:
      return { ...state, bankNames: payload };
    default:
      return state;
  }
};

export default bookingReducer;
