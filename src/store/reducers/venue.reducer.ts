/* eslint-disable @typescript-eslint/no-explicit-any */
import { SET_VENUE_DETAIL, SET_VENUE_LIST } from "../constants";
import { ReducerProps, VenueInitalState } from "./index.type";

const initialState: VenueInitalState = {
  venues: null,
  venueDetail: null,
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
    default:
      return state;
  }
};

export default venueReducer;
