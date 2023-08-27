/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers } from "redux";
import venueReducer from "./venue.reducer";

const rootReducer = combineReducers({
  venue: venueReducer,
});

export default rootReducer;

export type IRootState = ReturnType<typeof rootReducer>;
