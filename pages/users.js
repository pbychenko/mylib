import UsersList from '../components/UsersList'; 
import { Container } from 'react-bootstrap';

const Users = () => (
  <>
    <Container className="mt-2">
      <UsersList />
    </Container>
  </>
);

export default Users;