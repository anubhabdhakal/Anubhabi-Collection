import { FC } from "react";
import "./Logo.scss";

export const Logo: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="logo-container">
      <img
        src={
          "https://img.freepik.com/premium-vector/letter-logo-creative-logo-initial-symbol-vector_791288-148.jpg"
        }
      />
      <h3>{name}</h3>
    </div>
  );
};
