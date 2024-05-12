import styled from "@emotion/styled";

export const EmployeeFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 590px;
  height: fit-content;
  background: #02E33C;
  padding: 60px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
`

export const Checkbox = styled.input`
  width: 25px;
  height: 25px;
  gap: 10px;
`

export const CheckboxLabel = styled.label`
font-size: 25px;
gap: 10px;
`

export const CheckboxContainer = styled.div`
display: flex;
align-items: center;
gap: 10px;
`