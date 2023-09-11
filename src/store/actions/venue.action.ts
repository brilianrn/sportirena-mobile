import { VenueCourt, VenueType } from "../../types/venue.type";
import {
  SET_VENUE_COURT,
  SET_VENUE_DETAIL,
  SET_VENUE_LIST,
} from "../constants";

export const setVenueList = (payload?: VenueType[]) => {
  return { type: SET_VENUE_LIST, payload };
};

export const setVenueDetail = (payload?: VenueType) => {
  return { type: SET_VENUE_DETAIL, payload };
};

export const setVenueCourt = (payload?: VenueCourt[]) => {
  return { type: SET_VENUE_COURT, payload };
};
