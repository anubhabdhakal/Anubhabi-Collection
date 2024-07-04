import { FC } from "react";
import { ImageSlider } from "../../components/ImageSlider/ImageSlider";
import { CloseButton } from "../../components/CloseButton/CloseButton";
import { ClothSize } from "../../components/ClothSize/ClothSize";
import { CartManipulator } from "../../components/CartManipulator/CartManipulator";
import "./SingleProductModal.scss";
import { SingleProductModalInterface } from "../../interfaces";

export const SingleProductModal: FC<SingleProductModalInterface> = ({
  product,
  closeModal,
}) => {
  const closeSingleProductModal = () => {
    closeModal();
  };

  return (
    <div className="single-product-modal-wrapper">
      <div className="single-product-modal-container">
        <div className="image-slider-section">
          <ImageSlider imagesList={product.photos} />
        </div>
        <div className="product-info-section">
          <span className="close-section">
            <CloseButton onClick={closeSingleProductModal} />
          </span>
          <p className="header">{product.name}</p>
          <main>
            <h2 className="price">NRs {product.price}</h2>
            <p className="description">{product.description}</p>
            <ClothSize sizeOptions={product.available_sizes} />
            <div className="info">
              <p>Spend NRs 100,000 for Free Shipping.</p>
              <div className="category-info">
                <p>Type: {product.category.name} </p>
                <p>Vendor: Nilam's Collection</p>
              </div>
            </div>
            <CartManipulator />
          </main>
        </div>
      </div>
    </div>
  );
};
