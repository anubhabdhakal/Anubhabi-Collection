import { FC, useContext, useEffect, useState } from "react";
import { Button } from "../Forms/Button/Button";
import { Rating } from "react-simple-star-rating";
import { SingleProductModal } from "../../modals/SingleProductModal/SingleProductModal";
import { ProductInterface } from "../../interfaces";
import { toggleSignupModal } from "../../store/navbar/navbar";
import { ImageCardProps } from "../../interfaces";
import "./ProductCard.scss";
import Loading from "../Loader/Loader";
import cartServices from "../../services/cartservices";
import heartIcon from "../../assets/icons/heart.svg";
import eyeIcon from "../../assets/icons/eye.svg";
import getImageURL from "../../utils/ImageURL";
import ToastMessage from "../../utils/toastify";
import axios from "axios";
import { ProductCardContext } from "../../context/ProductCardContext";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export const ProductCard: FC<{ product: ProductInterface }> = ({ product }) => {
  const cartLists = useSelector((state: any) => state.cart.cartLists);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useCurrentUser();
  const dispatch = useAppDispatch();
  const { photos, name, rating, price } = product;
  const [isInCart, setIsInCart] = useState(false);

  const [isSingleProductModalOpen, setIsSinleProductModalOpen] =
    useState(false);

  const toggleSingleProductModal = () => {
    setIsSinleProductModalOpen(!isSingleProductModalOpen);
  };
  const getFirstImageInList = () => {
    return photos[0].image;
  };
  const addInCart = async () => {
    try {
      setIsLoading(() => true);

      if (!currentUser.id) {
        //if user is not logged in cannot add the cart and is redirected to signup modal
        dispatch(toggleSignupModal(true));
        setIsLoading(() => false);
        return;
      }
      const payload = {
        product: [product.id],
      };
      const res = await cartServices.addProductToCart(payload);
      setIsLoading(() => false);
      if (res.data.success)
        ToastMessage("success", "Successfully added to the cart.");
    } catch (error) {
      setIsLoading(() => false);
      if (axios.isAxiosError(error)) ToastMessage("error", error.request.data);
      else console.log(error);
    }
  };

  useEffect(() => {
    console.log("Cart", cartLists);
    cartLists.forEach((cart: ProductInterface) => {
      if (cart.id === product.id) {
        setIsInCart(() => true);
      }
    });
  }, []);
  return (
    <ProductCardContext.Provider value={{ addInCart }}>
      <div className="product-card-container">
        <ImageCard
          image={getFirstImageInList()}
          isInCart={isInCart}
          openModal={toggleSingleProductModal}
        />
        <div className="product-info-container">
          <h3>{name}</h3>
          <Rating
            initialValue={rating}
            className="rating-stars"
            readonly={true}
            size={13}
          />
          <p>NRs {price}</p>
        </div>
        {isSingleProductModalOpen && (
          <SingleProductModal
            product={product}
            closeModal={toggleSingleProductModal}
          />
        )}
        {isLoading && <Loading />}
      </div>
    </ProductCardContext.Provider>
  );
};

export const ImageCard: FC<ImageCardProps> = ({
  image,
  openModal,
  isInCart,
}) => {
  const openSingleProductModal = () => {
    openModal();
  };
  const { addInCart } = useContext(ProductCardContext);

  return (
    <div
      className="image-card-wrapper"
      style={{ backgroundImage: `url(${getImageURL(image)})` }}
    >
      <div className="image-card-container">
        <div className="add-to-wishlist-container">
          <div
            className="wishlist"
            onClick={() =>
              ToastMessage("success", "Successfully added to the cart")
            }
          >
            <img src={heartIcon} alt="wishlist" />
            <p>Add to wishlist</p>
          </div>
          <div className="quickshop" onClick={openSingleProductModal}>
            <img src={eyeIcon} alt="eye" />
            <p>Quickshop</p>
          </div>
        </div>
        <div className="add-to-cart-container">
          <Button
            value={isInCart ? "Added" : "Add to Cart"}
            backgroundColor="white"
            isChevron={false}
            onClick={addInCart}
            disabled={isInCart ? true : false}
          />
        </div>
      </div>
    </div>
  );
};
