import { setAllCartLists, setNumberOfcarts } from "../store/cart/cart";
import { useAppDispatch } from "./useAppDispatch";
import cartservices from "../services/cartservices";
import { useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import { ProductInterface } from "../interfaces";
export const useSetCarts = () => {
  const dispatch = useAppDispatch();
  const productsList = useSelector(
    (state: any) => state.products.allProductsList,
  );

  const getAllTheCartProducts = async () => {
    const res = await cartservices.fetchAllProductsOfCart();
    const listOfCarts = res.data?.product;
    dispatch(setNumberOfcarts(listOfCarts.length));

    // const carts = productsList.filter((product) => {
    //   return listOfCarts.filter((cart) => {
    //     if (cart === product.id) return product;
    //   });
    // });
    const carts: Array<ProductInterface> = [];
    productsList.forEach((product: ProductInterface) => {
      listOfCarts.forEach((cart: number) => {
        if (cart === product.id) carts.push(product);
      });
    });

    dispatch(setAllCartLists(carts));
  };

  useLayoutEffect(() => {
    getAllTheCartProducts();
  }, [productsList]);
  return {};
};
