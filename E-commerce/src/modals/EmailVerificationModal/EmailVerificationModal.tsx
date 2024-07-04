import { FC, useState } from "react";
import "./EmailVerificationModal.scss";
import { InputField } from "../../components/Forms/InputField/InputField";
import signupservices from "../../services/signupservices";
import { Button } from "../../components/Forms/Button/Button";
import ToastMessage from "../../utils/toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loader/Loader";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { toggleEmailVerificationModal } from "../../store/user/user";

export const EmailVerificationModal: FC = () => {
  const code = useSelector((state: any) => state.signup.code);
  const formValues = useSelector((state: any) => state.signup.formValues);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState();
  const redirect = useNavigate();
  const dispatch = useAppDispatch();
  const handleChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const checkEmailVerification = () => {
    if (Number(verificationCode) !== Number(code)) {
      setErrors("Invalid verification code.");
      return false;
    }
    return true;
  };

  const handleClick = (e) => {
    console.log("Clicked");
    if (!verificationCode) {
      setErrors("Verification Code is required.");
      return;
    } else if (Number(verificationCode) > 999999) {
      setErrors("Verification code lentgh must be 6 digits.");
      return;
    }

    const is_verified = checkEmailVerification();
    if (!is_verified) return;
    handleSubmit();
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(() => true);
      const res = await signupservices.signupRequest(formValues);
      setIsLoading(() => false);

      if (res.success) {
        ToastMessage("success", res.message);
        redirect("/login");
        dispatch(toggleEmailVerificationModal());
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrors(error.response?.data?.data);
        setIsLoading(() => false);
        return;
        //   error_names.forEach((key) =>
        //     setErrors({
        //       ...errors,
        //       [`${key}`]: error.response?.data?.data?.[`${key}`],
        //     })
        //   );
        //   setIsLoading(() => false);
        // } else ToastMessage("error", "Error while signing up.");
      }
    }
  };
  return (
    <div className="email-verification-modal-wrapper">
      <div className="email-verification-container">
        <header>
          <h2>Verify Your Account</h2>
          <div className="details">
            <p>We emailed you the six digit code to your email</p>
            <p>Enter the code below to confirm your email address</p>
          </div>
        </header>

        <div className="code-input-container">
          {/* <input type="text" /> */}
          <InputField
            value={verificationCode}
            type="number"
            name={"verification"}
            placeholder="XXXXXX"
            onChange={handleChange}
            max={999999}
            error={errors}
          />
        </div>
        <footer>
          <Button
            value="Submit"
            isChevron={false}
            backgroundColor="purple"
            onClick={handleClick}
          />
          <div className="details">
            <p>
              Didn't get a code. <span className="link">Resend code?</span>
            </p>
          </div>
        </footer>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};
