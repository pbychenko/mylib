import AddGenreModal from './AddGenreModal.js';
import AddAuthorModal from './AddAuthorModal.js';
import AddBookModal from './AddBookModal.js';


const map = {
  addGenreModal: AddGenreModal,
  addAuthorModal: AddAuthorModal,
  addBookModal: AddBookModal,
};

const getModal = (modalName) => map[modalName];

export default getModal;