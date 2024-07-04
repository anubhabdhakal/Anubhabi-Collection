import { useState, useEffect } from "react";
import productservices from "../services/productservices";
import axios from "axios";
import { setAllProductsList } from "../store/products/products";
import { useAppDispatch } from "./useAppDispatch";
export const useProductsList = () => {
  const dispatch = useAppDispatch();
  const [productsList, setProductsList] = useState([]);
  const getAllProducts = async () => {
    try {
      const res = await productservices.fetchAllProducts();
      if (res.data) {
        setProductsList(res.data);
        dispatch(setAllProductsList(res.data));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) console.log(error.request.data);
      else console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return { productsList, setProductsList };
};
