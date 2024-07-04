import { FC, useState } from "react";
import { CloseButton } from "../../components/CloseButton/CloseButton";
import { InputField } from "../../components/Forms/InputField/InputField";
import { Button } from "../../components/Forms/Button/Button";
import { toggleSignupModal } from "../../store/navbar/navbar";
import "./SignupModal.scss";
import signupImage from "../../assets/images/signup.webp";
import signupservices from "../../services/signupservices";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { SignupFormInterface } from "../../interfaces";
import Loading from "../../components/Loader/Loader";
import ToastMessage from "../../utils/toastify";
import axios from "axios";
import { toggleEmailVerificationModal } from "../../store/user/user";
import {
  setStoreFormValues,
  setStoreVerificationCode,
} from "../../store/signup/signup";

export const SignupModal: FC = () => {
  const initialValues: SignupFormInterface = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  //***********************************************************************************Methods *************** */
  const closeModal = () => {
    dispatch(toggleSignupModal(false));
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const sendEmailVerificationCode = async () => {
    try {
      setIsLoading(() => true);
      const res = await signupservices.emailVerificationCode({
        email: formValues.email,
      });
      dispatch(setStoreFormValues(formValues));
      dispatch(setStoreVerificationCode(res.data));
      setIsLoading(() => false);

      if (res.success) {
        dispatch(toggleEmailVerificationModal());
        closeModal();
      }
    } catch (error) {
      ToastMessage(
        "error",
        "Error while sending verification code. please check your internet connection."
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const has_errors = checkErrors(formValues);
    if (has_errors) return;

    try {
      const res = await signupservices.signupValidation(formValues);
      if (res.success) {
        sendEmailVerificationCode();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const error_names = Object.keys(error.response?.data?.data);
        if (error_names.length === 1) {
          setErrors({
            ...errors,
            [`${error_names}`]: error.response?.data?.data?.[`${error_names}`],
          });
          setIsLoading(() => false);
          return;
        }
        error_names.forEach((key) =>
          setErrors({
            ...errors,
            [`${key}`]: error.response?.data?.data?.[`${key}`],
          })
        );
        setIsLoading(() => false);
      } else ToastMessage("error", "Error while signing up.");
    }
  };

  const checkErrors = (formValues: SignupFormInterface) => {
    if (!formValues.first_name) {
      setErrors({ ...errors, ["first_name"]: "First name is required." });
      return true;
    }
    if (!formValues.last_name) {
      setErrors({ ...errors, ["last_name"]: "Last name is required." });
      return true;
    }
    if (!formValues.username) {
      setErrors({ ...errors, ["username"]: "Username is required." });
      return true;
    }
    if (!formValues.email) {
      setErrors({ ...errors, ["email"]: "Email is required." });
      return true;
    }
    if (!formValues.password) {
      setErrors({ ...errors, ["password"]: "Password is required." });
      return true;
    }
    if (!formValues.confirm_password) {
      setErrors({
        ...errors,
        ["confirm_password"]: "Confirm password is required.",
      });
      return true;
    }

    if (formValues.password !== formValues.confirm_password) {
      setErrors({
        ...errors,
        ["confirm_password"]: "Password and confirm password must match",
      });
      return true;
    }

    return false;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value) {
      setErrors({ ...errors, [name]: "" });
      return;
    }
    setErrors({ ...errors, [name]: `${name} is required.` });
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="left-container">
          <img src={signupImage} />
        </div>

        <div className="right-container">
          <header>
            <CloseButton onClick={closeModal} />
            <h2>Sign Up & Save 15% </h2>
            <p>Subscribe to our newsletter and enjoy 15% off.</p>
          </header>

          <form>
            <InputField
              placeholder="First name"
              type="text"
              name="first_name"
              value={formValues.first_name}
              onChange={handleChange}
              error={errors.first_name}
              onBlur={handleBlur}
            />
            <InputField
              placeholder="Last name"
              type="text"
              name="last_name"
              value={formValues.last_name}
              onChange={handleChange}
              error={errors.last_name}
              onBlur={handleBlur}
            />
            <InputField
              placeholder="Username"
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
              error={errors.username}
              onBlur={handleBlur}
            />
            <InputField
              placeholder="Email"
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              error={errors.email}
              onBlur={handleBlur}
            />
            <InputField
              placeholder="Password"
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              error={errors.password}
              onBlur={handleBlur}
            />
            <InputField
              placeholder="Confirm Password"
              type="password"
              name="confirm_password"
              value={formValues.confirm_password}
              onChange={handleChange}
              error={errors.confirm_password}
              onBlur={handleBlur}
            />
            <div className="button-section">
              <Button
                value="Sign Up"
                backgroundColor="purple"
                isChevron={false}
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};
