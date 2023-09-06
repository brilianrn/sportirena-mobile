import api from "./api";
import { ResponseREST } from "./response";

export interface BodyRegister {
  token: string;
}

export const postVerification = async (
  body: BodyRegister
): Promise<ResponseREST> => {
  return api
    .post({
      body,
      endpoint: "/auth/verification",
      port: Number(process.env.EXPO_PUBLIC_PORT_CUST),
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
