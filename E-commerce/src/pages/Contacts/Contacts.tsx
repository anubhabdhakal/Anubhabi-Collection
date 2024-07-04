import { FC } from "react";
import "./Contacts.scss";
import { ContactForm } from "../../components/Forms/ContactForm/ContactForm";
import { Information } from "../../components/Information/Information";
import locationIcon from "../../assets/icons/location.svg";
import callIcon from "../../assets/icons/call.svg";
import openIcon from "../../assets/icons/open.svg";
import emailIcon from "../../assets/icons/email.svg";

import { Map } from "../../components/Map/Map";
export const Contacts: FC = () => {
  const contactInformation = [
    {
      image: locationIcon,
      header: "Address",
      contentList: [{ content: "Asan, Kathmandu" }],
    },
    {
      image: callIcon,
      header: "Call Us",
      contentList: [{ content: "(+977) 9813532131" }],
    },
    {
      image: openIcon,
      header: "Open",
      contentList: [{ content: "Monday - Friday: 9am - 7pm" }],
    },
    {
      image: emailIcon,
      header: "Emails",
      contentList: [
        { content: "anubhabisharma@gmail.com" },
      ],
    },
  ];
  return (
    <div className="contacts-page-wrapper">
      <div className="upper-container">
        <div className="form-section">
          <ContactForm />
        </div>
      </div>
      <div className="lower-container">
        <Information infoList={contactInformation} />
      </div>
    </div>
  );
};
