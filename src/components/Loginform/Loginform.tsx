import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { LoginFormComponent, LoginFormName, InputsContainer } from "./styles";
import { useFormik } from "formik";
import { LoginFormValues, LOGIN_FIELD_NAMES } from './types';
import * as Yup from 'yup';

function LoginForm() {
const schema = Yup.object().shape({
  [LOGIN_FIELD_NAMES.EMAIL]:Yup.string().required("Field email required").email('Field type email'),
  //[LOGIN_FIELD_NAMES.PASSWORD]:Yup.string().required("Field password required"),
  //настройка пароля
  [LOGIN_FIELD_NAMES.PASSWORD]:Yup.number().
  typeError('Password must be number')
  .required("Field password required")
  .max(10, 'Max 10 symbols')
  .min(3, 'Min 3 symbols')
})

  // сохранение возвращаемого useFormik значения в переменную formik
  const formik = useFormik({
    initialValues: {
      [LOGIN_FIELD_NAMES.EMAIL]: "",
      [LOGIN_FIELD_NAMES.PASSWORD]: "",
    } as LoginFormValues,
    validationSchema: schema,
    //чтобы сразу кидал ошибку при посещении сайта LOGINFORMA -> validateOnMount: true,
    //чтобы не реагировал submit validaziya- при написании, а только по кнопке Login -> validateOnChange: false,
    validateOnChange: false,
//Blur фокусируется на поле
    validateOnBlur: true,
    onSubmit: (values: LoginFormValues) => {
      console.log(values);    },
  });
  console.log(formik);

  return (
    //привязываем к элементу формы действие submit
    <LoginFormComponent onSubmit={formik.handleSubmit}>
      <LoginFormName>Login form</LoginFormName>
      <InputsContainer>
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          onInputChange={formik.handleChange}
          value={formik.values[LOGIN_FIELD_NAMES.EMAIL]}
          error={formik.errors[LOGIN_FIELD_NAMES.EMAIL]}
          onBlur={formik.handleBlur}
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          onInputChange={formik.handleChange}
          value={formik.values[LOGIN_FIELD_NAMES.PASSWORD]}
          error={formik.errors[LOGIN_FIELD_NAMES.PASSWORD]}
          onBlur={formik.handleBlur}

        />
      </InputsContainer>
      <Button type="submit" name="Login" />
    </LoginFormComponent>
  );
}

export default LoginForm;
