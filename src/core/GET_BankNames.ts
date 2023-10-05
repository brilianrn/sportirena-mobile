import { BankType } from "../screens/Booking/Booking.type";
import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessBankNames extends ResponseREST {
  result: BankType[];
}

export const getBankNames = async (
  idVenue: string
): Promise<ResponseSuccessBankNames> => {
  return api
    .get({
      endpoint: `/bank-account/list/${idVenue}`,
      port: Number(process.env.EXPO_PUBLIC_PORT_VENUE),
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
