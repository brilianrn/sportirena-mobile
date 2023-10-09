/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  SET_PROVINCES,
  SET_VENUE_COURT,
  SET_VENUE_DETAIL,
  SET_VENUE_LIST,
} from "../constants";
import { ReducerProps, VenueInitalState } from "./index.type";

const initialState: VenueInitalState = {
  venues: null,
  venueDetail: null,
  venueCourt: null,
  regencies: null,
};

const venueReducer = (
  state = initialState,
  actions: ReducerProps = {
    type: "",
    payload: null,
  }
) => {
  const { type, payload } = actions;

  switch (type) {
    case SET_VENUE_LIST:
      return { ...state, venues: payload };
    case SET_VENUE_DETAIL:
      return { ...state, venueDetail: payload };
    case SET_VENUE_COURT:
      return { ...state, venueCourt: payload };
    case SET_PROVINCES:
      return { ...state, regencies: payload };
    default:
      return state;
  }
};

export default venueReducer;
