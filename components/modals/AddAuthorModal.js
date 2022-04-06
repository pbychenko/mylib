import {
  Modal, Card, Form, Button,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { useStore } from '../StoreProvider'


const AddAuthorModal = ({ token }) => {
  const { modalStore, authorStore } = useStore();

  const handleHideModal = () => {
    modalStore.hideModal();
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Заполните это поле';
    } else if (values.name.length < 3) {
        errors.name = 'Имя должно быть подлиннее';
    }

    if (!values.lastName) {
      errors.lastName = 'Заполните это поле';
    } else if (values.lastName.length < 3) {
      errors.lastName = 'Фамилия должна быть подлиннее';
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
      const data = {  ...values  };
      try {
        authorStore.addAuthor(data, token)
        setSubmitting(false);
        modalStore.hideModal();
        resetForm();
      } catch (er) {
        setSubmitting(true);
        setFieldError('connection', 'Ошибка сети');
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
                  {...formik.getFieldProps('name')}
                  style={textBorderColorStyle}
                  className="mb-3"
                />
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>
                ) : null}
                <Form.Control
                  type="text"
                  placeholder="Фамилия"
                  {...formik.getFieldProps('lastName')}
                  style={textBorderColorStyle}
                />                
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div>{formik.errors.lastName}</div>
                ) : null}
              </Form.Group>
              <Button variant="primary" type="submit" disabled={formik.isSubmitting}>Добавить</Button>
            </Form>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );
};

export default AddAuthorModal;