import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { decodeToken } from "react-jwt";
import { setCurrentUser } from "../store/user/user";
import { useAppDispatch } from "./useAppDispatch";

export const useCurrentUser = () => {
  const user = useSelector((state: RootState) => state.currentUser.currentuser);
  const [currentUser] = useState(user);
  const dispatch = useAppDispatch();
  const getCurrentUser = () => {
    const access_token = localStorage.getItem("access_token");
    if (!access_token) return;
    const payload = decodeToken(access_token);
    dispatch(setCurrentUser(payload));
  };

  useLayoutEffect(() => {
    getCurrentUser();
  }, []);

  return { currentUser };
};
