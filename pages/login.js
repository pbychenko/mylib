// import Page from '../components/Page'
import Navibar from '../components/Navibar'
import { Container } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <>      
      <Navibar />
      <Container className="mt-2">
        <LoginForm />
      </Container>
    </>
  )
}

export default Login;