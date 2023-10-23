import { MyBookingType } from "../screens/MyBooking/MyBooking.type";
import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessWaitingPayment extends ResponseREST {
  result: MyBookingType;
}

export const getWaitingPaymentDetail = async (
  id: string
): Promise<ResponseSuccessWaitingPayment> => {
  return api
    .get({
      endpoint: `/booking/cust/waiting-payment/${id}`,
      port: Number(process.env.EXPO_PUBLIC_PORT_BOOK),
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
