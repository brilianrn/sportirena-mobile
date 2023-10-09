import api from "./api";
import { ResponseREST } from "./response";

export const deleteCart = async (id: string): Promise<ResponseREST> => {
  return api
    .delete({
      endpoint: `/cust/cart/${id}`,
      bodyparam: {},
      port: Number(process.env.EXPO_PUBLIC_PORT_CART),
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
