/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from "redux";
import bookingReducer from "./booking.reducer";
import dashboardReducer from "./dashboard.reducer";
import myBookingReducer from "./mybooking.reducer";
import userReducer from "./user.reducer";
import venueReducer from "./venue.reducer";

const rootReducer = combineReducers({
  venue: venueReducer,
  user: userReducer,
  dashboard: dashboardReducer,
  myBooking: myBookingReducer,
  booking: bookingReducer,
});

export default rootReducer;

export type IRootState = ReturnType<typeof rootReducer>;
