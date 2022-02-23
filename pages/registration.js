// import Page from '../components/Page'
import Navibar from '../components/Navibar'
import { Container } from 'react-bootstrap';
import RegistrationForm from '../components/RegistrationForm';

const Registration = () => {
  return (
    <>      
      <Navibar />
      <h2>Регистрация</h2>
      <Container className="mt-2">
        <RegistrationForm />
      </Container>
    </>
  )
}

export default Registration;