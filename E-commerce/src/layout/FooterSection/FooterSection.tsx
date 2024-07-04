import { FC } from "react";
import { InputField } from "../../components/Forms/InputField/InputField";
import { Button } from "../../components/Forms/Button/Button";
import { FooterSectionForMobile } from "./FooterSectionForMobile";
import { Payment } from "../../components/Payment/Payment";
import "./FooterSection.scss";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import tiktok from "../../assets/icons/tiktok.svg";

export const FooterSection: FC = () => {
  const infoList = ["Our Story", "FAQ", "Contact", "Return"];
  const collectionList = ["Bras", "Leggings", "Shorts", "Tank Tops", "Tees"];
  return (
    <div className="footer-section-wrapper">
      <div className="footer-for-desktop">
        <div className="about-us-container container">
          <h3>About us</h3>
          <div className="content">
            <p>
              Anubhabi Collection is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essential
            </p>
          </div>
        </div>
        <div className="info-container container">
          <h3>Info</h3>
          <div className="content">
            {infoList.map((info) => (
              <p>{info}</p>
            ))}
          </div>
        </div>
        <div className="collections-container container">
          <h3>Container</h3>
          <div className="content">
            {collectionList.map((info) => (
              <p>{info}</p>
            ))}
          </div>
        </div>
        <div className="subscribe-container container">
          <h3>Sign Up & Save 15%</h3>
          <SubscribeForm />
        </div>
      </div>
      <div className="footer-for-mobile">
        <FooterSectionForMobile />
      </div>
      <Payment />
      <CopyRight />
    </div>
  );
};

export const SubscribeForm: FC = () => {
  return (
    <div className="subscribe-form">
      <p>Get a 15% discount on your first order.</p>
      <InputField type="email" placeholder="Your email" />
      <Button value="Subscribe" isChevron={false} backgroundColor="purple" />
      <div className="social-media-links">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={tiktok} alt="tiktok" />
      </div>
    </div>
  );
};

export const CopyRight = () => {
  return (
    <div className="copyright">
      <p>&copy; All rights are reserved.</p>
    </div>
  );
};
