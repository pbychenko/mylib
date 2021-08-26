import { observer } from 'mobx-react-lite'
// import { useStore } from './StoreProvider'
import { Col, Button, Row, Form } from 'react-bootstrap';

const FilterForm = observer((props) => {
  return (
    <Form>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Автор</Form.Label>
                <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Жанр</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Select>
            </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Доступны" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
</Form>
  )
})

export default FilterForm;