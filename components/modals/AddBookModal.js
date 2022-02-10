import React, { useRef } from 'react';
import axios from 'axios';
import {
  Modal, Card, Form, Button,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { useStore } from '../StoreProvider'


const AddBookModal = ({ token }) => {
  const { modalsStore, authorsStore } = useStore();

  const handleHideModal = () => {
    modalsStore.hideModal();
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: ''
    },
    validate,
    onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
      // const url = routes.channelsPath();
      const data = {  ...values  };
      console.log(data)
      try {
        authorsStore.addAuthor(data, token)
        setSubmitting(false);
        modalsStore.hideModal();
        resetForm();
      } catch (er) {
        setSubmitting(true);
        setFieldError('name', 'networkError');
        throw er;
      }
    },
  });
  
  const textBorderColorStyle = formik.errors.name ? { borderColor: 'red' } : null;

  return (
    <Modal
      show
      onHide={handleHideModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation
      // onEntered={() => inputEl.current.focus()}
    >
      <Modal.Header closeButton>
        <Modal.Title>Добавить жанр</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <Card>
          <Card.Body>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group  className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Имя"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...formik.getFieldProps('name')}
                  // ref={inputEl}
                  style={textBorderColorStyle}
                  className="mb-3"
                />
                <Form.Control
                  type="text"
                  placeholder="Фамилия"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...formik.getFieldProps('lastName')}
                  // ref={inputEl}
                  style={textBorderColorStyle}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>
                ) : null}
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div>{formik.errors.lastName}</div>
                ) : null}
              </Form.Group>
              <Button variant="primary" type="submit"  disabled={formik.isSubmitting}>Добавить</Button>
            </Form>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );
};

export default AddBookModal;