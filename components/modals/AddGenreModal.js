import {
  Modal, Card, Form, Button,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { useStore } from '../StoreProvider'


const AddGenreModal = ({ token }) => {
  const { modalStore, genreStore } = useStore();

  const handleHideModal = () => {
    modalStore.hideModal();
  };

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Заполните поле';
    } else if (values.title.length < 3) {
      errors.title = 'Название жанра должно быть подлиннее';
    }        

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: '',
    },
    validate,
    onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
      const data = {  ...values  };
      try {
        await genreStore.addGenre(data, token)
        setSubmitting(false);
        modalStore.hideModal();
        resetForm();
      } catch (er) {
        setSubmitting(true);
        setFieldError('connection', 'Ошибка сети');
        console.log(er);
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
                  {...formik.getFieldProps('title')}
                  style={textBorderColorStyle}
                />
                {formik.touched.title && formik.errors.title ? (
                  <div>{formik.errors.title}</div>
                ) : null}
              </Form.Group>
              { formik.errors.connection ? (
                <div>{formik.errors.connection}</div>
              ) : null}
              <Button variant="primary" type="submit" disabled={formik.isSubmitting}>Добавить</Button>
            </Form>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );
};

export default AddGenreModal;