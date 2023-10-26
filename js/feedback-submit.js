(() => {
  let form = document.querySelector('.orderform__form'),
    fields = form.querySelectorAll('.orderform__input'),
    nameField = form.querySelector('.namefield'),
    telField = form.querySelector('.telfield'),
    emailField = form.querySelector('.emailfield'),
    submitBtn = form.querySelector('.orderform__btn-submit');

  function validateEmail(email) {
    let re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return re.test(String(email).toLocaleLowerCase());
  }

  function validateName(nameFd) {
    let re = /^(\w{3,25})$/;
    return re.test(String(nameFd).toLocaleLowerCase());
  }

  function validatePhone(phone) {
    let re = /^\+[0-9]{2}\s\([0-9]{3}\)\s[0-9]{3}.[0-9]{2}.[0-9]{2}$/;
    return re.test(String(phone).toLocaleLowerCase());
  }

  form.onsubmit = function () {
    let nameVal = nameField.value,
      telVal = telField.value,
      emailVal = emailField.value,
      namelVal = nameField.value,
      emptyInputs = Array.from(fields).filter(input => input.value === '');

    fields.forEach(function (input) {
      if (input.value == '') {
        // console.log('Field empty');
        submitBtn.classList.add('orderform__btn-submit--warning');
        input.classList.add('orderform__input--warning');
        // submitBtn.disabled = true;
      } else {
        // console.log('Not empty');
        submitBtn.classList.remove('orderform__btn-submit--warning');
        input.classList.remove('orderform__input--warning');
      }
    });

    if (emptyInputs.length !== 0) {
      // console.log('Inputs not field');
      return false;
    }

    if (!validateName(nameVal)) {
      // console.log('Name not valid.');
      nameField.classList.add('orderform__input--warning');
      return false;
    } else {
      nameField.classList.remove('orderform__input--warning');
    }

    if (!validatePhone(telVal)) {
      // console.log('Phone not valid.');
      telField.classList.add('orderform__input--warning');
      return false;
    } else {
      telField.classList.remove('orderform__input--warning');
    }

    if (!validateEmail(emailVal)) {
      // console.log('Email not valid.');
      emailField.classList.add('orderform__input--warning');
      return false;
    } else {
      emailField.classList.remove('orderform__input--warning');
    }

    return false;
  };
})();
