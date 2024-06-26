import styled from "@emotion/styled";
interface ButtonComponentProps {
  disabled: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 20px;
  //background-color: #1f27f5;
  background-color: ${({ disabled }) => (disabled ? "grey" : "#1f27f5")};
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

/* .main-button {
  width: 300px;
  padding: 20px 30px;
  font-size: 28px;
  color: aliceblue;
  border: none;
  border-radius: 4px;
}

.primary-button {
  background: rgb(21, 56, 79);
}

.secondary-button {
  background: rgb(21, 79, 44);
} */
