import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessPostAuth extends ResponseREST {
  token: string;
}

export interface BodyRequestForgot {
  email: string;
}

export const postRequestForgot = async (
  body: BodyRequestForgot
): Promise<ResponseSuccessPostAuth> => {
  return await api
    .post({
      body,
      endpoint: "/auth/request-forgot-password",
      port: Number(process.env.EXPO_PUBLIC_PORT_CUST),
    })
    .then((res) => res.data)
    .catch((err) => err);
};
