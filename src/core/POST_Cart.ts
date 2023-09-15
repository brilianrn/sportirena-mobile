import { BookingType } from "../screens/Booking/Booking.type";
import api from "./api";
import { ResponseREST } from "./response";

export const postCart = async (body: BookingType[]): Promise<ResponseREST> => {
  return await api
    .post({
      body,
      endpoint: "/cust/cart",
      port: Number(process.env.EXPO_PUBLIC_PORT_CART),
    })
    .then((res) => res.data)
    .catch((err) => err);
};
