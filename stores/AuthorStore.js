import { runInAction, makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import axios from 'axios';
import routes from '../routes';

enableStaticRendering(typeof window === 'undefined')

export default class AuthorStore {
  authors = [];
  rootStore;

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  addAuthor= async (authorData, token) => {
    const url = routes.authorsPath();
    const { name, lastName: last_name } = authorData;
    const { data } = await axios.post(url, authorData, { headers: { Authorization: `Bearer ${token}` } });
    this.authors.push({ id: data, name, last_name });
  }

  fetchAuthors = async () => {
    const url = routes.authorsPath();
    try {
      const { data: authors } = await axios.get(url);

      runInAction(() => {
        this.authors = authors;      
      });
    } catch (e) {
      console.log(e);
    }
  }

  get authorsData() {
    return this.authors;
  }

  hydrate = (data) => {
    if (!data) return;

    this.authors = data;
  }
}
