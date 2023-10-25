(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    backDrop: document.querySelector('[data-backdrop]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function getClientSize() {
    if (typeof window.innerWidth == 'number') {
      //Non-IE
      const width = window.innerWidth;
      const height = window.innerHeight;
      return { width, height };
    }

    if (
      document.documentElement &&
      (document.documentElement.clientWidth || document.documentElement.clientHeight)
    ) {
      //IE 6+ in 'standards compliant mode'
      const width = document.documentElement.clientWidth;
      const height = document.documentElement.clientHeight;
      return { width, height };
    }

    if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
      //IE 4 compatible
      const width = document.body.clientWidth;
      const height = document.body.clientHeight;
      return { width, height };
    }
  }

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.backDrop.classList.toggle('backdrop--is-hidden');

    if (refs.modal.clientHeight <= getClientSize().height) {
      refs.modal.classList.toggle('modal--absolute');
    }
  }
})();
