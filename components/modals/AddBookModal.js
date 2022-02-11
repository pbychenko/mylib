import React, { useRef } from 'react';
import axios from 'axios';
import {
  Modal, Card, Form, Button,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { useStore } from '../StoreProvider'


const AddBookModal = ({ token }) => {
  const { modalsStore, authorsStore, booksStore, genresStore } = useStore();

  const handleHideModal = () => {
    modalsStore.hideModal();
  };

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.name = 'Required';
    }

    if (!values.about) {
      errors.about = 'Required';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      title: '',
      about: ''
    },
    validate,
    onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
      // const url = routes.channelsPath();
      const authorIds = values.authorIds.map(el => +el);
      const data = {  ...values, authorIds  };
      console.log(data)
      try {
        booksStore.addBook(data, token)
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
        <Modal.Title>Добавить книгу</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <Card>
          <Card.Body>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group  className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Название"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...formik.getFieldProps('title')}
                  // ref={inputEl}
                  style={textBorderColorStyle}
                  className="mb-3"
                />

                <Form.Control
                  type="text"
                  placeholder="О чем?"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...formik.getFieldProps('about')}
                  // ref={inputEl}
                  style={textBorderColorStyle}
                  className="mb-3"
                />

                <Form.Select
                 aria-label="Default select example"
                 {...formik.getFieldProps('genreId')}
                 className="mb-3"
                 >
                  <option>Open this select menu</option>
                  {genresStore.genres.map((genre) => 
                    (<option key={genre.id} value={genre.id}>{genre.title}</option>))
                  }
                </Form.Select>

                <Form.Select
                 aria-label="Default select example"
                 {...formik.getFieldProps('authorIds')}
                 multiple
                 >
                  <option>Open this select menu</option>
                  {authorsStore.authors.map((author) => 
                    (<option key={author.id} value={author.id}>{author.name} {author.last_name}</option>))
                  }
                </Form.Select>

                {formik.touched.title && formik.errors.title ? (
                  <div>{formik.errors.title}</div>
                ) : null}
                {formik.touched.about && formik.errors.about ? (
                  <div>{formik.errors.about}</div>
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