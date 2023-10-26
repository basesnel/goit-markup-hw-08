(() => {
  // Set the input
  const input = document.querySelector('input[name="tel"]');

  // Mask-input function
  function setMask(event) {
    // Set variable for pressed key
    let pressedKey;
    // Condition that checks whether a key is pressed
    event.keyCode && pressedKey === event.keyCode;
    // Set the position in the input to a variable from which input of numbers will be available
    let numberPos = this.selectionStart;
    // We set the ability to enter numbers from the third position
    if (numberPos < 3) {
      event.preventDefault();
    }
    // Set the appearance of the input-mask
    let maskType = '+38 (___) ___-__-__',
      i = 0,
      // Checking and replacing the value of the input letter by letter
      replaceValue = maskType.replace(/\D/g, ''),
      prevValue = this.value.replace(/\D/g, ''),
      currentValue = maskType.replace(/[_\d]/g, a => {
        return i < prevValue.length ? prevValue.charAt(i++) || replaceValue.charAt(i) : a;
      });
    // Protection against erasing the first two digits (+7)
    i = currentValue.indexOf('_');
    if (i != -1) {
      i < 5 && (i = 3);
      currentValue = currentValue.slice(0, i);
    }
    // Regexp for check value of input
    let reg = maskType
      .substr(0, this.value.length)
      .replace(/_+/g, function (a) {
        return '\\d{1,' + a.length + '}';
      })
      .replace(/[+()]/g, '\\$&');
    reg = new RegExp('^' + reg + '$');
    // Checking input contents for regular expression, length and keystrokes
    if (!reg.test(this.value) || this.value.length < 5 || (pressedKey > 47 && pressedKey < 58)) {
      this.value = currentValue;
    } else if (event.type === 'blur' && this.value.length < 5) {
      this.value = '';
    }

    // Set the cursor to the end of the line in the input if it is not at the end when the button is pressed
    input.setSelectionRange(input.value.length, input.value.length);
  }

  // Running the setMask function through an event handler
  input.addEventListener('input', setMask, false);
  input.addEventListener('focus', setMask, false);
  input.addEventListener('blur', setMask, false);
  input.addEventListener('keydown', setMask, false);
})();
