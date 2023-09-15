import { BookingType, CourtDetail } from "../../screens/Booking/Booking.type";
import { SET_CART, SET_COURT_DETAIL, SET_SCHEDULE_TIME } from "../constants";

export const setCourtDetail = (payload?: CourtDetail) => {
  return { type: SET_COURT_DETAIL, payload };
};

export const setScheduleTime = (payload?: BookingType[]) => {
  return { type: SET_SCHEDULE_TIME, payload };
};

export const setCart = (payload?: BookingType[]) => {
  return { type: SET_CART, payload };
};
