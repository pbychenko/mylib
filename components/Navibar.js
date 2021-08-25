import { observer } from 'mobx-react-lite'
// import { useStore } from './StoreProvider'
import { Container, Navbar, Nav } from 'react-bootstrap';

const Navibar = observer((props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Techno Lib</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#features">Каталог</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link eventKey={2} href="#memes">
                Личный кабинет
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
})

export default Navibar;
