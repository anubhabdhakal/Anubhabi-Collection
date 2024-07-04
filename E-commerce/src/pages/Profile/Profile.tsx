import { FC, useRef } from "react";
import "./Profile.scss";
import plusBlack from "../../assets/icons/plus.svg";
import { Avatar } from "../../components/Avatar/Avatar";
import { InputField } from "../../components/Forms/InputField/InputField";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Button } from "../../components/Forms/Button/Button";
import { useCurrentUser } from "../../hooks/useCurrentUser";
export const Profile: FC = () => {
  useCurrentUser();
  const currentUser = useSelector(
    (state: any) => state.currentUser.currentuser
  );
  const inputRef = useRef();

  const addPhoto = (e) => {
    inputRef?.current?.click();
  };

  const uploadPhoto = (e) => {
    console.log(e.target.value);
  };
  console.log(currentUser);

  return (
    <div className="profile-page-wrapper">
      <div className="profile-page-container">
        {/* <div className="left-container">
          <p>Personal Information</p>
        </div> */}
        <div className="right-container">
          <ProfilePicture
            onClick={addPhoto}
            name={currentUser.first_name}
            photo_url=""
          />
          <PersonalInformation user={currentUser} />
          <input
            id="photo-input"
            type="file"
            ref={inputRef}
            onChange={uploadPhoto}
          />
        </div>
      </div>
    </div>
  );
};

export const ProfilePicture: FC<{
  onClick: (e) => void;
  photo_url: string;
  name: string;
}> = ({ onClick, name, photo_url }) => {
  return (
    <div className="profile-picture-container">
      <h2>Profile Picture</h2>
      <div className="picture-container">
        <div className="image-section">
          <div className="image-part">
            <img src={plusBlack} alt="plus" onClick={onClick} />
          </div>
          <Avatar name={name} photo_url={photo_url} />
        </div>
        <p>Upload a picture in BMP, JPG, JPEG, or PNG format</p>
      </div>
    </div>
  );
};

interface personalInformationProps {
  user: {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
  };
}
export const PersonalInformation: FC<personalInformationProps> = ({ user }) => {
  console.log("The current user is", user.username);
  return (
    <div className="personal-information-section">
      <div className="personal-info-section">
        <p>Username</p>
        <InputField placeholder="" type="text" value={user.username} />
      </div>
      <div className="personal-info-section">
        <p>First name</p>
        <InputField placeholder="" type="text" value={user.first_name} />
      </div>
      <div className="personal-info-section">
        <p>Last Name</p>
        <InputField placeholder="" type="text" value={user.last_name} />
      </div>
      <div className="personal-info-section">
        <p>Email</p>
        <InputField placeholder="" type="email" value={user.email} />
      </div>
      <div className="save-container">
        <Button value="Save" backgroundColor="purple" isChevron={false} />
      </div>
    </div>
  );
};
