import { FC, useState } from "react";
import plusIcon from "../../assets/icons/plus.svg";
import minusIcon from "../../assets/icons/minus.svg";
import { SubscribeForm } from "./FooterSection";
import "./FooterSectionForMobile.scss";

export const FooterSectionForMobile: FC = () => {
  const infoList = ["Our Story", "FAQ", "Contact", "Return"];
  const collectionList = ["Bras", "Leggings", "Shorts", "Tank Tops", "Tees"];

  const [aboutUsCollapse, setAboutUsCollapse] = useState(false);
  const [infoCollapse, setInfoCollapse] = useState(false);
  const [collectionCollapse, setCollectionCollapse] = useState(false);
  const [subscribeCollapse, setSubscribeCollapse] = useState(false);

  const toggleAboutUsCollapse = () => {
    setAboutUsCollapse(!aboutUsCollapse);
  };
  const toggleInfoCollapse = () => {
    setInfoCollapse(!infoCollapse);
  };
  const toggleCollectionCollapse = () => {
    setCollectionCollapse(!collectionCollapse);
  };
  const toggleSubscribeCollapse = () => {
    setSubscribeCollapse(!subscribeCollapse);
  };
  return (
    <div className="footer-section-for-mobile">
      <div className="about-us-container container">
        <header onClick={toggleAboutUsCollapse}>
          <h3>About us</h3>
          <img src={aboutUsCollapse ? minusIcon : plusIcon} alt="plus" />
        </header>
        {aboutUsCollapse && (
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
        )}
      </div>
      <div className="info-container container">
        <header onClick={toggleInfoCollapse}>
          <h3>Info</h3>
          <img src={infoCollapse ? minusIcon : plusIcon} alt="plus" />
        </header>
        {infoCollapse && (
          <div className="content">
            {infoList.map((info) => (
              <p>{info}</p>
            ))}
          </div>
        )}
      </div>
      <div className="collection-container container">
        <header onClick={toggleCollectionCollapse}>
          <h3>Collection</h3>
          <img src={collectionCollapse ? minusIcon : plusIcon} alt="plus" />
        </header>
        {collectionCollapse && (
          <div className="content">
            {collectionList.map((info) => (
              <p>{info}</p>
            ))}
          </div>
        )}
      </div>
      <div className="subscribe-container container">
        <header onClick={toggleSubscribeCollapse}>
          <h3>Sign Up & Save 15%</h3>
          <img src={subscribeCollapse ? minusIcon : plusIcon} alt="plus" />
        </header>
        {subscribeCollapse && (
          <div className="content">
            <SubscribeForm />
          </div>
        )}
      </div>
    </div>
  );
};
