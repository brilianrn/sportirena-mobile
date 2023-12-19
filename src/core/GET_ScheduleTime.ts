import { ScheduleTime } from "../screens/Booking/Booking.type";
import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessScheduleTime extends ResponseREST {
  result: ScheduleTime[];
}

export interface GetScheduleTimeParam {
  courtId: string;
  startDate: string;
  endDate: string;
}

export const getScheduleTime = async (
  queryParam: GetScheduleTimeParam
): Promise<ResponseSuccessScheduleTime> => {
  return api
    .get({
      endpoint: "/cust/hour/schedule-time",
      port: Number(process.env.EXPO_PUBLIC_PORT_OPENHOUR),
      queryParam,
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
