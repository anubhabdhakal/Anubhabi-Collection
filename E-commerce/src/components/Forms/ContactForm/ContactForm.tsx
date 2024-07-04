import { FC } from "react";
import "./ContactForm.scss";
import { InputField } from "../InputField/InputField";
import { Button } from "../Button/Button";
export const ContactForm: FC = () => {
  return (
    <div className="contact-form-container">
      <header>
        <h3> Got Any Questions ?</h3>
        <p>Use the form below to get in touch with the sales team</p>
      </header>
      <form>
        <div className="first-row field">
          <div className="name ">
            <InputField type="text" placeholder="Name" name="name" />
          </div>
          <div className="email">
            <InputField type="email" placeholder="Email*" name="email" />
          </div>
        </div>
        <div className="phone-number field">
          <InputField type="number" placeholder="Phone Number" name="phone" />
        </div>
        <div className="message field">
          <textarea placeholder="Message" />
        </div>
        <Button value="Send" isChevron={true} backgroundColor="purple" />
      </form>
    </div>
  );
};
