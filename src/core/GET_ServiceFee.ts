import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessDone extends ResponseREST {
  result: { serviceFee: number };
}

export const getServiceFee = async (
  venueId: string
): Promise<ResponseSuccessDone> => {
  return api
    .get({
      endpoint: `/venue/privacy-policy/${venueId}`,
      port: Number(process.env.EXPO_PUBLIC_PORT_VENUE),
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
