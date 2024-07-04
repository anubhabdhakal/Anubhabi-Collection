import { FC, useState, useEffect } from "react";
import { MenuModal } from "./MenuModal/MenuModal";
import { SignupModal } from "./SignupModal/SignupModal";
import { SearchModal } from "./SearchModal/SearchModal";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { EmailVerificationModal } from "./EmailVerificationModal/EmailVerificationModal";
import { toggleSignupModal } from "../store/navbar/navbar";
export const AllModals: FC = () => {
  const dispatch = useAppDispatch();

  const isMenuModalOpen = useSelector(
    (state: any) => state.navbar.isMenuModalOpen
  );
  const isSearchModalOpen = useSelector(
    (state: any) => state.navbar.isSearchModalOpen
  );
  const isSignupModalOpen = useSelector(
    (state: any) => state.navbar.isSignupModalOpen
  );
  const isEmailVerificationModalOpen = useSelector(
    (state: any) => state.currentUser.isEmailVerificationModalOpen
  );
  const currentUser = useSelector(
    (state: any) => state.currentUser.currentuser
  );

  const showSignupModalForNewComers = () => {
    if (!currentUser.id) {
      setTimeout(() => {
        dispatch(toggleSignupModal(true));
      }, 15000);
    }
  };

  useEffect(() => {
    showSignupModalForNewComers();
  }, []);

  return (
    <div className="all-modals">
      {isMenuModalOpen && <MenuModal />}
      {isSearchModalOpen && <SearchModal />}
      {isSignupModalOpen && <SignupModal />}
      {isEmailVerificationModalOpen && <EmailVerificationModal />}
    </div>
  );
};
