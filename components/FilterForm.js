import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Form } from 'react-bootstrap';
import { useFormik } from 'formik';

const FilterForm = observer(() => {
  const { authorStore, bookStore, genreStore } = useStore();

  const formik = useFormik({
    initialValues: {
      authorId: '',
      genreId: '',
    },
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      const { authorId, genreId} = values;
      try {
        bookStore.fetchBooks(authorId, genreId)
        setSubmitting(false);
      } catch (er) {
        setSubmitting(true);
        setFieldError('connection', 'Ошибка сети');
        throw er;
      }
    },
  });  

  return (
    <Form onSubmit={formik.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formAuthor">
            <Form.Label>Автор</Form.Label>
            <Form.Select
              {...formik.getFieldProps('authorId')}
              >
              <option value="">Выберите автора</option>
              {authorStore.authors.map((author) => (
                <option key={author.id} value={author.id}>{author.name} {author.last_name}</option>
              ))}                    
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGenre">
            <Form.Label>Жанр</Form.Label>
            <Form.Select
              {...formik.getFieldProps('genreId')}
              >
              <option value="">Выберите жанр</option>
              {genreStore.genres.map((genre) => (
                <option key={genre.id} value={genre.id}>{genre.title}</option>
              ))}                    
            </Form.Select>
          </Form.Group>
          { formik.errors.connection ? (
              <div>{formik.errors.connection}</div>
            ) : null}
        </Row>
        <Button variant="primary" type="submit"  disabled={formik.isSubmitting}>Показать</Button>
  </Form>
  )
});

export default FilterForm;