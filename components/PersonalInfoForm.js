import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import cookies from 'js-cookie';

import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import { useFormik } from 'formik';

// const fetchUser = async (t, store) => {
//   try {
//     const user = (await axios.get('http://localhost:3333/api/profile', { headers: { Authorization: `Bearer ${t}` }})).data;
//     console.log('asss', user);
//     store.setIsAuth(true);
//     store.setCurrentUser(user);
//   } catch (e) {
//     console.log('asss', e);
//     store.setIsAuth(false);
//   }
// }

// const user = {name: 'Павел', email: 'cbpa@technodom.kz'}

const PersonalInfoForm = observer(() => {
  // const router = useRouter();
  const { userStore } = useStore();
  // const user = userStore.currentUser;
  // console.log('ss', { ...user})
  const token = cookies.get('token');
  // let user;

  // useEffect(() => {
  //   if (!token) {
  //     router.push('/');
  //   }  
  //   // if (token) {
  //     // console.log('before')
  //     fetchUser(token, userStore)
  //     const user = userStore.currentUser
  //     if (!user) {
  //       router.push('/');
  //     }
  //   // }    
    
  // }, []); 
  // console.log('user', user)
  // if (isLoading) return <p>Loading...</p>
  // const user = userStore.currentUser
  // console.log('user', user)
  // if (!user) {
  //   router.push('/');
  // }

  const validate = (values) => {
    const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

      if (!values.fullName) {
        errors.fullName = 'Required';
      }

      return errors;
  };
  const formik = useFormik({
    initialValues: {
      // email: user.email,
      // fullName: user.full_name,
      email: userStore.currentUser.email,
      fullName: userStore.currentUser.full_name,
    },
    validate,
    onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
      // console.log('here')
      const url = `http://127.0.0.1:3333/api/users/${userStore.currentUser.id}`;
      const data = {  ...values  };
      console.log('formdata',data)
      try {
        const resp = await axios.patch(url, data,  { headers: { Authorization: `Bearer ${token}` } });
        userStore.setCurrentUser(resp.data)
        console.log(resp.data)
        setSubmitting(false);
        // resetForm()
        // const { token } = resp.data;
        // // if (!cookies.get('token')) {
        //   cookies.set('token', token);
        //   // userStore.setIsAuth(true);
          
        //   router.push('/genres');
        // }
      } catch (er) {
        setSubmitting(true);
        setFieldError('email', 'невалидные данные' );
        setFieldError('fullName', 'невалидные данные' );
        // throw er;
        console.log(er.message)
      }
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
            type="text"
            {...formik.getFieldProps('fullName')}
            style={textBorderColorStyle}
            value ={formik.values.fullName}
            onChange={formik.handleChange}
            className="mb-3"
          />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email"
              placeholder="Enter email"
              placeholder="Ваше имя"
              // value ={user.email}
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
          {formik.touched.fullName && formik.errors.fullName ? (
            <div>{formik.errors.fullName}</div>
          ) : null} 
      </Row>

      <Button variant="primary" type="submit" disabled={formik.isSubmitting}>Изменить</Button>
    </Form>
  );
});

export default PersonalInfoForm;