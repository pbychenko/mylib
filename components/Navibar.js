import { Container, Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const Navibar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>              
      <Link href="/" passHref>
        <Navbar.Brand>
          Techno Lib
        </Navbar.Brand>
      </Link>             
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
          <Link href="/catalog" passHref>
            <Nav.Link>Каталог</Nav.Link>
          </Link>
          <Link href="/authors" passHref>
            <Nav.Link>Авторы</Nav.Link>
          </Link>
          <Link href="/genres" passHref>
            <Nav.Link>Жанры</Nav.Link>
          </Link>
          <Link href="/users" passHref>
            <Nav.Link>Пользователи</Nav.Link>
          </Link>
      </Nav>
      <Nav>
        <Link href="/cabinet" passHref>
          <Nav.Link>Личный кабинет</Nav.Link>
        </Link>
      </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navibar;
