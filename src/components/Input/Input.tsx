import { ErrorMessage } from "formik";
import {
  InputComponent,
  InputComponentContainer,
  InputComponentLabel,
  ErrorMesage,
} from "./styles";
import { InputProps } from "./types";

function Input({
  name,
  type = "text",
  placeholder,
  label,
  onInputChange,
  value,
  error
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
      />
      <ErrorMesage>{error}</ErrorMesage>
    </InputComponentContainer>
  );
}

export default Input;
