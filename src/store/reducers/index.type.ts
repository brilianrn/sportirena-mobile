import { UserDetailType } from "../../types/common.type";
import { VenueType } from "../../types/venue.type";

export interface ReducerProps<
  T = object | object[] | [] | string | number | null
> {
  type: string;
  payload: T;
}

export interface VenueInitalState {
  venues: VenueType[] | null;
  venueDetail: VenueType | null;
}

export interface UserInitialState {
  userDetail: UserDetailType | null;
}
