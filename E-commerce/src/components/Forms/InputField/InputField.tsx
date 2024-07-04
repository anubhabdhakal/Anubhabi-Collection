import { FC } from "react";
import "./InputField.scss";

type inputFieldProps = {
  placeholder: string;
  type: string;
  value?: string;
  name: string;
  error?: string;
  onChange?: (e: unknown) => void;
  onBlur?: (e: unknown) => void;
  max?: number;
};
export const InputField: FC<inputFieldProps> = ({
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  name,
  error,
  max,
}) => {
  return (
    <>
      <div className="input-field">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          max={max}
        />
      </div>
      {error && <p className="error">{error}</p>}
    </>
  );
};
