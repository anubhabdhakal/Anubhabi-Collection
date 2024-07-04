import { FC, useState } from "react";
import { Button } from "../Forms/Button/Button";
import "./CartManipulator.scss";
import minusIcon from "../../assets/icons/minus.svg";
import plusIcon from "../../assets/icons/plus.svg";
import { ProductCardContext } from "../../context/ProductCardContext";
import { useContext } from "react";

export const CartManipulator: FC = () => {
  const [cartNumber, setCartNumber] = useState(1);
  const { addInCart } = useContext(ProductCardContext);
  const increaseCounter = () => {
    setCartNumber(cartNumber + 1);
  };
  const decreaseCounter = () => {
    if (cartNumber === 0) return;

    setCartNumber(cartNumber - 1);
  };
  const handleClick = () => {
    addInCart();
  };
  return (
    <div className="cart-manipulator">
      <div className="arithmetic-container">
        <img src={minusIcon} alt="minus-icon" onClick={decreaseCounter} />
        <span id="counter">{cartNumber}</span>
        <img src={plusIcon} alt="plus-icon" onClick={increaseCounter} />
      </div>
      <div className="add-cart-btn">
        <Button
          value="Add to Cart"
          backgroundColor="purple"
          isChevron={false}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
