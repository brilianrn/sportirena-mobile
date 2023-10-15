import { MyBookingType } from "../screens/MyBooking/MyBooking.type";
import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessReservedDetail extends ResponseREST {
  result: MyBookingType;
}

export const getReservedDetail = async (
  id: string
): Promise<ResponseSuccessReservedDetail> => {
  return api
    .get({
      endpoint: `/booking/cust/reserved/${id}`,
      port: Number(process.env.EXPO_PUBLIC_PORT_BOOK),
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
