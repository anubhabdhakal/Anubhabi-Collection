import api from "../api/api";
const addProductToCart = async (product) => {
  const res = await api.patch("/cart/", product);
  return res;
};

const fetchAllProductsOfCart = async () => {
  const res = await api.get("cart/");
  return res.data;
};

export default { addProductToCart, fetchAllProductsOfCart };
