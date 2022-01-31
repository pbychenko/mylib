import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Button, Form, Card } from 'react-bootstrap';
import axios from 'axios';
import cookies from 'js-cookie';

import React, { useRef } from 'react';
import { useRouter } from 'next/router'

import { useFormik } from 'formik';

const LoginForm = () => {
  const router = useRouter()
  const validate = (values) => {
    const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }

         if (!values.password) {
          errors.email = 'Required';
         }

         return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
      console.log('here')
      const url = 'http://127.0.0.1:3333/api/login';
      const data = {  ...values  };
      
      console.log(values)
      try {
        const resp = await axios.post(url, data);
        console.log(resp.data)
        setSubmitting(false);
        resetForm()
        const { token } = resp.data;
        // if (!cookies.get('token')) {
          cookies.set('token', token);
          
          router.push('/');
        // }
      } catch (er) {
        setSubmitting(true);
        setFieldError('email', 'ошибка сети' );
        // throw er;
        console.log(er)
      }
    },
  });
  const textBorderColorStyle = formik.errors.email ? { borderColor: 'red' } : null;

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="email"
          {...formik.getFieldProps('email')}
          style={textBorderColorStyle}
          className="mb-3"
        />
        <Form.Control
          className="mb-3"
          type="password"
          placeholder="password"
          {...formik.getFieldProps('password')}
          style={textBorderColorStyle}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null} 
      </Form.Group>
      <Button variant="primary" type="submit" block disabled={formik.isSubmitting}>Login</Button>
    </Form>
  );
};

export default LoginForm;