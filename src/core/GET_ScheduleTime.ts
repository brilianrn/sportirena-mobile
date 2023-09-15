import { BookingType } from "../screens/Booking/Booking.type";
import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessScheduleTime extends ResponseREST {
  result: BookingType[];
}

export const getScheduleTime = async (
  id: string,
  date: string
): Promise<ResponseSuccessScheduleTime> => {
  return api
    .get({
      endpoint: `/cust/hour/list/${id}/${date}`,
      port: Number(process.env.EXPO_PUBLIC_PORT_OPENHOUR),
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
