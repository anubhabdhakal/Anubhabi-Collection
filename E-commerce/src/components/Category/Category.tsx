import { FC } from "react";
import { CategoryInterface } from "../../interfaces";
import { useSelector } from "react-redux";
import getImageURL from "../../utils/ImageURL";
import "./Category.scss";

export const Category: FC = () => {
  const categoryLists = useSelector(
    (state: any) => state.products.categoryLists
  );
  return (
    <div className="category-container-wrapper">
      <header>
        <h2>Categories</h2>
      </header>
      <main>
        {categoryLists.map((list) => {
          return (
            <CategoryCard
              name={list.name}
              numberOfItems={list.numbers_of_product}
              photo={list.photo_url}
              key={list.id}
            />
          );
        })}
      </main>
    </div>
  );
};

export const CategoryCard: FC<CategoryInterface> = ({
  name,
  photo,
  numberOfItems,
}) => {
  return (
    <div className="category-card-container">
      <img src={getImageURL(photo)} alt="category-photo" />
      <div className="category-details">
        <p className="name">{name}</p>
        <p className="number">
          {numberOfItems} {numberOfItems > 1 ? "items" : "item"}
        </p>
      </div>
    </div>
  );
};
