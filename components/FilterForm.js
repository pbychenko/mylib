import { observer } from 'mobx-react-lite'
import { useStore } from './StoreProvider'
import { Col, Button, Row, Form, Card } from 'react-bootstrap';
import axios from 'axios';

const FilterForm = observer(() => {
  const { authors, books } = useStore();
  // console.log('d',authors)
  const submitForm = (e) => {
    e.preventDefault()
    console.log(e.target.author.value)
    books.fetchBooks(e.target.author.value)

    // const res = await fetch('/api/register', {
    //   body: JSON.stringify({
    //     name: event.target.name.value
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   method: 'POST'
    // })

    // const result = await res.json()
    // result.user => 'Ada Lovelace'
  }
  

  return (
    <Form onSubmit={submitForm}>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Автор</Form.Label>
                {/* <Form.Control /> */}
                <Form.Select name="author">
                  <option value='all' selected>Выберите автора</option>
                  {authors.authors.map((author) => (
                    <option value={author.id}>{author.name} {author.last_name}</option>
                  ))}                    
                </Form.Select>
            </Form.Group>

            {/* <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Жанр</Form.Label>
                <Form.Select defaultValue="Choose...">
                  {authors.authors.map((author) => {
                    <option>{author.name}</option>
                  })}
                </Form.Select>
                
            </Form.Group> */}
        </Row>

        {/* <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Доступны" />
        </Form.Group> */}

        <Button variant="primary" type="submit">
            Submit
        </Button>
</Form>
  )
})

export default FilterForm;