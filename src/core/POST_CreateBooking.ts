import { BookingType } from "../screens/Booking/Booking.type";
import api from "./api";
import { ResponseREST } from "./response";

export interface BodyCreateBooking {
  toBankName?: string;
  toBankAccountHolder?: string;
  toBankAccountNumber?: string;
  data: BookingType[];
}

export const postBooking = async (
  body: BodyCreateBooking
): Promise<ResponseREST> => {
  return await api
    .post({
      body,
      endpoint: "/booking/cust/create",
      port: Number(process.env.EXPO_PUBLIC_PORT_BOOK),
    })
    .then((res) => res.data)
    .catch((err) => err);
};
