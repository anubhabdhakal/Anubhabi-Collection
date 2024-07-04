import "./MenuModal.scss";
import plusIcon from "../../assets/icons/plus.svg";
import minusIcon from "../../assets/icons/minus.svg";
import { NewStatus } from "../../components/Menu/NewStatus/NewStatus";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenuModal } from "../../store/navbar/navbar";
import { useNavigate } from "react-router-dom";
import { CloseButton } from "../../components/CloseButton/CloseButton";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useMenusList } from "../../hooks/useMenusList";
export const MenuModal = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [menusList] = useMenusList();
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const getIcon = () => {
    if (showCategory) return minusIcon;
    return plusIcon;
  };
  const toggleShowCategory = () => {
    setShowCategory(!showCategory);
  };
  const closeMenuModal = () => {
    dispatch(toggleMenuModal());
  };
  const { ref } = useClickOutside(closeMenuModal);

  const redirectPath = (path: string) => {
    redirect(`${path.toLowerCase()}`);
    closeMenuModal();
  };
  console.log(menusList);

  return (
    <div className="menu-modal-wrapper">
      <div className="menu-modal-container" ref={ref}>
        <header>
          <CloseButton onClick={closeMenuModal} />
        </header>
        <main>
          {menusList.map((menu, key) => {
            return (
              <div
                key={key}
                className="menu-modal-lists"
                onClick={() => redirectPath(menu.name)}
              >
                <div className="left">
                  <p>{menu.name}</p>
                  {menu.hasNew && <NewStatus />}
                </div>
                {menu?.subList?.length > 0 && (
                  <img
                    src={getIcon()}
                    alt="minus-icon"
                    onClick={toggleShowCategory}
                  />
                )}
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
};
