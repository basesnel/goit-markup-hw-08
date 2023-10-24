(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    backDrop: document.querySelector('[data-backdrop]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.backDrop.classList.toggle('backdrop--is-hidden');

    // console.log(window.innerHeight, refs.modal.clientHeight);
    if (refs.modal.clientHeight <= window.innerHeight) {
      refs.modal.classList.toggle('modal--absolute');
    }
  }
})();
