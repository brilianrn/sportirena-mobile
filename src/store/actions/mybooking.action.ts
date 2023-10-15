import { MyBookingType } from "../../screens/MyBooking/MyBooking.type";
import {
  SET_DONE,
  SET_RESERVED,
  SET_RESERVED_DETAIL,
  SET_WAITING_APPROVAL,
  SET_WAITING_APPROVAL_DETAIL,
  SET_WAITING_PAYMENT,
  SET_WAITING_PAYMENT_DETAIL,
} from "../constants";

export const setWaitingPayment = (payload?: MyBookingType[]) => {
  return { type: SET_WAITING_PAYMENT, payload };
};

export const setWaitingPaymentDetail = (payload?: MyBookingType) => {
  return { type: SET_WAITING_PAYMENT_DETAIL, payload };
};

export const setWaitingApproval = (payload?: MyBookingType[]) => {
  return { type: SET_WAITING_APPROVAL, payload };
};

export const setWaitingApprovalDetail = (payload?: MyBookingType) => {
  return { type: SET_WAITING_APPROVAL_DETAIL, payload };
};

export const setReserved = (payload?: MyBookingType[]) => {
  return { type: SET_RESERVED, payload };
};

export const setReservedDetail = (payload?: MyBookingType) => {
  return { type: SET_RESERVED_DETAIL, payload };
};

export const setDone = (payload?: MyBookingType[]) => {
  return { type: SET_DONE, payload };
};
