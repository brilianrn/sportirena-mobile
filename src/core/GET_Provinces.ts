import { OptionType } from "../../App.type";
import api from "./api";
import { ResponseREST } from "./response";

interface ResponseSuccessProvinces extends ResponseREST {
  result: OptionType[];
}

export const getRegencies = async (): Promise<ResponseSuccessProvinces> => {
  return api
    .get({
      endpoint: "/territory/all/regencies",
      port: Number(process.env.EXPO_PUBLIC_PORT_TERRITORY),
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
