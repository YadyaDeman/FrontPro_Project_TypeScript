import { TextAreaContainer } from "./styles";
import { TextAreaProps } from "./types";



function TextArea({placeholder, name, label}: TextAreaProps) {
    return (
        <TextAreaContainer>
            <label>{label}</label>
            <textarea placeholder={placeholder} name={name}></textarea>
        </TextAreaContainer>
    )
}

export default TextArea;