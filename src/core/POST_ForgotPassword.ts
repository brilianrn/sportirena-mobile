import api from "./api";
import { ResponseREST } from "./response";

export interface BodyForgotPassword {
  token: string;
  password: string;
  confirmPassword: string;
}

export const postForgotPassword = async (
  body: BodyForgotPassword
): Promise<ResponseREST> => {
  return await api
    .post({
      body,
      endpoint: "/auth/forgot-password",
      port: Number(process.env.EXPO_PUBLIC_PORT_CUST),
    })
    .then((res) => res.data)
    .catch((err) => err);
};
