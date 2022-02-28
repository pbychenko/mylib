import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import cookies from 'js-cookie';

import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/router'

import { useFormik } from 'formik';



// const user = {name: 'Павел', email: 'cbpa@technodom.kz'}

const PersonalInfoForm = () => {
  const token = cookies.get('token');
  const { userStore } = useStore();
  const router = useRouter();

  let user;

  useEffect(() => {    
    if (token) {
      // console.log('before')
       user = fetchUser(token, userStore)
    }
  }, [])
  console.log('user', user)

  if (!user) {    
    // router.push('/genres');
    return null;
  }

  const validate = (values) => {
    const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }

         if (!values.name) {
          errors.name = 'Required';
         }

         return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: user.email,
      name: user.name,
    },
    validate,
    onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
      console.log('here')
      // const url = 'http://127.0.0.1:3333/api/login';
      const data = {  ...values  };
      console.log(data)
      // try {
      //   const resp = await axios.post(url, data);
      //   console.log(resp.data)
      //   setSubmitting(false);
      //   resetForm()
      //   // const { token } = resp.data;
      //   // // if (!cookies.get('token')) {
      //   //   cookies.set('token', token);
      //   //   // userStore.setIsAuth(true);
          
      //   //   router.push('/genres');
      //   // }
      // } catch (er) {
      //   setSubmitting(true);
      //   setFieldError('email', 'невалидные данные' );
      //   // throw er;
      //   console.log(er.message)
      // }
    },
  });
  const textBorderColorStyle = formik.errors.email ? { borderColor: 'red' } : null;
  

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row className="mb-3">
          <Form.Group as={Col}>
          <Form.Label>Имя</Form.Label>
          <Form.Control 
            placeholder="Ваше имя"
            value ={user.name}
            type="text"
            placeholder="имя"
            {...formik.getFieldProps('name')}
            style={textBorderColorStyle}
            value ={formik.values.name}
            onChange={formik.handleChange}
            className="mb-3"
          />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email"
              placeholder="Enter email"
              value={user.email}
              placeholder="Ваше имя"
              value ={user.email}
              type="email"
              placeholder="email"
              {...formik.getFieldProps('email')}
              style={textBorderColorStyle}
              onChange={formik.handleChange}
              value ={formik.values.email}
              className="mb-3"
            />
          </Form.Group>
          {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
          ) : null}
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null} 
      </Row>

      <Button variant="primary" type="submit" disabled={formik.isSubmitting}>Изменить</Button>
    </Form>
  );
};

export default PersonalInfoForm;