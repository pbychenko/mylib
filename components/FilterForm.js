import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Form, Card } from 'react-bootstrap';
import { useFormik } from 'formik';

const FilterForm = observer(() => {
  const { authorsStore, booksStore, genreStore } = useStore();

  const formik = useFormik({
    initialValues: {
      authorId: '',
      genreId: '',
    },
    // validate,
    onSubmit: async (values, { setSubmitting, resetForm, setFieldError }) => {
      // const url = routes.channelsPath();
      const { authorId, genreId} = values;
      // console.log(data)
      try {
  //   console.log(e.target.author.value)
        booksStore.fetchBooks(authorId, genreId)
        setSubmitting(false);
        // resetForm();
      } catch (er) {
        setSubmitting(true);
        setFieldError('name', 'networkError');
        throw er;
      }
    },
  });  

  return (
    // <Form onSubmit={submitForm}>
    <Form onSubmit={formik.handleSubmit}>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formAuthor">
                <Form.Label>Автор</Form.Label>
                <Form.Select
                 {...formik.getFieldProps('authorId')}
                 >
                  {/* <option value='all' selected>Выберите автора</option> */}
                  <option value="">Выберите автора</option>
                  {authorsStore.authors.map((author) => (
                    <option key={author.Id} value={author.id}>{author.name} {author.last_name}</option>
                  ))}                    
                </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGenre">
                <Form.Label>Жанр</Form.Label>
                <Form.Select
                 {...formik.getFieldProps('genreId')}
                 >
                  {/* <option value='all' selected>Выберите жанр</option> */}
                  <option value="">Выберите жанр</option>
                  {genreStore.genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>{genre.title}</option>
                  ))}                    
                </Form.Select>
            </Form.Group>
        </Row>
        <Button variant="primary" type="submit"  disabled={formik.isSubmitting}>Показать</Button>
  </Form>
  )
})

export default FilterForm;