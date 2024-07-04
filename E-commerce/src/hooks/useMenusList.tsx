import { useEffect } from "react";
import { useSelector } from "react-redux";
export const useMenusList = () => {
  const productsSubList = useSelector(
    (state: any) => state.products.categoryLists
  );
  const menusList = [
    {
      name: "Home",
      hasNew: true,
    },
    {
      name: "Shop",
      hasNew: true,
    },
    {
      name: "Products",
      hasNew: true,
      subList: productsSubList,
    },
    {
      name: "Pages",
      hasNew: false,
      subList: [
        {
          name: "Contacts",
        },
        {
          name: "Faqs",
        },
        {
          name: "Team",
        },
      ],
    },
    {
      name: "Buy Now",
    },
  ];

  useEffect(() => {}, [productsSubList]);

  return [menusList];
};
