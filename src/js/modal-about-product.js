(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-open-about-product-one]'),
    openModalBtn2: document.querySelector('[data-modal-open-about-product-two]'),
    openModalBtn3: document.querySelector('[data-modal-open-about-product-tree]'),
    closeModalBtn: document.querySelector('[data-modal-close-about-product]'),
    modal: document.querySelector('[data-modal-about-product]'),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openModalBtn3.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-about-product');
  }
})();
