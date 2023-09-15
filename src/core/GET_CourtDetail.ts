import { CourtDetail } from "../screens/Booking/Booking.type";
import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessCourtDetail extends ResponseREST {
  result: CourtDetail;
}

export const getCourtDetail = async (
  id: string
): Promise<ResponseSuccessCourtDetail> => {
  return api
    .get({
      endpoint: `/court/${id}`,
      port: Number(process.env.EXPO_PUBLIC_PORT_COURT),
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
