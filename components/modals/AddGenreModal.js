import React, { useRef } from 'react';
import axios from 'axios';
import {
  Modal, Card, Form, Button,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { useStore } from '../StoreProvider'


const AddGenreModal = ({ token }) => {
  const { modalsStore, genreStore } = useStore();

  const handleHideModal = () => {
    modalsStore.hideModal();
  };

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Required';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      title: '',
    },
    validate,
    onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
      // const url = routes.channelsPath();
      const data = {  ...values  };
      console.log(data)
      try {
        genreStore.addGenre(data, token)
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
  // const inputEl = useRef(null);
  const textBorderColorStyle = formik.errors.title ? { borderColor: 'red' } : null;

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
                  placeholder="Жанр"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...formik.getFieldProps('title')}
                  // ref={inputEl}
                  style={textBorderColorStyle}
                />
                {formik.touched.title && formik.errors.title ? (
                  <div>{formik.errors.title}</div>
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

export default AddGenreModal;