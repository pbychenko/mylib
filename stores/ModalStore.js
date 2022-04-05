import {  makeAutoObservable } from 'mobx';
import { enableStaticRendering } from 'mobx-react-lite';

enableStaticRendering(typeof window === 'undefined')

export default class ModalStore {
  modalName = '';

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  hideModal() {
    this.modalName = '';
  }

  showModal(name) {
    this.modalName = name;
  }
}
