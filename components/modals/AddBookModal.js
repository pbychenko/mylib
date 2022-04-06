import {
  Modal, Card, Form, Button,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { useStore } from '../StoreProvider';


const AddBookModal = ({ token }) => {
  const { modalStore, authorStore, bookStore, genreStore } = useStore();

  const handleHideModal = () => {
    modalStore.hideModal();
  };

  const validate = (values) => {
    const errors = {};

    if (!values.title) {
      errors.title = 'Заполните поле';
    } else if (values.title.length < 4) {
      errors.title = 'Название должно быть подлиннее';
    }

    if (!values.about) {
      errors.about = 'Заполните поле';
    } else if (values.about.length < 4) {
      errors.about = 'Описание должно быть подлиннее';
    }

    if (!values.genreId) {
      errors.genreId = 'Выберите жанр';
    }

    if (!values.authorIds) {
      errors.authorIds = 'Укажите авторов';
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
      const authorIds = values.authorIds.map(el => +el);
      const data = { ...values, authorIds };
      try {
        await bookStore.addBook(data, token)
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
                  {...formik.getFieldProps('title')}
                  style={textBorderColorStyle}
                  className="mb-3"
                />
                {formik.touched.title && formik.errors.title ? (
                  <div>{formik.errors.title}</div>
                ) : null}
                <Form.Control
                  type="text"
                  placeholder="О чем?"
                  {...formik.getFieldProps('about')}
                  style={textBorderColorStyle}
                  className="mb-3"
                />
                {formik.touched.about && formik.errors.about ? (
                  <div>{formik.errors.about}</div>
                ) : null}

                <Form.Select
                 aria-label="Default select example"
                 {...formik.getFieldProps('genreId')}
                 className="mb-3"
                 >
                  <option>Open this select menu</option>
                  {genreStore.genres.map((genre) => 
                    (<option key={genre.id} value={genre.id}>{genre.title}</option>))
                  }
                </Form.Select>
                {formik.errors.genreId ? (
                  <div>{formik.errors.genreId}</div>
                ) : null}
                <Form.Select
                 aria-label="Default select example"
                 {...formik.getFieldProps('authorIds')}
                 multiple
                 >
                  <option>Open this select menu</option>
                  {authorStore.authors.map((author) => 
                    (<option key={author.id} value={author.id}>{author.name} {author.last_name}</option>))
                  }
                </Form.Select>
                {formik.errors.authorIds ? (
                  <div>{formik.errors.authorIds}</div>
                ) : null}               
              </Form.Group>
              { formik.errors.connection ? (
                <div>{formik.errors.connection}</div>
              ) : null}
              <Button variant="primary" type="submit"  disabled={formik.isSubmitting}>Добавить</Button>
            </Form>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );
};

export default AddBookModal;