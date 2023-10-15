import { MyBookingType } from "../screens/MyBooking/MyBooking.type";
import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessWaitingApprovalDetail extends ResponseREST {
  result: MyBookingType;
}

export const getWaitingApprovalDetail = async (
  id: string
): Promise<ResponseSuccessWaitingApprovalDetail> => {
  return api
    .get({
      endpoint: `/booking/cust/waiting-approved/${id}`,
      port: Number(process.env.EXPO_PUBLIC_PORT_BOOK),
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
