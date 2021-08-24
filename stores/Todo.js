import {  makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'

enableStaticRendering(typeof window === 'undefined')

export default class Todo {
  todos = []
  rootStore

  constructor(rootStore) {
    makeAutoObservable(this, { rootStore: false })
    this.rootStore = rootStore
  }

  addItem(item) {    
    this.todos.push(item);
  }

  deleteItem(id) {
    this.todos = this.todos.filter(el => el.id !== id);
  }

  get todo() {
    return this.todos;
  }

  hydrate = (data) => {
    if (!data) return;

    this.todos = data;
  }
}
