import { FC } from "react";
import { ProductCard } from "../../../components/ProductCard/ProductCard";
import "./BestSelling.scss";
import { useSelector } from "react-redux";

export const BestSelling: FC = () => {
  const productsList = useSelector(
    (state: any) => state.products.allProductsList
  );
  return (
    <div className="best-selling-container">
      <header>
        <h4>Featured</h4>
        <h3>Best Sellers Of The Week</h3>
        <p>
          These pieces can be easily mixed and matched to create totally
          different looks.
        </p>
      </header>
      <main className="best-selling-main">
        {productsList.map((product) => (
          <ProductCard product={product} />
        ))}
      </main>
    </div>
  );
};
