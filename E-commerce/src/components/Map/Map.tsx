import { FC } from "react";
import "./Map.scss";

export const Map: FC = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.3376556917556!2d85.31143737476357!3d27.73772957616507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19278376a845%3A0xf83eb40d38e6e46!2sNilam&#39;s%20Collection!5e0!3m2!1sen!2snp!4v1701089675745!5m2!1sen!2snp"
        width={"100%"}
        height="450"
        loading="lazy"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};
