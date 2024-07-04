import { FC, useEffect, useRef, useState } from "react";
import "./SearchModal.scss";
import searchIcon from "../../assets/icons/search.svg";
import closeIcon from "../../assets/icons/close.svg";
import { useDispatch } from "react-redux";
import { toggleSearchModal } from "../../store/navbar/navbar";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useProductsList } from "../../hooks/useProductsList";
import { ProductCard } from "../../components/ProductCard/ProductCard";
export const SearchModal: FC = () => {
  const { productsList } = useProductsList();
  const [filteredProductsList, setFilteredProductsList] = useState([]);
  const inputElement = useRef<HTMLInputElement>();
  const dispatch = useDispatch();

  const closeSearchModal = () => {
    dispatch(toggleSearchModal());
  };
  const focusOnInput = () => {
    inputElement.current?.focus();
  };
  const { ref } = useClickOutside(closeSearchModal);

  const handleChange = (e) => {
    const filtered = productsList.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProductsList(filtered);
  };
  useEffect(() => {
    focusOnInput();
    setFilteredProductsList(productsList);
  }, [productsList]);
  return (
    <div className="search-modal-wrapper">
      <div className="search-modal-container" ref={ref}>
        <header>
          <div className="caption">
            <h4>What are you looking for ?</h4>
            <img src={closeIcon} alt="close-icon" onClick={closeSearchModal} />
          </div>
          <div className="search-bar">
            <input
              ref={inputElement}
              type="text"
              placeholder="Search Products..."
              onChange={handleChange}
            />
            <img src={searchIcon} alt="search-icon" />
          </div>
        </header>
        <main className="filtered-products-main-container">
          {filteredProductsList.map((product) => (
            <ProductCard product={product} />
          ))}
        </main>
      </div>
    </div>
  );
};
