import api from "./api";
import { ResponseREST } from "./response";

export interface BodyUpdatePassword {
  password: string;
  confirmPassword: string;
}

export const postUpdatePassword = async (
  body: BodyUpdatePassword
): Promise<ResponseREST> => {
  return await api
    .post({
      body,
      endpoint: "/customer/change-password",
      port: Number(process.env.EXPO_PUBLIC_PORT_CUST),
    })
    .then((res) => res.data)
    .catch((err) => err);
};
