import { Container } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <> 
      <h2>Авторизация</h2>
      <Container className="mt-2">
        <LoginForm />
      </Container>
    </>
  )
}

export default Login;