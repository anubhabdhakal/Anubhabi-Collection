import { FC } from "react";
import "./Payment.scss";
import esewa from "../../assets/icons/esewa.png";
import khalti from "../../assets/icons/khalti.png";
export const Payment: FC = () => {
  return (
    <div className="payment-container">
      <div className="payment-applications">
        <abbr title="esewa">
          <img src={esewa} alt="esewa" />
        </abbr>
        <abbr title="khalti">
          {" "}
          <img src={khalti} alt="khalti" />
        </abbr>
      </div>
      <p>Payment Method</p>
    </div>
  );
};
