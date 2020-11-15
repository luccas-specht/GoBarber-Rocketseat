import React from "react";

import { useHistory, Link } from 'react-router-dom';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { useFormik } from "formik";
import * as Yup from 'yup'

import { useAuth } from '../../../../../hooks'

 import { InputText, InputPassword, Button } from '../../../../components';
 import { Form, Title, CreateAccount } from './form-login.component.style';

import { validationMsg } from '../../../../../constants'
interface LoginFormData {
  email: string;
  password: string;
}

const FormLogin = () => {
  const history = useHistory();
  const { authentication } = useAuth();

  const initialValues = {
    email: '',
    password: ''
  } as LoginFormData
  
  const validations = Yup.object().shape({
    email: Yup.string()
      .required(validationMsg.loginRequiredEmail)
      .email(validationMsg.validEmail),
    password: Yup.string()
      .required(validationMsg.loginRequiredPassword)
      .min(6, validationMsg.min6Char)
  });

  const onLogin = async ({ email, password }: LoginFormData): Promise<void> => {
    try {
       const response = await authentication(email, password);
       console.log('reponse', response);
      history.push('/');
    } catch (err) {
      console.log('error', err)
    };
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validations,
    onSubmit: (values: LoginFormData) => {
      onLogin(values)
    }
  });
 
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
       <Title>Faça seu Login</Title>
          <InputText
            icon={<FiMail size={20} />}
            id="email"
            name="email"
            placeholder='E-mail'
            dataSelector='login_login'
            value={formik.values.email}
            error={formik.errors.email}
            onChange={formik.handleChange}
          />    
          <InputPassword
             icon={<FiLock size={20} />}
             id="password"
             name="password"
             placeholder='Senha'
             value={formik.values.password}
             onChange={formik.handleChange}
          />

        <Button type='submit' title='Entrar' />
        <Link to='forgot'>Esqueci a minha senha</Link>
      </Form>

      <CreateAccount to='sing-up'>
          <FiLogIn />
          Criar conta
        </CreateAccount>
    </>
  );
};

export {FormLogin};