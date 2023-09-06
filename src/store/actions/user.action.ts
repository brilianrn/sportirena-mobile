import { UserDetailType } from "../../types/common.type";
import { SET_USER_DETAIL } from "../constants";

export const setUserDetail = (payload?: UserDetailType) => {
  return { type: SET_USER_DETAIL, payload };
};
