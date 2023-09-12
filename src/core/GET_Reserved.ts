import { ResultMyBooking } from "../screens/MyBooking/MyBooking.type";
import { QueryParamList } from "../types/common.type";
import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessReserverd extends ResponseREST {
  result: ResultMyBooking;
}

export const getReserved = async (
  queryParam: QueryParamList
): Promise<ResponseSuccessReserverd> => {
  return api
    .get({
      endpoint: "/booking/cust/reserved",
      port: Number(process.env.EXPO_PUBLIC_PORT_BOOK),
      queryParam,
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
