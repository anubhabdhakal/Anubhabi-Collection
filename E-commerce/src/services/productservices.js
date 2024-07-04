import api from "../api/api";
const fetchAllProducts = async () => {
  const res = await api.get("product/getall/");
  return res.data;
};

const fetchAllProductCategories = async () => {
  const res = await api.get("product/category/");
  return res.data;
};

const fetchProductCategory = async (name) => {
  const res = await api.get(`product/category/${name}`);
  return res.data;
};

export default {
  fetchAllProducts,
  fetchAllProductCategories,
  fetchProductCategory,
};
