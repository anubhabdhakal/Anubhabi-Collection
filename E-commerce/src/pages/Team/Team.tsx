import { FC } from "react";
import anubhabi from "../../assets/images/anubhabi.jpeg";
import "./Team.scss";
import "animate.css";
export const Team: FC = () => {
  return (
    <div className="team-page-wrapper">
      <header>
        '<p>Top Team</p>
        <h2>Team Of Highly</h2>
      </header>
      <main>
        <img
          src={anubhabi}
          alt="CEO"
          className="animate__animated animate__fadeInLeft"
        />
        <div className="info">
          <p className="name">Anubhabi Dhakal</p>
          <p id="position">CEO,Developer</p>
        </div>
      </main>
    </div>
  );
};
