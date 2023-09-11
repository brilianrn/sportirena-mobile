import { QueryParamVenueCourt, VenueCourt } from "../types/venue.type";
import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessVenueCourt extends ResponseREST {
  result: VenueCourt[];
}

export const getVenueCourts = async (
  id: string,
  queryParam?: QueryParamVenueCourt
): Promise<ResponseSuccessVenueCourt> => {
  return api
    .get({
      endpoint: `/court/list/${id}`,
      port: Number(process.env.EXPO_PUBLIC_PORT_COURT),
      queryParam,
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
