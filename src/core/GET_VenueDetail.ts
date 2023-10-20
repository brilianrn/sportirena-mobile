import { QueryParamVenues, VenueType } from "../types/venue.type";
import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessFacilityType extends ResponseREST {
  result: VenueType;
}

export const getVenueDetail = async (
  id: string
): Promise<ResponseSuccessFacilityType> => {
  return api
    .get({
      endpoint: `/venue/detail/${id}`,
      port: Number(process.env.EXPO_PUBLIC_PORT_VENUE),
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
