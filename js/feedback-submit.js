(() => {
  const feedbackForm = document.querySelector('.js-speaker-form');
  const nameField = document.querySelector('input[name="name"]');
  const telField = document.querySelector('input[name="tel"]');
  const emailField = document.querySelector('input[name="email"]');

  feedbackForm.setAttribute('novalidate', '');
  nameField.setAttribute('required', '');
  telField.setAttribute('required', '');
  emailField.setAttribute('required', '');

  feedbackForm.addEventListener('submit', onFeedbackSubmit);

  function onFeedbackSubmit(e) {
    e.preventDefault();
  }
})();
