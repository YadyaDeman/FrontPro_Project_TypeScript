import { useFormik } from 'formik';
import Input from "components/Input/Input";
import { CardFormComponent, Checkbox, CheckboxContainer, CheckboxLabel, EmployeeFormComponent, FormWrapper } from "./styles";
import { EmployeeFormValues } from './types';
import Button from 'components/Button/Button';
import { useState } from 'react';

function EmployeeForm() {
  const [formValues, setFormValues] = useState<EmployeeFormValues> ({name: "",
  surname: "",
  age: "",
  position: "",
  agreement: false});

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      age: '',
      position: '',
      agreement: false
    } as EmployeeFormValues,
    onSubmit: (values: EmployeeFormValues) => {
      console.table(values) 
      //console.log(`Form values: ${values.name}, ${values.surname}, ${values.age}, ${values.position}, ${values.agreement}`)
    }
  });

  return <FormWrapper>
  <EmployeeFormComponent onSubmit={formik.handleSubmit}>
    <Input
      name="name"
      placeholder="Please, enter your name"
      label="Name"
      onInputChange={formik.handleChange}
      value={formik.values.name}
    />
    <Input
      name="surname"
      placeholder="Please, enter your surname"
      label="Surname"
      onInputChange={formik.handleChange}
      value={formik.values.surname}
    />
    <Input
      name="age"
      placeholder="Please, enter your age"
      label="Age"
      onInputChange={formik.handleChange}
      value={formik.values.age}
    />
    <Input
      name="position"
      placeholder="Please, enter your position"
      label="Position"
      onInputChange={formik.handleChange}
      value={formik.values.position}
    />
    <CheckboxContainer>
      <Checkbox
        id='agreement-id'
        name='agreement'
        type='checkbox'
        onChange={formik.handleChange}
        checked={formik.values.agreement}
      />
      <CheckboxLabel htmlFor='agreement-id'>Please click hier</CheckboxLabel>
    </CheckboxContainer>
    <Button type="submit" name="Create" disabled={!formik.values.agreement} />
  </EmployeeFormComponent>

<CardFormComponent> 
     <p> DataName</p>
     <p> DataSurname</p>
     <p> DataAge</p>
     <p> DataPosition</p>

</CardFormComponent>
</FormWrapper>


}


export default EmployeeForm;


{/* Sozdaem galochku - Checkbox
<Checkbox 
        name="agreement" 
        type="checkbox" 
        onChange={formik.handleChange} 
        checked={formik.values.agreement} />  */}

