import { FC, MouseEventHandler } from "react";
import "./Button.scss";
import chevron from "../../../assets/icons/chevron-right.svg";

type buttonProps = {
  value: string;
  isChevron: boolean;
  backgroundColor: string;
  onClick?: unknown;
  disabled?: boolean;
};
export const Button: FC<buttonProps> = ({
  value,
  isChevron,
  backgroundColor,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type="button"
      className={disabled ? "disabled button-container" : "button-container"}
      style={{
        backgroundColor: `${
          backgroundColor === "purple" ? "rgb(23,23,32)" : "#ffffff"
        }`,
        color: `${backgroundColor === "white" ? "#000000" : "#ffffff"}`,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
      {isChevron && <img src={chevron} alt="chevron-right" />}
    </button>
  );
};
