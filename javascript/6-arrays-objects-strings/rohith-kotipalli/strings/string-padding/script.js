function padStringWithZeros() {
    const inputString = document.getElementById('inputString').value;
    if (!inputString) {
      document.getElementById('paddingResult').textContent = 'Please enter a valid string.';
      return;
    }

    const paddedString = inputString.padStart(10, '0');
    document.getElementById('paddingResult').textContent = `Padded string: ${paddedString}`;
  }