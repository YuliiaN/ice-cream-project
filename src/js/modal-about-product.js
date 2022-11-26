(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-about-product]'),
    closeModalBtn: document.querySelector('[data-modal-close-about-product]'),
    modal: document.querySelector('[data-modal-about-product]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-about-product');
  }
})();
