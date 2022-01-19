// import { action, observable, computed, runInAction, makeObservable } from 'mobx'
// import { enableStaticRendering } from 'mobx-react-lite'

// enableStaticRendering(typeof window === 'undefined')

// export class Store {
//   lastUpdate = 0
//   light = false

//   constructor() {
//     makeObservable(this, {
//       lastUpdate: observable,
//       light: observable,
//       start: action,
//       hydrate: action,
//       timeString: computed,
//     })
//   }

//   start = () => {
//     this.timer = setInterval(() => {
//       runInAction(() => {
//         this.lastUpdate = Date.now()
//         this.light = true
//       })
//     }, 1000)
//   }

//   get timeString() {
//     const pad = (n) => (n < 10 ? `0${n}` : n)
//     const format = (t) =>
//       `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(
//         t.getUTCSeconds()
//       )}`
//     return format(new Date(this.lastUpdate))
//   }

//   stop = () => clearInterval(this.timer)

//   hydrate = (data) => {
//     if (!data) return

//     this.lastUpdate = data.lastUpdate !== null ? data.lastUpdate : Date.now()
//     this.light = !!data.light
//   }
// }

import {  makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import Counter from './stores/Counter';
import Todo from './stores/Todo';
import Genres from './stores/Genres';
import Authors from './stores/Authors';
import Books from './stores/Books';

enableStaticRendering(typeof window === 'undefined')

export class Store {
  constructor() {
    makeAutoObservable(this)
    this.counter = new Counter();
    this.todo = new Todo();
    this.genres = new Genres();
    this.authors = new Authors();
    this.books = new Books();
  }

  hydrate(data) {
    if (!data) return;

    this.counter.hydrate(data.counter);
    this.todo.hydrate(data.todo);
    this.genres.hydrate(data.genres);
    this.books.hydrate(data.books);
  }
}
