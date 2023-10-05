import {
  BankType,
  BookingType,
  CourtDetail,
} from "../../screens/Booking/Booking.type";
import {
  SET_BANK_NAMES,
  SET_CART,
  SET_COURT_DETAIL,
  SET_PAYMENT_BOOKING_HOUR,
  SET_SCHEDULE_TIME,
} from "../constants";

export const setCourtDetail = (payload?: CourtDetail) => {
  return { type: SET_COURT_DETAIL, payload };
};

export const setScheduleTime = (payload?: BookingType[]) => {
  return { type: SET_SCHEDULE_TIME, payload };
};

export const setCart = (payload?: BookingType[]) => {
  return { type: SET_CART, payload };
};

export const setPaymentBookingHour = (payload?: BookingType[]) => {
  return { type: SET_PAYMENT_BOOKING_HOUR, payload };
};

export const setBankNames = (payload?: BankType[]) => {
  return { type: SET_BANK_NAMES, payload };
};
