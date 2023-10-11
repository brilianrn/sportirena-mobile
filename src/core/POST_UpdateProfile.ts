import { Gender } from "../types/common.type";
import api from "./api";
import { ResponseREST } from "./response";

export interface BodyUpdateProfile {
  name: string;
  email: string;
  phoneNumber: string;
  gender: Gender;
  base64?: string;
}

export const postUpdateProfile = async (
  body: BodyUpdateProfile
): Promise<ResponseREST> => {
  return await api
    .post({
      body,
      endpoint: "/customer/change-profile",
      port: Number(process.env.EXPO_PUBLIC_PORT_CUST),
    })
    .then((res) => res.data)
    .catch((err) => err);
};
