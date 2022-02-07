// import Page from '../components/Page'
import Navibar from '../components/Navibar'
import { Container } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <>      
      <Navibar />
      <h2>Авторизация</h2>
      <Container className="mt-2">
        <LoginForm />
      </Container>
    </>
  )
}

export default Login;