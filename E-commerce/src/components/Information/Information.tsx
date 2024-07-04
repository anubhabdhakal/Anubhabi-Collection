import { FC } from "react";
import "./Information.scss";
import { informationProps } from "../../interfaces";
import { ContactCardProps } from "../../interfaces";

export const Information: FC<informationProps> = ({ infoList }) => {
  return (
    <div className="contact-info-container">
      {infoList.map((info) => {
        return (
          <ContactCard
            image={info.image}
            header={info.header}
            contentList={info.contentList}
          />
        );
      })}
    </div>
  );
};

export const ContactCard: FC<ContactCardProps> = ({
  image,
  header,
  contentList,
}) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={image} alt={header} />
      </div>
      <div className="content-wrapper">
        <h3>{header}</h3>
        <div className="content">
          {contentList.map((content) => {
            return <p>{content.content}</p>;
          })}
        </div>
      </div>
    </div>
  );
};
