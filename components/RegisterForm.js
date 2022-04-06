import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import routes from '../routes';

const RegisterForm = () => {
  const router = useRouter();

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Заполните это поле';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Это не email';
    }

    if (!values.password) {
      errors.password = 'Заполните это поле';
    } else if (values.password.length < 2) {
      errors.password = 'Пароль должен быть подлиннее';
    }

    if (!values.name) {
      errors.name = 'Заполните это поле';
    } else if (values.name.length < 2) {
      errors.name = 'Имя должен быть подлиннее';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',      
    },
    validate,
    onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
      const url = routes.registerPath();
      const data = {  ...values  };
      try {
        const resp = await axios.post(url, data);
        setSubmitting(false);
        resetForm();
        const { token } = resp.data;
        cookies.set('token', token);        
        router.push('/');
      } catch (er) {
        setSubmitting(true);
        setFieldError('connection', 'Проблемы с сетью');
        console.log(er);
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
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>          
        ) : null}
        <Form.Control
          type="email"
          placeholder="email"
          {...formik.getFieldProps('email')}
          style={textBorderColorStyle}
          className="mb-3"
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <Form.Control
          className="mb-3"
          type="password"
          placeholder="password"
          {...formik.getFieldProps('password')}
          style={textBorderColorStyle}
        />        
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>          
        ) : null}         
      </Form.Group>
      {formik.errors.connection ? (
        <div>{formik.errors.connection}</div>
      ) : null}
      <Button variant="primary" type="submit" disabled={formik.isSubmitting}>Login</Button>
    </Form>
  );
};

export default RegisterForm;