import { runInAction, makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import axios from 'axios';

enableStaticRendering(typeof window === 'undefined')

export default class Authors {
  authors = []
  rootStore

  // constructor(rootStore) {
  //   makeAutoObservable(this, { rootStore: false })
  //   this.rootStore = rootStore
  // }

  constructor() {
    makeAutoObservable(this)
    // this.rootStore = rootStore
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

  // deleteItem(id) {
  //   this.todos = this.todos.filter(el => el.id !== id);
  // }

  // changeItem(id) {
  //   this.todos = this.todos.map(el => el.id === id ? { ...el, title: el.title +'c' } : el);
  // }

  fetchAuthors = async () => {
    const authors = (await axios.get('http://localhost:3333/api/authors')).data;
    console.log(authors)

    runInAction(() => {
      this.authors = authors;      
    })
  }

  get genresData() {
    return this.authors;
  }

  hydrate = (data) => {
    if (!data) return;

    this.authors = data;
  }
}
