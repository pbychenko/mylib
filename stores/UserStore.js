import { runInAction, makeAutoObservable } from 'mobx';
import { enableStaticRendering } from 'mobx-react-lite';
import axios from 'axios';
import routes from '../routes';

enableStaticRendering(typeof window === 'undefined')

export default class UserStore {
  isAuth = false;
  currentUser = null;
  users = [];
  rootStore;

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setIsAuth(bool) {
    this.isAuth = bool;
  }
  
  setCurrentUser(user) {
    this.currentUser = { ...user};
  }

  get isAuth() {
    return this.isAuth;
  }

  get currentUser() {
    return this.currentUser;
  }

  fetchUsers = async () => {
    const url = routes.usersPath();
    const { data: users } = await axios.get(url);

    runInAction(() => {
      this.users = users;      
    })
  }

  hydrate = (data) => {
    if (!data) return;

    this.users = data.users;
    this.isAuth = data.isAuth;
    this.currentUser = data.currentUser;
  }
}
