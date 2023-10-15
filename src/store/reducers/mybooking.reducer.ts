/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  SET_DONE,
  SET_RESERVED,
  SET_RESERVED_DETAIL,
  SET_WAITING_APPROVAL,
  SET_WAITING_APPROVAL_DETAIL,
  SET_WAITING_PAYMENT,
  SET_WAITING_PAYMENT_DETAIL,
} from "../constants";
import { MyBookingInitialState, ReducerProps } from "./index.type";

const initialState: MyBookingInitialState = {
  done: null,
  reserved: null,
  waitingPayment: null,
  waitingPaymentDetail: null,
  waitingApproval: null,
  waitingApprovalDetail: null,
  reservedDetail: null,
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
    case SET_WAITING_APPROVAL:
      return { ...state, waitingApproval: payload };
    case SET_WAITING_APPROVAL_DETAIL:
      return { ...state, waitingApprovalDetail: payload };
    case SET_WAITING_PAYMENT_DETAIL:
      return { ...state, waitingPaymentDetail: payload };
    case SET_RESERVED:
      return { ...state, reserved: payload };
    case SET_RESERVED_DETAIL:
      return { ...state, reservedDetail: payload };
    case SET_DONE:
      return { ...state, done: payload };
    default:
      return state;
  }
};

export default myBookingReducer;
