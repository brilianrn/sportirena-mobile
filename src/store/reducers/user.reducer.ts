/* eslint-disable @typescript-eslint/no-explicit-any */
import { SET_TOKEN_REQUEST_FORGOT, SET_USER_DETAIL } from "../constants";
import { ReducerProps, UserInitialState } from "./index.type";

const initialState: UserInitialState = {
  userDetail: null,
  tokenRequestForgot: null,
};

const userReducer = (
  state = initialState,
  actions: ReducerProps = {
    type: "",
    payload: null,
  }
) => {
  const { type, payload } = actions;
  switch (type) {
    case SET_USER_DETAIL:
      return { ...state, userDetail: payload };
    case SET_TOKEN_REQUEST_FORGOT:
      return { ...state, tokenRequestForgot: payload };
    default:
      return state;
  }
};

export default userReducer;
