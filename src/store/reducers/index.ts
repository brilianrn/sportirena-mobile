/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from "redux";
import venueReducer from "./venue.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  venue: venueReducer,
  user: userReducer,
});

export default rootReducer;

export type IRootState = ReturnType<typeof rootReducer>;
