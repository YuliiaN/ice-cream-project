(() => {
  const refs = {
    openModalBtn1: document.querySelector("[data-modal-open-buy-now-mob]"),
    openModalBtn2: document.querySelector("[data-modal-open-buy-now-tablet]"),
    openModalBtn3: document.querySelector("[data-modal-open-buy-now-desk]"),
    closeModalBtn: document.querySelector("[data-modal-close-buy-now]"),
    modal: document.querySelector("[data-modal-buy-now]"),
  };

  refs.openModalBtn1.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);
  refs.openModalBtn3.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-buy-now");
  }
})();