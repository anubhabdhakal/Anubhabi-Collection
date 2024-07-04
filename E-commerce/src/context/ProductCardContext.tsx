import { createContext } from "react";

export const ProductCardContext = createContext({
  addInCart: () => Promise<void>,
});
