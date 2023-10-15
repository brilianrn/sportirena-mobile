import api from "./api";
import { ResponseREST } from "./response";

export interface BodyConfirmPayment {
  id: string;
  fromBankName: string;
  fromBankAccountHolder: string;
  fromBankAccountNumber: string;
  transferDate: string;
  transferAmount: number;
  base64: string;
}

export const putConfirmPayment = async (
  body: BodyConfirmPayment
): Promise<ResponseREST> => {
  return await api
    .put({
      body,
      endpoint: `/booking/cust/confirmation-payment/${body.id}`,
      port: Number(process.env.EXPO_PUBLIC_PORT_BOOK),
    })
    .then((res) => res.data)
    .catch((err) => err);
};
