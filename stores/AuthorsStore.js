import { runInAction, makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import axios from 'axios';

enableStaticRendering(typeof window === 'undefined')

export default class AuthorsStore {
  authors = []
  rootStore

  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  addAuthor= async (authorData) => {
    const { name, lastName } = authorData
    const res = await axios.post('http://localhost:3333/api/authors', {
      name,
      lastName,
    });
    console.log(res.data)    
    this.authors.push({id: res.data, name, last_name: lastName});
  }

  fetchAuthors = async () => {
    const authors = (await axios.get('http://localhost:3333/api/authors')).data;
    // console.log(authors)

    runInAction(() => {
      this.authors = authors;      
    })
  }

  get authorsData() {
    return this.authors;
  }

  hydrate = (data) => {
    if (!data) return;

    this.authors = data;
  }
}
