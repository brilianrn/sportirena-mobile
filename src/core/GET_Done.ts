import { ResultMyBooking } from "../screens/MyBooking/MyBooking.type";
import { QueryParamList } from "../types/common.type";
import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessDone extends ResponseREST {
  result: ResultMyBooking;
}

export const getDone = async (
  queryParam: QueryParamList
): Promise<ResponseSuccessDone> => {
  return api
    .get({
      endpoint: "/booking/cust/done",
      port: Number(process.env.EXPO_PUBLIC_PORT_BOOK),
      queryParam,
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
