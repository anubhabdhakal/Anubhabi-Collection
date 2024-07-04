import { FC } from "react";
import "./Avatar.scss";

type AvatarProps = {
  name: string;
  photo_url: string;
  onClick?: () => void;
};
export const Avatar: FC<AvatarProps> = ({ name, onClick, photo_url }) => {
  const handleClick = () => {
    if (onClick) onClick();
  };
  return (
    <div className="avatar-container" onClick={handleClick}>
      <abbr title={name}>
        {!photo_url && (
          <div className="avatar-image-container">{name[0].toUpperCase()}</div>
        )}
        {photo_url && (
          <div className="avatar-photo-container">
            <img src={photo_url} id="profile-pic" alt="no" />
          </div>
        )}
      </abbr>
    </div>
  );
};
