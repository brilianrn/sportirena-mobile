import { BookingType } from "../screens/Booking/Booking.type";
import api from "./api";
import { ResponseREST } from "./response";

export type BankTransferType = {
  toBankName?: string;
  toBankAccountHolder?: string;
  toBankAccountNumber?: string;
};

export interface BodyCreateBooking extends BankTransferType {
  data: BookingType[];
}

export const postBooking = async (
  body: BodyCreateBooking
): Promise<ResponseREST> => {
  return await api
    .post({
      body,
      endpoint:
        body.toBankName && body.toBankAccountHolder && body.toBankAccountNumber
          ? "/booking/cust/create-bank-transfer"
          : "/booking/cust/create",
      port: Number(process.env.EXPO_PUBLIC_PORT_BOOK),
    })
    .then((res) => res.data)
    .catch((err) => err);
};
