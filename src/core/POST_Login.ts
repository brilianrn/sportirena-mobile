import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessPostAuth extends ResponseREST {
  result: { token: string };
}

export interface BodyLogin {
  email: string;
  password: string;
}

export const postLogin = async (
  body: BodyLogin
): Promise<ResponseSuccessPostAuth> => {
  return await api
    .post({
      body,
      endpoint: "/auth/signin",
      port: Number(process.env.EXPO_PUBLIC_PORT_CUST),
    })
    .then((res) => res.data)
    .catch((err) => err);
};
