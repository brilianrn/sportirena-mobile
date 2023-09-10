import { FacilityType } from "../../screens/Home/Home.type";
import { SET_FACILITY_TYPE } from "../constants";

export const setFacilityTypes = (payload?: FacilityType[]) => {
  return { type: SET_FACILITY_TYPE, payload };
};
