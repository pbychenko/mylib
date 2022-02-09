import { runInAction, makeAutoObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
// import axios from 'axios';

enableStaticRendering(typeof window === 'undefined')

export default class ModalsStore {
  modalName = ''

  constructor(rootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  hideModal() {
    this.modalName = ''
  }

  showModal(name) {
    this.modalName = name
  }
}
