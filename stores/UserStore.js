import { runInAction, makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import axios from 'axios';

enableStaticRendering(typeof window === 'undefined')

export default class UserStore {
  isAuth = false
  currentUser = null
  users = []

  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  setIsAuth(bool) {
    this.isAuth = bool
  }
  
  setCurrentUser(user) {
    this.currentUser = { ...user}
  }

  get isAuth() {
    return this.isAuth
  }

  get currentUser() {
    return this.currentUser
  }

  // addAuthor= async (userData) => {
  //   const { name, lastName } = authorData
  //   const res = await axios.post('http://localhost:3333/api/authors', {
  //     name,
  //     lastName,
  //   });
  //   console.log(res.data)    
  //   this.authors.push({id: res.data, name, last_name: lastName});
  // }

  fetchUsers = async () => {
    const users = (await axios.get('http://localhost:3333/api/users')).data;
    // console.log(authors)

    runInAction(() => {
      this.users = users;      
    })
  }

  // get usersData() {
  //   return this.;
  // }

  hydrate = (data) => {
    if (!data) return;

    this.users = data.users;
    this.isAuth = data.isAuth;
    this.currentUser = data.currentUser;
  }
}
