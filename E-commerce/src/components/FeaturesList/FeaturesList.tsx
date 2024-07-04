import { FC } from "react";
import "./FeaturesList.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  toggleSearchModal,
  toggleSignupModal,
} from "../../store/navbar/navbar";
import heartIcon from "../../assets/icons/heart.svg";
import { Avatar } from "../Avatar/Avatar";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export const FeaturesList: FC = () => {
  const numberOfCarts = useSelector((state: any) => state.cart.numberOfCarts);
  const currentUser = useSelector(
    (state: any) => state.currentUser.currentuser
  );
  const dispatch = useAppDispatch();
  const redirect = useNavigate();
  const openSearchModal = () => {
    dispatch(toggleSearchModal());
  };

  const openSignupModal = () => {
    dispatch(toggleSignupModal(true));
  };
  const redirectPath = (path: string) => {
    redirect(`/${path}`);
  };

  return (
    <div className="features-container">
      <div className="features-list-for-desktop">
        <div className="search-feature-container feature-container">
          <p onClick={openSearchModal}>Search</p>
          <div className="line"></div>
        </div>
        {!currentUser.username && (
          <div className="signup-feature-container feature-container">
            <p onClick={openSignupModal}>Signup </p>
            <div className="line"></div>
          </div>
        )}
        {!currentUser.username && (
          <div className="login-feature-container feature-container">
            <p onClick={() => redirectPath("login")}>Login </p>
            <div className="line"></div>
          </div>
        )}

        {/* <div className="wishlist-feature-container ft feature-container">
          <p>Wishlist</p>
          <p className="wishlist-number">({numberOfCarts})</p>
        </div> */}
        <div
          className="car-feature-container ft feature-container"
          onClick={() => redirectPath("cart")}
        >
          <p>Cart</p>
          <p className="cart-number">{numberOfCarts}</p>
        </div>
        {currentUser.username && (
          <Avatar
            name={currentUser.username}
            onClick={() => redirectPath("profile")}
            photo_url=""
          />
        )}
      </div>
      <div className="features-list-for-mobile">
        <FeatureListForMobile />
      </div>
    </div>
  );
};

export const FeatureListForMobile: FC = () => {
  const numberOfCarts = useSelector((state: any) => state.cart.numberOfCarts);
  const currentUser = useSelector(
    (state: any) => state.currentUser.currentuser
  );
  const redirect = useNavigate();
  return (
    <div className="features-for-mobile">
      <div className="wishlist">
        <img src={heartIcon} alt="heart" />
        <p className="wishlist-number ">({numberOfCarts})</p>
      </div>
      <p className="cart-number">{numberOfCarts}</p>
      {currentUser.username && (
        <Avatar
          name={currentUser.username}
          onClick={() => redirect("profile")}
        />
      )}
    </div>
  );
};
