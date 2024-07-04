import { FC } from "react";
import { RootState } from "../../store/store";
import "./Home.scss";
import { ImageSlider } from "../../components/ImageSlider/ImageSlider";
import { BestSelling } from "./BestSelling/BestSelling";
import { Information } from "../../components/Information/Information";
import { Category } from "../../components/Category/Category";
import { useSelector } from "react-redux";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useSetCarts } from "../../hooks/useSetCarts";
import { useSetProductsCategories } from "../../hooks/useSetProductsCategories";
export const Home: FC = () => {
  useCurrentUser();
  useSetCarts();
  useSetProductsCategories();

  const homeInformation = useSelector(
    (state: RootState) => state.home.homeInformation
  );
  const images = useSelector((state: RootState) => state.home.images);

  return (
    <div className="home-page-wrapper">
      <div className="image-slider-wrapper">
        <ImageSlider imagesList={images} />
      </div>
      <Information infoList={homeInformation} />
      <Category />
      <BestSelling />
    </div>
  );
};
