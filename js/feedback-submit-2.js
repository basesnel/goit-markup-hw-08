(() => {
  const feedbackForm = document.querySelector('.js-speaker-form');
  const nameField = document.querySelector('input[name="name"]');
  const telField = document.querySelector('input[name="tel"]');
  const emailField = document.querySelector('input[name="email"]');

  feedbackForm.setAttribute('novalidate', '');
  nameField.setAttribute('required', '');
  nameField.setAttribute('minlength', '3');
  nameField.setAttribute('maxlength', '25');
  telField.setAttribute('required', '');
  emailField.setAttribute('required', '');

  feedbackForm.addEventListener('submit', onFeedbackSubmit);

  function onFeedbackSubmit(e) {
    feedbackForm.checkValidity();
    console.dir(nameField.validity);
    e.preventDefault();
  }
})();
