import AddGenreModal from './AddGenreModal.js';
import AddAuthorModal from './AddAuthorModal.js';


const map = {
  addGenreModal: AddGenreModal,
  addAuthorModal: AddAuthorModal,
};

const getModal = (modalName) => map[modalName];

export default getModal;