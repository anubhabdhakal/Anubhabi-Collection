import { FC, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productservices from "../../services/productservices";
import "./Products.scss";
import { ImageSlider } from "../../components/ImageSlider/ImageSlider";
import Loading from "../../components/Loader/Loader";
import { useSetProductsCategories } from "../../hooks/useSetProductsCategories";
export const Product: FC = () => {
  useSetProductsCategories();
  const params = useParams();
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const getProductsCategoryDetail = async () => {
    try {
      setIsLoading(true);
      const res = await productservices.fetchProductCategory(params.name);
      setDetails(() => res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useLayoutEffect(() => {
    getProductsCategoryDetail();
  }, [params]);

  return (
    <div className="product-page-wrapper">
      <header>
        <ImageSlider
          imagesList={[{ image: details?.photo_url, caption: details.name }]}
        />
      </header>
      {isLoading && <Loading />}
    </div>
  );
};
