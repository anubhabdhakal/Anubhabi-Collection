import { useAppDispatch } from "./useAppDispatch";
import { setCategoryLists } from "../store/products/products";
import productservices from "../services/productservices";
import { useLayoutEffect } from "react";
export const useSetProductsCategories = () => {
  const dispatch = useAppDispatch();

  const getAllTheProductCategories = async () => {
    const res = await productservices.fetchAllProductCategories();
    dispatch(setCategoryLists(res.data));
  };

  useLayoutEffect(() => {
    getAllTheProductCategories();
  }, []);
  return {};
};
