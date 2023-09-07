import { UserDetailType } from "../../types/common.type";
import { SET_TOKEN_REQUEST_FORGOT, SET_USER_DETAIL } from "../constants";

export const setUserDetail = (payload?: UserDetailType) => {
  return { type: SET_USER_DETAIL, payload };
};

export const setTokenRequestForgot = (token?: string) => {
  return { type: SET_TOKEN_REQUEST_FORGOT, payload: token };
};
