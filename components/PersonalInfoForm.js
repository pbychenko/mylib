import { useStore } from './StoreProvider';
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import cookies from 'js-cookie';
import { useFormik } from 'formik';
import routes from '../routes';

const PersonalInfoForm = () => {
  const { userStore } = useStore();
  const token = cookies.get('token');

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Заполните это поле';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Это не email';
    }

    if (!values.fullName) {
      errors.fullName = 'Заполните это поле';
    } else if (values.fullName.length < 2) {
      errors.fullName = 'Имя должен быть подлиннее';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: userStore.currentUser.email,
      fullName: userStore.currentUser.full_name,
    },
    validate,
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      const url = routes.userPath(userStore.currentUser.id);
      const data = { ...values };
      try {
        const { data: id } = await axios.patch(url, data,  { headers: { Authorization: `Bearer ${token}` } });
        userStore.setCurrentUser(id);
        setSubmitting(false);
      } catch (er) {
        setSubmitting(true);
        setFieldError('connection', 'Ошибка сети');
        console.log(er);
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
            className="mb-3"
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div>{formik.errors.fullName}</div>
          ) : null}
        </Form.Group>           
        <Form.Group as={Col}>
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email"
            placeholder="Ваш email"
            type="email"
            {...formik.getFieldProps('email')}
            style={textBorderColorStyle}
            className="mb-3"
          />
          {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
          ) : null}
        </Form.Group>                    
      </Row>
      {formik.errors.connection ? (
          <div>{formik.errors.connection}</div>
      ) : null}
      <Button variant="primary" type="submit" disabled={formik.isSubmitting}>Изменить</Button>
    </Form>
  );
};

export default PersonalInfoForm;