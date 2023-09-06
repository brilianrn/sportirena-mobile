import { Gender } from "../types/common.type";
import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessRegister extends ResponseREST {
  token: string;
}

export interface BodyRegister {
  name: string;
  email: string;
  phoneNumber: string;
  gender: Gender;
  base64?: string;
  password: string;
  confirmPassword: string;
}

export const postRegister = async (
  body: BodyRegister
): Promise<ResponseSuccessRegister> => {
  return api
    .post({
      body,
      endpoint: "/auth/registration",
      port: Number(process.env.EXPO_PUBLIC_PORT_CUST),
    })
    .then((res) => res.data)
    .catch((err) => err);
};
