import { BookingType } from "../screens/Booking/Booking.type";
import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessCourtDetail extends ResponseREST {
  result: BookingType[];
}

export const getCart = async (
  idCustomer: string
): Promise<ResponseSuccessCourtDetail> => {
  return api
    .get({
      endpoint: `/cust/cart/${idCustomer}`,
      port: Number(process.env.EXPO_PUBLIC_PORT_CART),
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
