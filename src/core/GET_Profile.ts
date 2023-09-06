import { UserDetailType } from "../types/common.type";
import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessProfile extends ResponseREST {
  result: UserDetailType;
}

export const getProfile = async (): Promise<ResponseSuccessProfile> => {
  return api
    .get({
      endpoint: "/customer/myprofile",
      port: Number(process.env.EXPO_PUBLIC_PORT_CUST),
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
