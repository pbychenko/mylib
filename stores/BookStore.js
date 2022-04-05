import { runInAction, makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import axios from 'axios';
import routes from '../routes';

enableStaticRendering(typeof window === 'undefined');

export default class BookStore {
  books = [];
  rootStore;

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  addBook = async (bookData, token) => {
    const { title, about, authorIds } = bookData;
    const url = routes.booksPath();
    try {
      const { data: id } = await axios.post(url, bookData, { headers: { Authorization: `Bearer ${token}` } });
      this.books.push({ id: id, title, about, authorIds });
    } catch (e) {
      console.log(e);
    }
  }

  setHolder = async (book, holderId, token) => {
    const url = routes.bookPath(book.id);
    try {
      await axios.patch(url, { holderId }, { headers: { Authorization: `Bearer ${token}` } });
      book.holderId = holderId;
    } catch (e) {
      console.log(e);
    }
  }

  fetchBooks = async (authorId = '', genreId = '') => {
    const url = routes.booksPath();
    try {
      const { data: books } = await axios.get(`${url}?authorId=${authorId}&genreId=${genreId}`);
      runInAction(() => {
        this.books = books;      
      });
    } catch (e) {
      console.log(e);
    }    
  }

  hydrate = (data) => {
    if (!data) return;

    this.genres = data;
  }
}
