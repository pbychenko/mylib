import {  makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'

enableStaticRendering(typeof window === 'undefined')

export default class Genres {
  genres = []
  rootStore

  // constructor(rootStore) {
  //   makeAutoObservable(this, { rootStore: false })
  //   this.rootStore = rootStore
  // }

  constructor() {
    makeAutoObservable(this)
    // this.rootStore = rootStore
  }

  // addItem(item) {    
  //   this.todos.push(item);
  // }

  // deleteItem(id) {
  //   this.todos = this.todos.filter(el => el.id !== id);
  // }

  // changeItem(id) {
  //   this.todos = this.todos.map(el => el.id === id ? { ...el, title: el.title +'c' } : el);
  // }

  fetchGenres() {
   fetch('http://localhost:3333/api/genres').then(res => 
    // await runMiddleware(req, res, cors) 
    res.json())
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  .then(json => console.log(json))
    // this.todos = this.todos.map(el => el.id === id ? { ...el, title: el.title +'c' } : el);
  }

  // get todo() {
  //   return this.todos;
  // }

  hydrate = (data) => {
    if (!data) return;

    this.genres = data;
  }
}
