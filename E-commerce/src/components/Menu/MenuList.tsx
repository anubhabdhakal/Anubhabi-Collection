import { FC } from "react";
import { useDispatch } from "react-redux";
import { toggleMenuModal, toggleSearchModal } from "../../store/navbar/navbar";
import { MenuForDesktop } from "./Menu";
import bars from "../../assets/icons/bars.svg";
import search from "../../assets/icons/search.svg";
import "./MenuList.scss";
import { useMenusList } from "../../hooks/useMenusList";

export const MenusList: FC = () => {
  const [menusList] = useMenusList();

  return (
    <div className="menus-container">
      <div className="menus-for-mobile">
        <MenuForMobile />
      </div>
      <div className="menus-for-desktop">
        <MenuForDesktop menusList={menusList} />
      </div>
    </div>
  );
};
export const MenuForMobile: FC = () => {
  const dispatch = useDispatch();
  const openMenuModal = () => {
    dispatch(toggleMenuModal());
  };
  const openSearchModal = () => {
    dispatch(toggleSearchModal());
  };
  return (
    <div className="menu-for-mobile-container">
      <img src={bars} alt="hamburger-icon" onClick={openMenuModal} />
      <img src={search} alt="search-icon" onClick={openSearchModal} />
    </div>
  );
};
