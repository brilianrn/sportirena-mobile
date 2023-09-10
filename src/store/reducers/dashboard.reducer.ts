/* eslint-disable @typescript-eslint/no-explicit-any */
import { SET_FACILITY_TYPE } from "../constants";
import { DashboardInitialState, ReducerProps } from "./index.type";

const initialState: DashboardInitialState = {
  facilityTypes: null,
};

const dashboardReducer = (
  state = initialState,
  actions: ReducerProps = {
    type: "",
    payload: null,
  }
) => {
  const { type, payload } = actions;

  switch (type) {
    case SET_FACILITY_TYPE:
      return { ...state, facilityTypes: payload };
    default:
      return state;
  }
};

export default dashboardReducer;
