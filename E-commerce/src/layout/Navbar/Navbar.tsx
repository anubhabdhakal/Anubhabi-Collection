import { FC } from "react";
import "./Navbar.scss";
import { Logo } from "../../components/Logo/Logo";
import { MenusList } from "../../components/Menu/MenuList";
import { FeaturesList } from "../../components/FeaturesList/FeaturesList";

export const Navbar: FC = () => {
  return (
    <div className="navbar-container">
      <MenusList />
      <Logo name="Anubhabi Collection" />
      <FeaturesList />
    </div>
  );
};
