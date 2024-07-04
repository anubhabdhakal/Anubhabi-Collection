import { FC } from "react";
import "./Loader.scss";

const Loading: FC = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
