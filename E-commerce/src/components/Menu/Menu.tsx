import { FC } from "react";
import { SingleMenu } from "./SingleMenu/SingleMenu";

type MenuProps = {
  menusList: Array<{
    name: string;
    hasNew?: boolean;
    subList?: Array<{ name: string }>;
  }>;
};
export const MenuForDesktop: FC<MenuProps> = ({ menusList }) => {
  return (
    <div className="main-menu-container">
      {menusList.map((menu, index) => (
        <SingleMenu
          name={menu.name}
          hasNew={menu.hasNew}
          key={index}
          subList={menu.subList}
        />
      ))}
    </div>
  );
};
