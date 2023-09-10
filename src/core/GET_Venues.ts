import { QueryParamVenues, VenueType } from "../types/venue.type";
import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessFacilityType extends ResponseREST {
  result: VenueType[];
}

export const getVenues = async (
  queryParam?: QueryParamVenues
): Promise<ResponseSuccessFacilityType> => {
  return api
    .get({
      endpoint: "/venue/list",
      port: Number(process.env.EXPO_PUBLIC_PORT_VENUE),
      queryParam,
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
