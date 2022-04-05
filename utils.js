import axios from 'axios';
import routes from './routes';

const checkAuthorization = async (token, store) => {
  const url = routes.profilePath();
  try {    
    const { data: user } = await axios.get(url, { headers: { Authorization: `Bearer ${token}` }});
    store.setCurrentUser(user)
    store.setIsAuth(true);
  } catch (e) {
    store.setIsAuth(false);
    store.setCurrentUser(null);
  }
}

export default checkAuthorization;