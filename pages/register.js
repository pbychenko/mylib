import { Container } from 'react-bootstrap';
import RegisterForm from '../components/RegisterForm';

const Registration = () => {
  return (
    <>
      <h2>Регистрация</h2>
      <Container className="mt-2">
        <RegisterForm />
      </Container>
    </>
  )
}

export default Registration;