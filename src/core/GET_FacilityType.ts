import { FacilityType } from "../screens/Home/Home.type";
import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessFacilityType extends ResponseREST {
  result: FacilityType[];
}

export const getFacilityType =
  async (): Promise<ResponseSuccessFacilityType> => {
    return api
      .get({
        endpoint: "/facility",
        port: Number(process.env.EXPO_PUBLIC_PORT_FACILITY),
      })
      .then((res) => res.data)
      .catch((err) => err.response.data);
  };
