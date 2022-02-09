import AddGenreModal from './AddGenreModal.js';


const map = {
  addGenreModal: AddGenreModal,
};

const getModal = (modalName) => map[modalName];

export default getModal;