import { FC } from "react";
import { NewStatus } from "../NewStatus/NewStatus";
import { useNavigate } from "react-router-dom";
import { SingleMenuProps } from "../../../interfaces";
import "./SingleMenu.scss";
import chevron from "../../../assets/icons/chevron-down.svg";

export const SingleMenu: FC<SingleMenuProps> = ({ name, hasNew, subList }) => {
  const redirect = useNavigate();

  const redirectPath = (path: string) => {
    if (subList) redirect(`/${path.toLowerCase()}/${subList[0]?.name}`);
    else redirect(`/${path.toLowerCase()}`);
  };
  return (
    <div className="main-menu-wrapper">
      <div className="single-menu">
        <div className="new-status">{hasNew && <NewStatus />}</div>
        <div className="menu-name">
          <span onClick={() => redirectPath(name)}>{name}</span>
          {subList && <img src={chevron} alt="chevron-down" />}
        </div>
        <div className="line"></div>
      </div>
      {subList !== undefined && <SubList lists={subList} name={name} />}
    </div>
  );
};

export const SubList: FC<{ lists: Array<{ name: string }>; name: string }> = ({
  lists,
  name,
}) => {
  const redirect = useNavigate();
  const changePath = (path: string) => {
    redirect(`/${name.toLowerCase()}/${path}`);
  };
  return (
    <div className="sub-list-container">
      {lists.map((list, index) => {
        return (
          <div key={index} className="single-page-list">
            <p onClick={() => changePath(list.name)}>{list.name}</p>
          </div>
        );
      })}
    </div>
  );
};
