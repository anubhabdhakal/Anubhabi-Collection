import { FC, useState } from "react";
import "./Login.scss";
import { Logo } from "../../components/Logo/Logo";
import lockIcon from "../../assets/icons/lock.svg";
import { loginRequest } from "../../services/loginservices";
import axios from "axios";
import Loading from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
export const Login: FC = () => {
  return (
    <div className="login-container">
      <header>
        <Logo name="Anubhabi Collection" />
      </header>
      <div className="login-level">
        <div className="left-container">
          <img src={lockIcon} alt="lock" />
          <p>Select your status</p>
        </div>
        <div className="right-container">
          <button>Customer</button>
          <button className="active-button">Admin</button>
        </div>
      </div>

      <LoginForm />
    </div>
  );
};

export const LoginForm: FC = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const redirect = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(() => true);
      await loginRequest(formValues);
      setIsLoading(() => false);
      redirect("/home");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setIsLoading(() => false);
        setErrors(JSON.parse(error.request.response).message);
      }
      console.log(error);
    }
  };

  return (
    <div className="login-form-container">
      <header>
        <p>Login to Your Account</p>
        {errors && <p className="error">{errors}</p>}
      </header>

      <form onSubmit={handleSubmit}>
        <div className="email-container container">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            value={formValues.email}
            name="email"
            onChange={handleChange}
            required
            autoComplete="false"
          />
        </div>
        <div className="password-container container">
          <label htmlFor="passsword">Password : </label>
          <input
            type="password"
            value={formValues.password}
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="button">
          <button type="submit" className="active-button">
            Login
          </button>
        </div>
      </form>
      {isLoading && <Loading />}
    </div>
  );
};
