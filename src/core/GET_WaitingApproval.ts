import { ResultMyBooking } from "../screens/MyBooking/MyBooking.type";
import { QueryParamList } from "../types/common.type";
import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessWaitingPayment extends ResponseREST {
  result: ResultMyBooking;
}

export const getWaitingApproval = async (
  queryParam: QueryParamList
): Promise<ResponseSuccessWaitingPayment> => {
  return api
    .get({
      endpoint: "/booking/cust/waiting-approved",
      port: Number(process.env.EXPO_PUBLIC_PORT_BOOK),
      queryParam,
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
