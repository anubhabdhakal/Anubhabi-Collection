import { FC, useState } from "react";
import closeIcon from "../../assets/icons/close.svg";
import minusIcon from "../../assets/icons/minus.svg";

type closeButtonProps = {
  onClick: () => void;
};
export const CloseButton: FC<closeButtonProps> = ({ onClick }) => {
  const [closeButton, setCloseButton] = useState(closeIcon);
  const getCloseButton = () => {
    return closeButton;
  };
  const hoverOnCloseButton = () => {
    if (closeButton === closeIcon) setCloseButton(minusIcon);
    else setCloseButton(closeIcon);
  };
  return (
    <div className="close-button-container">
      <img
        src={getCloseButton()}
        alt="close-icon"
        onMouseEnter={hoverOnCloseButton}
        onMouseLeave={hoverOnCloseButton}
        onClick={onClick}
      />
    </div>
  );
};
