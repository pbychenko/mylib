
import {  makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'

enableStaticRendering(typeof window === 'undefined')

export default class Counter {
  count
  rootStore

  constructor(rootStore) {
    // makeAutoObservable(this)
    makeAutoObservable(this, { rootStore: false })
    this.rootStore = rootStore
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  // get count() {
  //   return this.count;
  // }

  hydrate(data){
    if (!data) return;

    this.count = data;
  }
}
