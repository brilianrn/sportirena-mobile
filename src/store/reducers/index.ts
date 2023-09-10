/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from "redux";
import dashboardReducer from "./dashboard.reducer";
import userReducer from "./user.reducer";
import venueReducer from "./venue.reducer";

const rootReducer = combineReducers({
  venue: venueReducer,
  user: userReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;

export type IRootState = ReturnType<typeof rootReducer>;
