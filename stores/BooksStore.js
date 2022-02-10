import { runInAction, makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import axios from 'axios';

enableStaticRendering(typeof window === 'undefined')

export default class BooksStore {
  books = []
  rootStore

  // constructor(rootStore) {
  //   makeAutoObservable(this, { rootStore: false })
  //   this.rootStore = rootStore
  // }

  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  addBook = async (bookData) => {
    const { title, about, genreId, authorIds } = bookData
    const res = await axios.post('http://localhost:3333/api/books', {
      title,
      about,
      genreId,
      authorIds
    });
    // console.log(res.data)
    // console.log('res.data', res.data)

    
    this.books.push({ id: res.data.id, title, about, authorIds });
  }

  // deleteItem(id) {
  //   this.todos = this.todos.filter(el => el.id !== id);
  // }

  // changeItem(id) {
  //   this.todos = this.todos.map(el => el.id === id ? { ...el, title: el.title +'c' } : el);
  // }

  fetchBooks = async (authorId, genreId) => {
    const data = (await axios.get(`http://localhost:3333/api/books?authorId=${authorId}&genreId=${genreId}`)).data;
    // console.log(data)

    runInAction(() => {
      this.books = data;      
    })
  }

  hydrate = (data) => {
    if (!data) return;

    this.genres = data;
  }
}
