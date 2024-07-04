import { FC } from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ProductInterface } from "../../interfaces";
import { useSetCarts } from "../../hooks/useSetCarts";

export const Cart: FC = () => {
  useSetCarts();
  const numberOfCarts = useSelector((state: any) => state.cart.numberOfCarts);
  const cartLists = useSelector((state: any) => state.cart.cartLists);
  return (
    <div className="cart-container-wrapper">
      <div className="cart-container">
        <header>
          <h3>Your cart collection</h3>
          <p>
            Total number of carts :{" "}
            <span id="cart-number"> {numberOfCarts} </span>
          </p>
          <h2>Carts</h2>
        </header>
        <main>
          <div className="carts-list">
            {cartLists.map((product: ProductInterface) => (
              <ProductCard product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
