import api from "./api";

export const getTotalCart = async (customerId) => {
  return api
    .get({
      endpoint: `/own/cart/count/${customerId}`,
      port: process.env.REACT_APP_PORT_CART,
    })
    .then((res) => res.data)
    .catch((err) => err.response.data);
};
