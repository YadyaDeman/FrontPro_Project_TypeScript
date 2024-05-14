import { ErrorMessage } from "formik";
import {
  InputComponent,
  InputComponentContainer,
  InputComponentLabel,
  ErrorMesage,
} from "./styles";
import { InputProps } from "./types";
import { boolean } from "yup";

function Input({
  name,
  type = "text",
  placeholder,
  label,
  onInputChange,
  value,
  error,
  onBlur
}: InputProps) {

  return (
    <InputComponentContainer>
      <InputComponentLabel>{label}</InputComponentLabel>
      <InputComponent
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
        value={value}
        onBlur={onBlur}
      />
      <ErrorMesage>{error}</ErrorMesage>
    </InputComponentContainer>
  );
}

export default Input;
