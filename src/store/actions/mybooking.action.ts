import { MyBookingType } from "../../screens/MyBooking/MyBooking.type";
import { SET_DONE, SET_RESERVED, SET_WAITING_PAYMENT } from "../constants";

export const setWaitingPayment = (payload?: MyBookingType[]) => {
  return { type: SET_WAITING_PAYMENT, payload };
};

export const setReserved = (payload?: MyBookingType[]) => {
  return { type: SET_RESERVED, payload };
};

export const setDone = (payload?: MyBookingType[]) => {
  return { type: SET_DONE, payload };
};
