import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Button, Form, Card } from 'react-bootstrap';
import axios from 'axios';
import cookies from 'js-cookie';

import React, { useRef } from 'react';
import { useRouter } from 'next/router'

import { useFormik } from 'formik';

const RegistrationForm = () => {
  const { userStore } = useStore();
  const router = useRouter();

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
          errors.password = 'Required';
         }

         if (!values.name) {
          errors.name = 'Required';
         }

         return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: ''
    },
    validate,
    onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
      const url = 'http://127.0.0.1:3333/api/register';
      const data = {  ...values  };
      try {
        const resp = await axios.post(url, data);
        // console.log(resp.data)
        setSubmitting(false);
        resetForm()
        const { token } = resp.data;
        // if (!cookies.get('token')) {
          cookies.set('token', token);
          // userStore.setIsAuth(true);
          
          router.push('/genres');
        // }
      } catch (er) {
        setSubmitting(true);
        setFieldError('email', 'невалидные данные' );
        // throw er;
        console.log(er.message)
      }
    },
  });
  const textBorderColorStyle = formik.errors.email ? { borderColor: 'red' } : null;

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="имя"
          {...formik.getFieldProps('name')}
          style={textBorderColorStyle}
          className="mb-3"
        />
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
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>          
        ) : null} 
      </Form.Group>
      <Button variant="primary" type="submit" block disabled={formik.isSubmitting}>Login</Button>
    </Form>
  );
};

export default RegistrationForm;