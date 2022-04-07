
import { observer } from 'mobx-react-lite';
import { Container } from 'react-bootstrap';
import cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useStore } from '../components/StoreProvider';
import PersonalInfoForm from '../components/PersonalInfoForm';
import UserBookList from '../components/UserBookList';
import checkAuthorization from '../utils';

const Cabinet = observer(() => {
  const router = useRouter();
  const { userStore } = useStore();
  const token = cookies.get('token');
  // const [isLoading, setLoading] = useState(false)

  useEffect(async () => {
    // setLoading(true)
    if (!token) {
      router.push('/');
    }
    await checkAuthorization(token, userStore);
    if (!userStore.isAuth) {
      router.push('/');
    }
  }, []);

  return (
    <>  
      <Container className="mt-2">
          <h2>Профиль</h2>
          {userStore.currentUser ? <PersonalInfoForm /> : null }
          <h2>Взятые книги</h2>
          {userStore.currentUser ? <UserBookList /> : null }
      </Container>
    </>
  )
});

export default Cabinet;
