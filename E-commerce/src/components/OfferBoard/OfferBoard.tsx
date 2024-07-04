import { FC } from "react";
import "./OfferBoard.scss";
import { BoardTitleProps } from "../../interfaces";

export const OfferBoard: FC = () => {
  return (
    <div className="offer-board-container">
      <BoardTitle title="Free Shipping on order over $76" linkName="Shop now" />
    </div>
  );
};

export const BoardTitle: FC<BoardTitleProps> = ({
  title,
  linkName,
  linkTo,
}) => {
  const handleClick = () => {
    if (linkTo && linkName) linkTo(linkName);
  };
  return (
    <div className="board-title">
      <h3>
        {title}
        <span id="link" onClick={handleClick}>
          {linkName}
        </span>
      </h3>
    </div>
  );
};
