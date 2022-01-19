import { runInAction, makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import axios from 'axios';

enableStaticRendering(typeof window === 'undefined')

export default class Books {
  books = []
  rootStore

  // constructor(rootStore) {
  //   makeAutoObservable(this, { rootStore: false })
  //   this.rootStore = rootStore
  // }

  constructor() {
    makeAutoObservable(this)
    // this.rootStore = rootStore
  }

  addBook = async (bookData) => {
    const { title, about, genreId, authorId } = bookData
    const res = await axios.post('http://localhost:3333/api/books', {
      title,
      about,
      genreId,
      authorId
    });
    // console.log(res.data)    
    this.books.push({ id: res.data, title, about });
  }

  // deleteItem(id) {
  //   this.todos = this.todos.filter(el => el.id !== id);
  // }

  // changeItem(id) {
  //   this.todos = this.todos.map(el => el.id === id ? { ...el, title: el.title +'c' } : el);
  // }

  fetchBooks = async () => {
    const data = (await axios.get('http://localhost:3333/api/books')).data;


    runInAction(() => {
      this.books = data;      
    })
  }

  // get genresData() {
  //   return this.genres;
  // }

  hydrate = (data) => {
    if (!data) return;

    this.genres = data;
  }
}
